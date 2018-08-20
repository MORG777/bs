import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CellComponent } from './Component/cell/cell.component';
import { FieldComponent } from './Component/field/field.component';
import { PositionComponent } from './Component/position/position.component';
import { PlayerComponent } from './Player/player/player.component';
import { PlayerAIComponent } from './Player/player-ai/player-ai.component';
import { ShipComponent } from './Ships/ship/ship.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CellComponent,
    FieldComponent,
    PositionComponent,
    PlayerComponent,
    PlayerAIComponent,
    ShipComponent,
    HeaderComponent,
    FooterComponent,
      ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
