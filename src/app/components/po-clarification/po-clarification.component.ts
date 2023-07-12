import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrdersService } from 'src/app/shared/service/orders.service';

@Component({
  selector: 'app-po-clarification',
  templateUrl: './po-clarification.component.html',
  styleUrls: ['./po-clarification.component.scss'],
})
export class PoClarificationComponent implements OnInit {
  @Input() poNo: string = '';
  @Output() close = new EventEmitter();

  isLoading: boolean = false;
  poClarificationForm!: FormGroup;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    sanitize: true,
    toolbarPosition: 'bottom',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName',
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
      ],
    ],
  };

  constructor(
    private ordersService: OrdersService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.poClarificationForm = new FormGroup({
      subject: new FormControl(`PO Clarification (${this.poNo})`),
      commentBox: new FormControl<string>(''),
    });
  }

  submit() {
    const data = {
      po_number: this.poNo,
      clarification_message: 'Shipping Issue',
      contact_via: 'Email',
      user_email: 'sudip.das@123srores.com',
    };
    this.ordersService.clarificationOrders(data).subscribe((res: any) => {
      if (res.success) {
        this.message.success('PO clarification successfully!');
      }
    });
  }

  handleCancel() {
    this.close.emit();
  }
}
