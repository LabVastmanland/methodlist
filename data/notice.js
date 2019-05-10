angular
  .module("app.notice", [])
  .directive('lmvlNotice', function() {
    return {
        template: '<h1>Våra provtagningsanvisningar har flyttat:</h1> <p><br><a target="_blank" href="https://regionvastmanland.se/vardgivare/behandlingsstod/laboratoriemedicin/provtagning/">Följ denna länk för att komma till vår nya site.</a>.<br/><br>Vid frågor, kommentarer eller förbättringsförslag, vänligen kontakta laboratoriemedicin Västmanland.</p>'
      };
  });

