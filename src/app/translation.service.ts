import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { translations, TranslationKey } from './translations';



@Injectable({
  providedIn: 'root'
})



export class TranslationService {


  private currentLang: 'en' | 'de' = 'de';


  constructor() {}
  

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
   