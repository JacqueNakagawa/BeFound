import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  rows: number[] = Array(6).fill(0);
  columns: number[] = Array(4).fill(0);

  generateRows(): number[] {
    return this.rows;
  }

  generateColumns(): number[] {
    return this.columns;
  }

  ngOnInit(): void {

  }
}
