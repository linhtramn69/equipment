import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() displayedColumns: any = []
  @Input() data: any = []
  dataSource = new MatTableDataSource(this.data);
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.data);
  }
  navigateDetailPage(id: string) {
    this.router.navigate(['/', 'equipment', id], { relativeTo: this.route })
  }

}
