import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatTableDataSource } from '@angular/material/table'
import { faCopy, faLink, faEye} from  '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/_services/global.service';


export interface PeriodicElement {
  date: Date;
  address: string;
  id: number;
  x3: number;
  x4: number;
  xXx: number;
  xGold: number;
  profit: number;
  partners: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: new Date('12 March 2018 14:48 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('21 Jan 2017 21:55 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('31 December 2016 17:45 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('07 November 2015 14:11 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('06 June 2014 22:22 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('22 April 2013 11:52 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('19 October 2013 15:55 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('17 April 2013 11:03 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('07 June 2012 12:12 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('30 April 2012 21:41 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9},
  {date: new Date('05 June 2011 14:45 UTC'), address: '0xf545ca68', id: 873443, x3: 5, x4: 4, xXx: 7, xGold: 4, profit: 1798, partners: 9}
];
@Component({
  selector: 'app-main-partners',
  templateUrl: './main-partners.component.html',
  styleUrls: ['./main-partners.component.scss']
})
export class MainPartnersComponent {
  faCopy = faCopy;
  faLink = faLink;
  faeye = faEye;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  manipulatedData


  constructor(public globalService: GlobalService) {
    // change date before bind it to table

    this.manipulatedData = ELEMENT_DATA.map(el => {
      return {
        ...el,
        date: el.date.toISOString(),
        profit: el.profit + ' BUSD'
      }
    })
    // console.log(ELEMENT_DATA);


    this.dataSource = new MatTableDataSource(this.manipulatedData);
    this.displayedColumns = ['date', 'address', 'id', 'x3', 'x4', 'xXx', 'xGold', 'profit', 'partners'];
  }

}
