import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, output } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { GameCardInfoComponent } from '../game-card-info/game-card-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    PlayerComponent,
    GameCardInfoComponent,
    CommonModule,
    DialogAddPlayerComponent,
    FormsModule,
    MatFormField,
    MatLabel,
    MatIcon,
    MatButtonModule,

  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  @Input() game: Game = new Game();
  currentCard: string = "";
  playerName: string = "";

  constructor(public matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game);

  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if(this.game.stack.length > 0 && !this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() ?? "card_empty"
      this.pickCardAnimation = true;
      this.game.playedCards.push(this.currentCard);
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    } else {
      this.currentCard = "card_empty"
    }
  }

  addNewPlayer() {

  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}
