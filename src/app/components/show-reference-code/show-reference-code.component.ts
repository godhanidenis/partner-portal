import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-reference-code',
  templateUrl: './show-reference-code.component.html',
  styleUrls: ['./show-reference-code.component.scss'],
})
export class ShowReferenceCodeComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() referenceCode: string = '';

  @Output() close = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  submit() {
    this.isVisible = false;
    this.close.emit();
  }
}
