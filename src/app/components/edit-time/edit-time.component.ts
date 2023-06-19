import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.scss'],
})
export class EditTimeComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input()
  editData!: {
    mpn: string;
    current: number;
  };
  @Input() editLabel: string[] = [];
  @Input() section: string = '';
  @Output() close = new EventEmitter();
  editTimeForm!: FormGroup;
  isLoading: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.editTimeForm = new FormGroup({
      new: new FormControl(''),
    });
  }

  submit() {}

  handleCancel() {
    this.isVisible = false;
    this.close.emit();
  }
}
