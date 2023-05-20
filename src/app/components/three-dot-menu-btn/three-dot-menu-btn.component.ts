import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-dot-menu-btn',
  templateUrl: './three-dot-menu-btn.component.html',
  styleUrls: ['./three-dot-menu-btn.component.scss']
})
export class ThreeDotMenuBtnComponent {
  @Input() menu: any;
}
