import { Component, OnInit } from '@angular/core';
import { FieldComponent } from '../../Component/field/field.component';
import { ShipComponent } from '../../Ships/ship/ship.component';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  field: FieldComponent;

  ships: ShipComponent[];

  constructor() { }
  placeShips(){
  
  }

  fire():void{

  };

  getFire(pos:Position):void{

  }
  ngOnInit() {
  }

}
