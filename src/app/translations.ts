// Falls du möchtest, dass die Sprache sofort auf der gesamten Seite aktualisiert wird, 
// sobald du die Sprache im Header umschaltest, kannst du den TranslationService nutzen,
//  um eine reaktive Aktualisierung durchzuführen. Hierzu könntest du BehaviorSubject aus rxjs verwenden, 
// um den aktuellen Sprachwert zu beobachten.
export type TranslationKey = 'about' | 'skill' | 'portfolio' | 'rotate' | 'talk' | 'scroll' | 'way' | 'place' |'enthusiasm' | 'solutions' | 'headSkills' | 'allSkills' | 'join_description' | 'pollo_loco_description' | 'descriptionPortfoli';



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
      way: "Ich will lösungsorientiert an IT lösungen arbeiten die die geselschaft gerechter und Benuzrefreundlicher machen",
      place: "ich komme aus weilheim und siuche ein aus gewogensse feverhältnis zwischen home(offic)",
      enthusiasm: "Meine intersse an der IT wurde mit dem resperi pi geweckt wo ich kleine programme geschrieben habe, und das schöne man lernt nie aus",
      solutions: "Es fallen mir oft verbeserungs vorschläge auf wenn ich proramme benutze die man im  Team besprechen kann.",
      headSkills: "",
      allSkills: "verschiedene fropndent technologien wie zB. java script habe ich in meinen projeckten verwendet.",
      otherSkills: "",
      enthusiasmSkills: "",
      buttonSkill: "",
      descriptionPortfoli: "  hier sind eineige meiner wichten arbeiten zum aus probieren",
      work: "",
      join_description: "dies app ist an enin kanban bord angelegt und wurde im Team mit insgesmat 4 personen entwickelt.",
      pollo_loco_description: "ein 2 d jump and run spiel das objecktorientiertes programmieren gebaut wurde. hilf dem schnelln pepe coins zu sammeln und tabasko flaschen, und rüste dich für den end kampf mit dem big hunn.",

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
        headSkills: "My skills",
        allSkills: "",
        otherSkills: "",
        enthusiasmSkills: "",
        buttonSkill: "",
        descriptionPortfoli: "",
        work: "",
        join_description: "",
        pollo_loco_description: ""
      }
  };  