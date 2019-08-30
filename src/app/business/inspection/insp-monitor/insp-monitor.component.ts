import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-insp-monitor',
  templateUrl: './insp-monitor.component.html',
  styleUrls: ['./insp-monitor.component.less']
})
export class InspMonitorComponent implements OnInit {
  @Input()Equipment: any;
  constructor() { }

  ngOnInit() {
  }

}
