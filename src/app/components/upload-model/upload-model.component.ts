import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-model',
  templateUrl: './upload-model.component.html',
  styleUrls: ['./upload-model.component.scss']
})
export class UploadModelComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  name = new FormControl('');
  
  handleCancel() {
    this.closeModel.emit();
  }
}
