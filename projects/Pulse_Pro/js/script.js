$(function() {
  $('#toggle-event').change(function() {

    if($(this).prop("checked") == true){
      $('.pp__time-monthly').addClass('pp-header__active-duration');
      $('.pp__time-annual').removeClass('pp-header__active-duration');
    }
    else if($(this).prop("checked") == false){
      $('.pp__time-annual').addClass('pp-header__active-duration');
      $('.pp__time-monthly').removeClass('pp-header__active-duration');
    }
    
  })
})