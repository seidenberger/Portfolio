// Falls du möchtest, dass die Sprache sofort auf der gesamten Seite aktualisiert wird, 
// sobald du die Sprache im Header umschaltest, kannst du den TranslationService nutzen,
//  um eine reaktive Aktualisierung durchzuführen. Hierzu könntest du BehaviorSubject aus rxjs verwenden, 
// um den aktuellen Sprachwert zu beobachten.
export type TranslationKey = 'about' | 'skill' | 'portfolio' ;



export const translations :  {
  [lang: string]: { [key: string]: string }

  } = {

    de: {
      about: "Über mich",
      skill: "Fähigkeiten",
      portfolio: "portfolio",
      rotate: "Ich Bin",
    },
    en: {
        about: "About me",
        skill: "Skills", 
        portfolio: "portfolio",
        rotate: "I am",
      }
  };  