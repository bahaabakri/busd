import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/pages/partners/main-partners/main-partners.component';

@Component({
  selector: 'main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  @Input('displayedColumns') displayedColumns!: string[];
  @Input('dataSource') dataSource!: MatTableDataSource<PeriodicElement>;
  constructor() {

  }
}
