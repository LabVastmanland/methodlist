var methods = [
  {
    component: 'ACE',
    alternativeNames: ['Angiotensin converting enzyme'],
    system: 'S-',
    speciality: 'Klinisk Kemi',
    tubeColor: 'gelrör',
    sample: '1 gelrör (gul propp).',
    comment: 'Prover från patienter som behandlas med ACE hämmare (t. ex. Captopril) bör analyseras/frysas inom 4 timmar.',
    referral: {
      text: 'Klinisk Kemi Special',
      url: '',
      notes: []
    },
    toLabWithin: '',
    handling: 'Centrifugera och avskilj serum. Serum fryses inom 4h.',
    storage: 'I frys. Skickas som frysprov. I undantagsfall kan serum som förvarats i kyl skickas (hållbart ca 1 v i kyl). Frys då provet och skicka det fryst (ange om möjligt hur länge det har kylförvarats).',
    destination: 'Karolinska(S)',
    source: 'http://www.karolinska.se/KUL/Alla-anvisningar/Anvisning/9000',
    updated: '2015-07-21',
    updatedBy: 'GS'
  },
  {
    component: 'Cystin',
    alternativeNames: ['kvantitativt cystin'],
    system: 'U-',
    speciality: 'CMMS',
    tubeColor: '',
    sample: '2-10 mL urin utan tillsats, helst morgonurin eller stickprov från dygnsmängd. Surgjord urin kan användas. ',
    comment: '',
    referral: {
      text: 'Metabolutredningar - CMMS',
      url: 'http://www.karolinska.se/globalassets/global/kul/kul-gemensamma/kul-lankblock-remisser-for--utskrift/metabolutredning.pdf',
      notes: ['Anamnes','frågeställning','läkemedelsintag.']
    },
    toLabWithin: '',
    handling: 'Urinen ska snarast frysas.',
    storage: 'Skickas fryst. Undvik att skicka prover per post på torsdagar och fredagar. Post märkes A-post.',
    destination: 'Karolinska(S)',
    source: 'http://www.karolinska.se/KUL/Alla-anvisningar/Anvisning/9486',
    updated: '2015-07-21',
    updatedBy: 'GS'
  },
  {
    component: 'Dabigatran',
    alternativeNames: ['Pradaxa','hemoclot', 'antitrombotiska läkemedel', 'NOAK', 'NOAC'],
    system: 'P-',
    speciality: 'Klinisk Farmakologi',
    tubeColor: 'NaCitrat',
    sample: '1 NaCitrat-rör (ljusblå/svart propp). Provtagning före dos.',
    comment: 'För mätning av koagulationsmonitorering (aktivitetsmätning) beställs istället Dabigatran, akut.',
    referral: {
      text: 'Läkemedel, Klinisk farmakologi',
      url: '',
      notes: ['provtagningsdatum och klockslag', 'datum och klockslag för senast intagen dos', 'aktuell dos', 'datum för senaste dosjustering och föregående dos', 'orsak till provtagning, (ange en eller flera av de indikationer som anges under indikation)', 'vikt och S-kreatinin', 'övriga läkemedel']
    },
    toLabWithin: '',
    handling: 'Centrifugera och avskilj plasma.',
    storage: 'Plasma kan förvaras/transporteras i rumstemperatur/kylt om ankomst till Klinisk farmakologi, Huddinge, sker inom sju dygn från provtagning. Vid längre tids förvaring/transport skall provet hållas fryst.',
    destination: 'Karolinska(H)',
    source: 'http://www.karolinska.se/KUL/Alla-anvisningar/Anvisning/10078',
    updated: '2016-06-22',
    updatedBy: 'GS'
  }
];
