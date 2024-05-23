import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower: string = 'juan';
  public nameUpper: string = 'JUAN';
  public fullName: string = 'jUaN EsCoBaR';

  public customDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }



}
