import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-export-mail-boxes',
  templateUrl: './export-mail-boxes.component.html',
  styleUrls: ['./export-mail-boxes.component.scss'],
})
export class ExportMailBoxesComponent {
  @Output() close = new EventEmitter();
  @Input() email: string = '';

  constructor() {}
  ngOnInit(): void {}

  handleCancel() {
    this.close.emit();
  }
}
