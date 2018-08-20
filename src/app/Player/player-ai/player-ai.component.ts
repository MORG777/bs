import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Coordinates } from '../../Component/coordinates';

@Component({
  selector: 'player-ai',
  templateUrl: './player-ai.component.html',
  styleUrls: ['./player-ai.component.css']
})
export class PlayerAIComponent extends PlayerComponent implements OnInit {

  constructor() { 
    super();
  }
  calculateShoot(): Coordinates {
    return new Coordinates(1,1);
}
  ngOnInit() {
  }

}
