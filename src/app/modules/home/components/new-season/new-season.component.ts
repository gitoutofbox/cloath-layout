import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.scss']
})
export class NewSeasonComponent implements OnInit {
  public newSeasonText: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.newSeasonText = ['New Season', 'New Season', 'New Season', 'New Season']
  }

}
