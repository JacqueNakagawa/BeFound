import { Component, OnInit } from '@angular/core';
import { SumidoService } from 'src/app/services/sumido.service';
import { Image } from 'src/app/shared/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  images: any[] = []

  constructor(
    private sumidoService : SumidoService
  ) { }

  ngOnInit(): void {
    this.sumidoService.getSumido().subscribe(
      resposta => this.images = resposta
    )
   }

}