import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { getGamePairById } from '../../../data/games.registry';
import { GamePairData } from '../../../shared/models/pokemon.model';

interface ObedienceRow {
  badges: number;
  badgeName: string;
  gymLeader: string;
  city: string;
  levelCap: number | null; // null = all levels
  isMilestone: boolean; // true if this badge raises the cap
}

@Component({
  selector: 'app-obedience',
  imports: [NgClass, NgStyle],
  templateUrl: './obedience.component.html',
  styleUrl: './obedience.component.css',
})
export class ObedienceComponent implements OnInit {
  gamePair: GamePairData | undefined;

  obedienceRows: ObedienceRow[] = [
    { badges: 0,  badgeName: 'No Badges',      gymLeader: '—',        city: '—',               levelCap: 10,  isMilestone: true  },
    { badges: 1,  badgeName: 'Boulder Badge',   gymLeader: 'Brock',    city: 'Pewter City',     levelCap: 10,  isMilestone: false },
    { badges: 2,  badgeName: 'Cascade Badge',   gymLeader: 'Misty',    city: 'Cerulean City',   levelCap: 30,  isMilestone: true  },
    { badges: 3,  badgeName: 'Thunder Badge',   gymLeader: 'Lt. Surge',city: 'Vermilion City',  levelCap: 30,  isMilestone: false },
    { badges: 4,  badgeName: 'Rainbow Badge',   gymLeader: 'Erika',    city: 'Celadon City',    levelCap: 50,  isMilestone: true  },
    { badges: 5,  badgeName: 'Soul Badge',      gymLeader: 'Koga',     city: 'Fuchsia City',    levelCap: 50,  isMilestone: false },
    { badges: 6,  badgeName: 'Marsh Badge',     gymLeader: 'Sabrina',  city: 'Saffron City',    levelCap: 70,  isMilestone: true  },
    { badges: 7,  badgeName: 'Volcano Badge',   gymLeader: 'Blaine',   city: 'Cinnabar Island', levelCap: 70,  isMilestone: false },
    { badges: 8,  badgeName: 'Earth Badge',     gymLeader: 'Giovanni', city: 'Viridian City',   levelCap: null, isMilestone: true },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pairId = this.route.parent?.snapshot.paramMap.get('pairId');
    this.gamePair = pairId ? getGamePairById(pairId) : undefined;
  }

  get accentGradient(): string | undefined {
    const colors = this.gamePair?.iconColors;
    if (!colors) return undefined;
    return `linear-gradient(to right, ${colors[0]} 0%, ${colors[0]} 40%, ${colors[1]} 60%, ${colors[1]} 100%)`;
  }
}

