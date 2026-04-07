import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Reusable empty-state placeholder shown when a page has no data to display.
 *
 * Usage:
 * ```html
 * <app-empty-state icon="search" message="No data found." />
 * ```
 */
@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent
{
  readonly icon = input.required<string>();
  readonly message = input.required<string>();
}
