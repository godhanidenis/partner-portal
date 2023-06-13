import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { InventoryService } from 'src/app/shared/service/inventory.service';

@Component({
  selector: 'app-upload-model',
  templateUrl: './upload-model.component.html',
  styleUrls: ['./upload-model.component.scss'],
})
export class UploadModelComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  @Input() sectionType: string = '';
  name = new FormControl('');
  isLoading: boolean = false;
  selectFile: any = '';

  constructor(
    private inventoryService: InventoryService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {}

  selectFiles(event: any) {
    this.selectFile = event?.target?.files[0];
  }

  submit() {
    this.isLoading = true;
    let formData = new FormData();
    formData.append('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d');
    formData.append('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036');
    formData.append('uploaded_file', this.selectFile);
    this.inventoryService.inventoryFeedUpload(formData).subscribe(
      (res: any) => {
        console.log(res);
        if (res.success) {
          this.message.create('success', 'Inventory upload successfully!');
        }
        this.handleCancel();
        this.isLoading = false;
      },
      (err) => {
        this.handleCancel();
        this.isLoading = false;
      }
    );
  }

  handleCancel() {
    this.closeModel.emit();
  }
}
