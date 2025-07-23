import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { translations, TranslationKey } from './translations';



@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }
  private currentLang: 'en' | 'de' = 'de'; 

  private langSubject = new BehaviorSubject<'en' | 'de'>(this.currentLang);
  lang$ = this.langSubject.asObservable();


  setLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
    this.langSubject.next(lang);
  }

  getLanguage(): 'en' | 'de' {
    return this.currentLang;
  }

  translate(key: TranslationKey): string {
    return translations[this.currentLang][key];
  } 
}
   