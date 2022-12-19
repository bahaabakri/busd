import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faCopy, faLink, faUser, faRocket, faEye} from  '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';

export interface PeriodicElement {
  date: Date;
  wallet: string;
  id: number;
  program: string;
  level: number;
  type: number;
  profitPerType: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type:0, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798},
  {type:1, date: new Date('12 March 2018 14:48 UTC'), wallet: '0xf545ca68', id: 873443, level: 5, program: 'xGold', profitPerType: 1798}
];
@Component({
  selector: 'app-main-stats',
  templateUrl: './main-stats.component.html',
  styleUrls: ['./main-stats.component.scss']
})
export class MainStatsComponent {
  faCopy = faCopy;
  faLink = faLink;
  faUser = faUser;
  faRocket = faRocket;
  faeye = faEye

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  manipulatedData

  constructor(public globalService:GlobalService) {
        // change date before bind it to table

        this.manipulatedData = ELEMENT_DATA.map(el => {
          return {
            ...el,
            date: el.date.toISOString(),
            profitPerType: el.profitPerType + ' BUSD'
          }
        })
        // console.log(ELEMENT_DATA);
    
    
        this.dataSource = new MatTableDataSource(this.manipulatedData);
        this.displayedColumns = ['type', 'date', 'id', 'program', 'level', 'wallet', 'profitPerType'];
  }
}
