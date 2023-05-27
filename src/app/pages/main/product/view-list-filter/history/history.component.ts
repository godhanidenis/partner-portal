import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  timeLine = [
    {
      id: 1,
      label: '04:12 AM',
      header: '1 Buy Box Lost',
      date: '05-11-2023 | 04:52 PM',
      event: '2 Event',
      eventList: ['Buy Box Lost 1', 'Buy Box Lost 2'],
    },
    {
      id: 2,
      label: '03:12 AM',
      header: '1 Buy Box Won',
      date: '04-10-2023 | 03:52 PM',
      event: '1 Event',
      eventList: ['Buy Box Won 1'],
    },
    {
      id: 3,
      label: '02:12 AM',
      header: '1 Price Change',
      date: '03-09-2023 | 02:52 PM',
      event: '2 Event',
      eventList: ['Price Change 1', 'Price Change 2'],
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
