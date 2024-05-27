import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public heros: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Wolverine',
      canFly: true,
      color: Color.blue
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }

}
