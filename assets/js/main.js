$(document).ready(() => {
  let current_step = 0;
  const typed = new Typed("#typed-subdomain", {
    strings: [
      "votre", "domaine", "gratuit",
      "prenom", "nom", "pseudo",
      "projet", "entreprise",
      "jose", "emmanuel",
    ],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 150,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "|"
  });

  $("#x-container-1 .tablink").each(() => {
    $(this).click(function(event) {
      if (event.currentTarget.text == $(".steps-container .step-container:visible").attr("id").split("-")[1]) {
        if ($(`.steps-container #step-${event.currentTarget.text}`).is(":visible")) return;
      }

      $("#x-container-1 .tablink").removeClass("jdb-topbar");
      $(this).addClass("jdb-topbar");

      $(".steps-container .step-container").slideUp();
      $(`.steps-container #step-${event.currentTarget.text}`).slideDown();
    });
  });

  $("#next-step").click(function(){
    if (current_step === 0) {
      current_step = 1;
      $("#x-container-0").slideUp();
      $(this).addClass(["jdb-section", "jdb-black"])
        .removeClass("jdb-red").html($("<i>", {
          class: "fa fa-fw fa-angle-double-left",
          "aria-hidden": true
        })).append("Retour");
      $("#x-container-1").slideDown();
    } else {
      current_step = 0;
      $("#x-container-1").slideUp();
      $(this).removeClass(["jdb-section", "jdb-black"])
        .addClass("jdb-red").html($("<i>", {
          class: "fa fa-fw fa-angle-double-right",
          "aria-hidden": true
        })).prepend("Étapes à suivre");
      $("#x-container-0").slideDown();
    }
  });

  $("[data-target-to]").each(() => {
    $(this).click(function(){
      const selector = $(this).data("target-to");

      $("html, body").animate({
        scrollTop: $(selector).offset().top
      }, "slow");
    });
  });
});
