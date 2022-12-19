import { Component } from '@angular/core';
interface Data {
  video:string;
  title: string
}
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  data:Data[] = [
    {
      video: 'https://www.youtube.com/embed/_ZM1Ll-BtwI',
      title: 'We are FORSAGE.io'
    },
    {
      video: 'https://www.youtube.com/embed/xIZktPVJqUk',
      title: 'Forsage BUSD Official Video'
    },
    {
      video: 'https://www.youtube.com/embed/M7TX7rTLRSo',
      title: 'xGold teaser (Cinematic)'
    },
    {
      video: 'https://www.youtube.com/embed/W2EBcsC1r7E',
      title: 'xGold teaser (Fast)'
    },
    {
      video: 'https://www.youtube.com/embed/LX_L34fnxTE',
      title: 'FORSAGE BUSD - 4 steps for registration (desktop)'
    },
    {
      video: 'https://www.youtube.com/embed/_IXSV1fsq9E',
      title: 'FORSAGE BUSD — Registration Steps'
    },
    {
      video: 'https://www.youtube.com/embed/7qcVdQYsYw0',
      title: 'New partners on FORSAGE BUSD'
    }
  ]
}
