import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  images: Image[] = [
    new Image ('Maria Aparecida da Silva', 45, '30/05/2005'),
    new Image ('Maria Aparecida da Silva', 45, '30/05/2005'),
    new Image ('Maria Aparecida da Silva', 45, '30/05/2005'),
  

  ];

  constructor() { }

  ngOnInit(): void { }

}