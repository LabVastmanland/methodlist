angular
  .module("app.notice", [])
  .directive('lmvlNotice', function() {
    return {
        template: '<h1>Välkommen till laboratoriemedicin Västmanlands lista över "skickeprover"</h1> <p>För prover som analyseras i Västmanland hänvisar vi till <a target="_blank" href="https://www.regionvastmanland.se/vardgivare/behandlingsstod/laboratoriemedicin/provtagningsanvisningar/">Laboratoriemedicin Västmanlands nuvarande provtagningssida</a>.<br/>Vid frågor, kommentarer eller förbättringsförslag, vänligen kontakta laboratoriemedicin Västmanland.</p>'
      };
  });

