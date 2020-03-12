import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  lat: number = 32.727344;
  lng: number = -97.105981;
  zoom: number = 10;
  images: any[] = [
    {
      className: ['carousel-item', 'active'],
      url: "https://techcrunch.com/wp-content/uploads/2019/03/blueground-apartment-2-2-2.jpg?w=1390&crop=1"
    },
    {
      className: ['carousel-item'],
      url: "https://techcrunch.com/wp-content/uploads/2019/03/blueground-apartment-2-2-2.jpg?w=1390&crop=1"
    },
    {
      className: ['carousel-item'],
      url: "https://techcrunch.com/wp-content/uploads/2019/03/blueground-apartment-2-2-2.jpg?w=1390&crop=1"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
