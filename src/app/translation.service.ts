import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { translations, TranslationKey } from './translations';



@Injectable({
  providedIn: 'root'
})



export class TranslationService {

  // private static counter = 0;

  private currentLang: 'en' | 'de' = 'de';


  constructor() { 
    //   console.log('TranslationService wurde erstellt, aktuelle Sprache:', this.currentLang);
    //       TranslationService.counter++;
    // console.log('TranslationService Instanz Nr.', TranslationService.counter, 
    //             'mit Sprache:', this.currentLang);
  }
  

  private langSubject = new BehaviorSubject<'en' | 'de'>(this.currentLang);
  lang$ = this.langSubject.asObservable();


  setLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
    console.log('Sprache im Service gesetzt:', lang);
    this.langSubject.next(lang);
  }

  getLanguage(): 'en' | 'de' {
    return this.currentLang;
  }

  translate(key: TranslationKey): string {
    return translations[this.currentLang][key];
  } 
}
   