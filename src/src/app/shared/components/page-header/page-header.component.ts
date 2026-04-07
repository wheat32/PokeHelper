import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Reusable page header: renders the `.page-title` heading with a Bootstrap Icon
 * and projects any subtitle content via `<ng-content>`.
 */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent
{
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
}
