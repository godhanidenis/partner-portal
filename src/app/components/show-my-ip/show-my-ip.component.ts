import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-my-ip',
  templateUrl: './show-my-ip.component.html',
  styleUrls: ['./show-my-ip.component.scss'],
})
export class ShowMyIpComponent {
  myIpAddress: string = "";
  isLoading: boolean = true;
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://api.ipify.org?format=json').subscribe({
      next: (res:any) => {
        console.log('IP Address :', res);
        this.myIpAddress = res?.ip;
        this.isLoading = false;
      },
      error: (er) => {
        console.log('IP Address Error :', er);
        this.isLoading = false;
      },
    });
  }
  ngOnInit(): void {}
}
