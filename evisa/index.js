$('.toggle-register').click(function(){
    $(this).addClass('active');
    $('.toggle-login').removeClass('active');
    $('.login-body').slideUp("slow");
    $('.register-body').delay(625).slideDown("slow");
  });
  
  $('.toggle-login').click(function(){
    $(this).addClass('active');
    $('.toggle-register').removeClass('active');
    $('.register-body').slideUp("slow");
    $('.login-body').delay(625).slideDown("slow");
  });
  
  $('#registered').click(function(){
    $('.toggle-login').click();
  });
  
  $('.card').click(function() {
    $(this).addClass('active');
});

$('.card').click(function() {
  $(this).removeClass('active');
});

// $('.card').click(function() {
//   $('.card').removeClass('active');
//   $(this).addClass('active');
// });

$('.cart-1').click(function(){
  $(this).removeClass('cart-close');
  $('.cart-2').addClass('cart-open');
  $('.cart-open').slideUp("slow");
  $('.cart-1').delay(625).slideDown("slow");
});

$('.cart-2').click(function(){
  $(this).removeClass('cart-open');
  $('.cart-1').addClass('cart-close');
  $('.cart-close').slideUp("slow");
  // $('.cart-open').slideUp("slow");
  // $('.register-body').delay(625).slideDown("slow");
});
