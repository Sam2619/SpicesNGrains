
//code to stay on the same tab even after browser refresh
$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('ul.nav a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});

//code to show the links data ex: Bevereges-> bevereges list
/*$(function(){
          
          var hash = window.location.hash;
          hash && $('ul.nav a[href="' + hash + '"]').tab('show');

            $('#products a').on('click', function(e){
              $(this).tab('show');
              var scrollmem = $('body').scrollTop();
              window.location.hash = this.hash;
              $('html,body').scrollTop(scrollmem);



        //e.preventDefault();
        //$(this).tab('show');
    });
});*/

$(function(){
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

});

$(function(){
  $('#products a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = this.href.split('#');
    $('.nav a').filter('[href="#'+target[1]+'"]').tab('show');
});


