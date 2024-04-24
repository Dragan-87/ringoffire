import { CommonModule } from '@angular/common';
import { Component, Input, Output, output } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    DialogAddPlayerComponent,
    FormsModule
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

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
