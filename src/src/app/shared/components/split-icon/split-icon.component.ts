import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-split-icon',
  imports: [],
  templateUrl: './split-icon.component.html',
  styleUrl: './split-icon.component.css',
})
export class SplitIconComponent {
  /** Two Bootstrap Icons icon names, e.g. ['fire', 'tree'] */
  @Input({ required: true }) icons!: [string, string];
  /** CSS colours for each half, e.g. ['#cc0000', '#2e7d32'] */
  @Input({ required: true }) colors!: [string, string];
  /** Size of the icon box in px */
  @Input() size: number = 56;
  /** Border radius in px */
  @Input() borderRadius: number = 8;

  /** Font-size for each half's Bootstrap icon (~38% of the box size) */
  get iconFontSize(): string {
    return `${Math.round(this.size * 0.38)}px`;
  }
}
