import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'rbi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public second: string;
  public month: string;
  public hour: number;
  public date: any;
  public minute: number;
  constructor() {
  }

  ngOnInit() {
  }
}
