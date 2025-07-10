// Falls du möchtest, dass die Sprache sofort auf der gesamten Seite aktualisiert wird, 
// sobald du die Sprache im Header umschaltest, kannst du den TranslationService nutzen,
//  um eine reaktive Aktualisierung durchzuführen. Hierzu könntest du BehaviorSubject aus rxjs verwenden, 
// um den aktuellen Sprachwert zu beobachten.
export type TranslationKey = 'about' | 'skill' | 'portfolio' | 'rotate' | 'talk' | 'scroll' | 'way' | 'place' |'enthusiasm' | 'solutions' | 'headSkills' | 'allSkills' | 'otherSkills' | 'anotherSkill' | 'enthusiasmSkills' | 'buttonSkill' | 'descriptionPortfoli' | 'work' | 'join_description' | 'pollo_loco_description' ;



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
      headSkills: "Fähigkeiten ",
      allSkills: "verschiedene fropndent technologien wie zB. java script habe ich in meinen projeckten verwendet.",
      otherSkills: "      sie sind auf der suche nach",
      anotherSkill: "anderen fähigkeiten",
      enthusiasmSkills: "      diese webseite habe ich mit angular entwickelt beiser webseit habe ich in angular (eingearbeitet)",
      buttonSkill: "Lass uns konntakt aufnehmen ",
      descriptionPortfoli: "  hier sind die grösten projeckte zum aus probieren",
      work: "DE",
      join_description: "dies app ist an ein kanban bord angelegt und wurde im Team mit insgesmat 4 personen entwickelt.",
      pollo_loco_description: "ein 2 d jump and run spiel das objecktorientiertes programmieren gebaut wurde. hilf dem schnelln pepe coins zu sammeln und tabasko flaschen, und rüste dich für den end kampf mit dem big hunn.",

      },
    en: {
        about: "About me",
        skill: "Skills", 
        portfolio: "portfolio",
        rotate: "I am",
        talk: "Let's talk",
        scroll: "scroll down",
        way: "EN",
        place: "EN",
        enthusiasm: "EN",
        solutions: "EN",
        headSkills: "My skills",
        allSkills: "EN",
        otherSkills: "EN",
        anotherSkill: "another Skill",
        enthusiasmSkills: "EN",
        buttonSkill: "Let's talk",
        descriptionPortfoli: "EN",
        work: "EN",
        join_description: "EN",
        pollo_loco_description: "EN"
      }
  };  