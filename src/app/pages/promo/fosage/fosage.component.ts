import { Component, Inject } from '@angular/core';
import { faCopy, faFileImport, faFile} from  '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';
@Component({
  selector: 'app-fosage',
  templateUrl: './fosage.component.html',
  styleUrls: ['./fosage.component.scss']
})
export class FosageComponent {
  faImport = faFileImport
  faCopy = faCopy
  faFile = faFile
  data:string[] = ['BUSD presentation English pdf', 'BUSD presentation English pdf']
  constructor(@Inject(GlobalService) public globalService:any) {

  }
}
