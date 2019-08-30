import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-main-description',
  templateUrl: './main-description.component.html',
  styleUrls: ['./main-description.component.less']
})
export class MainDescriptionComponent implements OnInit {
  @Input()PLCI: any;
  constructor() { }

  ngOnInit() {
  }

}
