import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { BreakpointObserver} from '@angular/cdk/layout';
import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, JoinComponent, ElPolloLocoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent extends BaseTranslatedComponent  {


  reverse = true;


    constructor(
      private breakpointObserver: BreakpointObserver,
    public override translationService: TranslationService
    ) {
       super(translationService);

    this.breakpointObserver.observe(['(max-width: 1200px)']).subscribe(result => {
      this.reverse = !result.matches; 
          console.log('Reverse / breakpoint:', this.reverse);
    });



  }

  descriptionPortfoli= '';

    protected override updateTexts() {
    this.descriptionPortfoli = this.translationService.translate('descriptionPortfoli');
    }

}