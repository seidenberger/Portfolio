// Falls du möchtest, dass die Sprache sofort auf der gesamten Seite aktualisiert wird, 
// sobald du die Sprache im Header umschaltest, kannst du den TranslationService nutzen,
//  um eine reaktive Aktualisierung durchzuführen. Hierzu könntest du BehaviorSubject aus rxjs verwenden, 
// um den aktuellen Sprachwert zu beobachten.
export type TranslationKey = 'about' | 'skill' | 'portfolio' | 'rotate' | 'talk' | 'scroll' | 'way' | 'place' |'enthusiasm' | 'solutions';



export const translations :  {
  [lang: string]: { [key: string]: string }

  } = {

    de: {
      about: "Über mich",
      skill: "Fähigkeiten",
      portfolio: "portfolio",
      rotate: "Ich Bin",
      talk: "Lass uns reden",
      scroll: "nach unten",
      way: "was fürt mich in die it",
      place: "ich komme aus weilheim und siuche ein aus gewogensse feverhältnis zwischen home(offic)",
      enthusiasm: "begeisterung",
      solutions: "problem lösen",
    },
    en: {
        about: "About me",
        skill: "Skills", 
        portfolio: "portfolio",
        rotate: "I am",
        talk: "Let's talk",
        scroll: "scroll down",
        way: "",
        place: "",
        enthusiasm: "",
        solutions: "",
      }
  };  