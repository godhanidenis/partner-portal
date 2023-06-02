import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-export-model',
  templateUrl: './export-model.component.html',
  styleUrls: ['./export-model.component.scss'],
})
export class ExportModelComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() exportType: string = 'A';
  @Input() description: string = '';

  constructor() {}
  ngOnInit(): void {}

  handleCancel() {
    this.close.emit();
  }
}
