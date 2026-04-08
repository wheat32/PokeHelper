import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { GamePageBase } from '../../../shared/base/game-page.base';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

interface ObedienceRow
{
  badges: number;
  badgeName: string;
  gymLeader: string;
  city: string;
  levelCap: number | null;
  isMilestone: boolean;
}

@Component({
  selector: 'app-obedience',
  imports: [NgClass, NgStyle, PageHeaderComponent],
  templateUrl: './obedience.component.html',
  styleUrl: './obedience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObedienceComponent extends GamePageBase
{
  obedienceRows: ObedienceRow[] = [
    { badges: 0,  badgeName: 'No Badges',      gymLeader: '—',         city: '—',               levelCap: 10,   isMilestone: true  },
    { badges: 1,  badgeName: 'Boulder Badge',   gymLeader: 'Brock',     city: 'Pewter City',     levelCap: 10,   isMilestone: false },
    { badges: 2,  badgeName: 'Cascade Badge',   gymLeader: 'Misty',     city: 'Cerulean City',   levelCap: 30,   isMilestone: true  },
    { badges: 3,  badgeName: 'Thunder Badge',   gymLeader: 'Lt. Surge', city: 'Vermilion City',  levelCap: 30,   isMilestone: false },
    { badges: 4,  badgeName: 'Rainbow Badge',   gymLeader: 'Erika',     city: 'Celadon City',    levelCap: 50,   isMilestone: true  },
    { badges: 5,  badgeName: 'Soul Badge',      gymLeader: 'Koga',      city: 'Fuchsia City',    levelCap: 50,   isMilestone: false },
    { badges: 6,  badgeName: 'Marsh Badge',     gymLeader: 'Sabrina',   city: 'Saffron City',    levelCap: 70,   isMilestone: true  },
    { badges: 7,  badgeName: 'Volcano Badge',   gymLeader: 'Blaine',    city: 'Cinnabar Island', levelCap: 70,   isMilestone: false },
    { badges: 8,  badgeName: 'Earth Badge',     gymLeader: 'Giovanni',  city: 'Viridian City',   levelCap: null, isMilestone: true  },
  ];
}
