angular
  .module("app.notice", [])
  .directive('lmvlNotice', function() {
    return {
        template: '<h1>Våra provtagningsanvisningar har flyttat:</h1> <p><a target="_blank" href="https://regionvastmanland.se/vardgivare/behandlingsstod/laboratoriemedicin/provtagning/">hit</a>.<br/>Vid frågor, kommentarer eller förbättringsförslag, vänligen kontakta laboratoriemedicin Västmanland.</p>'
      };
  });

