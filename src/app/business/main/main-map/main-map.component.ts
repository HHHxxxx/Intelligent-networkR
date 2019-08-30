import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.less']
})
export class MainMapComponent implements OnInit, OnChanges {
  @Input() homepageWell: any;
  @Input() homepagePipe: any;
  public wallas: any;
  public Pipettes: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.wallas = this.homepageWell;
    this.Pipettes = this.homepagePipe;
  }
}
