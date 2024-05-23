import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent implements OnInit {

  public totalSells: number = 1234567.89;
  public percent: number = 0.4856;
  constructor() { }

  ngOnInit() {
  }

}
