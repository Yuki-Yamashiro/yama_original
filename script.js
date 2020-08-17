
$(".header-link").hover(
  function () {
      $(this).css({
          'color': 'red',
          'border-bottom': '2px solid lavenderblush',
      })
  },
  function () {
      $(this).css({
          'color': 'black',
          'border-bottom': '0px'
      })
  }
);





$("#top-link").on('click', function(){
  const topArea = $(".top-area").offset().top;
  $(window).scrollTop(topArea);
});

$("#school-link").on('click', function(){
  const schoolArea = $("#school-area").offset().top;
  $(window).scrollTop(schoolArea);
});

$("#about-link").on('click', function(){
  const aboutArea = $("#about-area").offset().top;
  $(window).scrollTop(aboutArea);
});

$("#event-link").on('click', function(){
  const eventArea = $("#event-area").offset().top;
  $(window).scrollTop(eventArea);
});

$("#profile-link").on('click', function(){
  const profileArea = $("#profile-area").offset().top;
  $(window).scrollTop(profileArea);
});





$("#voice-link").on('click', function(){
  const voiceArea = $("#voice-area").offset().top;
  $(window).scrollTop(voiceArea);
});

$("#application-link").on('click', function(){
  const applicationArea = $("#application-area").offset().top;
  $(window).scrollTop(applicationArea);
});

$(document).ready(function(){
  $('.slider').bxSlider({
      auto: true,
      pause: 5000,
  });
});