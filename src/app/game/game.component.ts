import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../Player/player/player.component';
import { PlayerAIComponent } from '../Player/player-ai/player-ai.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    status: string;
    gamer: PlayerComponent;
    gamerAI: PlayerAIComponent;

  constructor() { 
    
  }
  setStatus(status:string):void{
    this.status = status;
    //todo: update status div
}
  startGame():void{}

  ngOnInit() {
  }

}
