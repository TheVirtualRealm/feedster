$(document).ready(() => {


$('.menu').on('mouseenter', () => {
$('.nav-menu').show();


})

$('nav-menu').on('mouseleave', () =>{
  $('nav-menu').hide();
})

$('.btn').on('mouseenter', () =>{
  $($(event.currentTarget)).addClass('btn-hover');
}).on('mouseleave', ()=>{
  $($(event.currentTarget)).removeClass('btn-hover');
}).removeClass('btn-hover');


$('postText').on('keyup' , () => {
  $('.postText').focus();
  $(event.currentTarget).val('postText');
})



$()


$()


$()

}); 
