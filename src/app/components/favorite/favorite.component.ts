import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent {
  @HostBinding('class.favorite--checked')
  @Input() checked = false;
}
