import { Component, OnInit } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { DescriptionOfOtherComponent } from './description-of-other/description-of-other.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from '../shared/header/header.component';
import { WaveComponent } from './wave/wave.component';

@Component({
  selector: 'app-main-content',
  imports: [LandingpageComponent,
            AboutMeComponent, 
            MySkillsComponent, 
            WaveComponent,
            HeaderComponent,
            DescriptionOfOtherComponent, 
            ContactComponent,
            PortfolioComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
