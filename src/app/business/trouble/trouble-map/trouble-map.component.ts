import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-trouble-map',
  templateUrl: './trouble-map.component.html',
  styleUrls: ['./trouble-map.component.less']
})
export class TroubleMapComponent implements OnInit {
  @Input() Pipettes: any;
  constructor() { }

  ngOnInit() {
  }

}
