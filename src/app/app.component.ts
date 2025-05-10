import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
// import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslationService } from './translation.service';
import { TranslationKey } from './translations';
// import { WaveComponent } from './main-content/wave/wave.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            MainContentComponent,  
            // HeaderComponent, 
            FooterComponent,
            // WaveComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(public translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key as TranslationKey);
  }
}
  