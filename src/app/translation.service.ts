import { Injectable } from '@angular/core';
import { translations } from './translations';
// import { TranslationKey } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }
  private currentLang: 'en' | 'de' = 'de'; // Default

  setLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
  }

  getLanguage(): 'en' | 'de' {
    return this.currentLang;
  }

  // translate(key: string): string {
  //   return translations[this.currentLang][key] || key;
  // }
}
