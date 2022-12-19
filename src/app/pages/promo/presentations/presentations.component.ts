
import { Component, Inject } from '@angular/core';
import { faCopy, faFileImport} from  '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';
interface Data {
  flag: string,
  title: string
}

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss']
})
export class PresentationsComponent {
  faImport = faFileImport
  faCopy = faCopy
  data:Data[] = [
    {
      flag:'fi-be',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-sy',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-cn',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-br',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-co',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-dm',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-us',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-ae',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-ug',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-lb',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-eg',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-ng',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-Pa',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-mx',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-fr',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-ar',
      title: 'BUSD presentation English pdf'
    },
    {
      flag:'fi-qa',
      title: 'BUSD presentation English pdf'
    },

  ]
  constructor(@Inject(GlobalService) public globalService:any) {

  }
}
