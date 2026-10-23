// vanilla-cookieconsent v3.1.0 (MIT, orestbida) + Google Consent Mode v2 updates
function updateGcm(){
  const ads = CookieConsent.acceptedCategory('ads'), an = CookieConsent.acceptedCategory('analytics');
  gtag('consent','update',{ad_storage:ads?'granted':'denied',ad_user_data:ads?'granted':'denied',ad_personalization:ads?'granted':'denied',analytics_storage:an?'granted':'denied'});
}
CookieConsent.run({
  guiOptions:{consentModal:{layout:'box',position:'bottom left'},preferencesModal:{layout:'box'}},
  categories:{necessary:{enabled:true,readOnly:true},analytics:{},ads:{}},
  onConsent:updateGcm, onChange:updateGcm,
  language:{default:'sv',translations:{sv:{
    consentModal:{title:'Vi använder cookies',
      description:'Vi använder nödvändiga cookies för att webbplatsen ska fungera. Med ditt samtycke använder vi även cookies för statistik och för att mäta våra annonser (Google Ads). Du kan när som helst ändra ditt val.',
      acceptAllBtn:'Acceptera alla',acceptNecessaryBtn:'Avvisa alla',showPreferencesBtn:'Inställningar'},
    preferencesModal:{title:'Cookieinställningar',acceptAllBtn:'Acceptera alla',acceptNecessaryBtn:'Avvisa alla',savePreferencesBtn:'Spara val',closeIconLabel:'Stäng',
      sections:[
        {title:'Nödvändiga cookies',description:'Krävs för att webbplatsen ska fungera och kan inte stängas av.',linkedCategory:'necessary'},
        {title:'Statistik',description:'Hjälper oss att förstå hur besökare använder webbplatsen.',linkedCategory:'analytics'},
        {title:'Marknadsföring',description:'Används för att mäta och förbättra våra annonser, t.ex. Google Ads.',linkedCategory:'ads'}
      ]}
  }}}
});
