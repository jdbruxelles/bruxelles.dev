$(document).ready(function(){
  var typed = new Typed("#typed-subdomain", {
    strings: ["jose", "emmanuel", "prenom", "nom", "pseudo", "project", "jose"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 150,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
  });

  $("[data-target-to]").each(function(){
    $(this).click(function(){
      var selector = $(this).data("target-to");
      
      $("html, body").animate({
        scrollTop: $(selector).offset().top
      }, "slow");
    });
  });
});