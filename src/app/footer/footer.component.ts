import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  maker: string = 'Chicherin Artem';
  year: number = Date.now();


  constructor() { }

  ngOnInit() {
  }

}