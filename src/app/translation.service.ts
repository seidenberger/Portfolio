import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { translations, TranslationKey } from './translations';



//\protfolio\portfolio>npm install @ngx-translate/core

// up to date, audited 947 packages in 22s

// 157 packages are looking for funding
//   run `npm fund` for details

// 5 moderate severity vulnerabilities

// To address all issues, run:
//   npm audit fix

// Run `npm audit` for details.

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
   