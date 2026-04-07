import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-split-icon',
  imports: [],
  templateUrl: './split-icon.component.html',
  styleUrl: './split-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitIconComponent {
  /** Two Bootstrap Icons icon names, e.g. ['fire', 'tree'] */
  readonly icons = input.required<[string, string]>();
  /** CSS colours for each half, e.g. ['#cc0000', '#2e7d32'] */
  readonly colors = input.required<[string, string]>();
  /** Size of the icon box in px */
  readonly size = input<number>(56);
  /** Border radius in px */
  readonly borderRadius = input<number>(8);

  /** Font-size for each half's Bootstrap icon (~38% of the box size) */
  readonly iconFontSize = computed(() => `${Math.round(this.size() * 0.38)}px`);
}
