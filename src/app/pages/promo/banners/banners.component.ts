import { Component } from '@angular/core';

interface Data {
  image:string;
  title: string
}
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
  data:Data[] = [
    {
      image: 'https://forsage.io/docs/b/Forsage_160.png',
      title: 'static banner 160x600'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_300.png',
      title: 'static banner 300x250'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_468.png',
      title: 'static banner 468x60'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_728.png',
      title: 'static banner 728x90'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_1140.png',
      title: 'static banner 1140x90'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_192.gif',
      title: 'animated banner 192x192'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_300.gif',
      title: 'animated banner 300x250'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_300_1.gif',
      title: 'animated banner 300x300'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_468.gif',
      title: 'animated banner 468x60'
    },
    {
      image: 'https://forsage.io/docs/b/Forsage_728.gif',
      title: 'animated banner 728x90'
    }
  ]
}
