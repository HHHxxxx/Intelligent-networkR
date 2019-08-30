import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-main-loadrate',
  templateUrl: './main-loadrate.component.html',
  styleUrls: ['./main-loadrate.component.less']
})
export class MainLoadrateComponent implements OnInit {
  @Input()avgLoadRatio: any;
  constructor() { }

  ngOnInit() {
  }

}
