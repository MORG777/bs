import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
    x: number;
    y: number;
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
   }

  ngOnInit() {
  }

}
