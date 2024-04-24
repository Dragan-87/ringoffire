import { CommonModule } from '@angular/common';
import { Component, Input, Output, output } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  @Input() game: Game = new Game();
  currentCard: string = "";

  constructor() {

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

}
