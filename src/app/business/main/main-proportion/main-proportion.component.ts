import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-main-proportion',
  templateUrl: './main-proportion.component.html',
  styleUrls: ['./main-proportion.component.less']
})
export class MainProportionComponent implements OnInit {
  @Input()abnormal: any;
  constructor() { }
  ngOnInit() {
  }
}
