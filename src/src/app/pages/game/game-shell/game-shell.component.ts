import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { getGamePairById } from '../../../data/games.registry';
import { GamePairData } from '../../../shared/models/pokemon.model';
import { SplitIconComponent } from '../../../shared/components/split-icon/split-icon.component';

@Component({
  selector: 'app-game-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SplitIconComponent],
  templateUrl: './game-shell.component.html',
  styleUrl: './game-shell.component.css',
})
export class GameShellComponent implements OnInit {
  gamePair: GamePairData | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const pairId = this.route.snapshot.paramMap.get('pairId');
    this.gamePair = pairId ? getGamePairById(pairId) : undefined;
    if (!this.gamePair) {
      this.router.navigate(['/']);
    }
  }
}
