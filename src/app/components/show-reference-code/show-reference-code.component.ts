import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-reference-code',
  templateUrl: './show-reference-code.component.html',
  styleUrls: ['./show-reference-code.component.scss'],
})
export class ShowReferenceCodeComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() referenceCode: string = '';

  constructor() {}
  ngOnInit(): void {}
}
