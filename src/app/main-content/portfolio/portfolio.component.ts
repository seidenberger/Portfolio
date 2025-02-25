import { Component } from '@angular/core';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { JoinComponent } from './join/join.component';

@Component({
  selector: 'app-portfolio',
  imports: [
                        ElPolloLocoComponent, 
            JoinComponent, 
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
