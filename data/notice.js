angular
  .module("app.notice", [])
  .directive('lmvlNotice', function() {
    return {
        template: '<h1>Under utveckling</h1> <p> Detta är en sida under utveckling. Befintlig information är korrekt men uppdateras löpande med fler provtagningsanvisningar. Om en analys inte finns här, hänvisar vi till <a target="_blank" href="http://www.ltv.se/Vardgivare-och-samarbetspartners/laboratoriemedicin/Provtagningsanvisningar/">Laboratoriemedicin Västmanlands nuvarande provtagningssida</a>.</p>'
      };
  });


