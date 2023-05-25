import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandServiceService } from 'src/app/services/brand/brand-service.service';
import { EquipmentServiceService } from 'src/app/services/equipment/equipment-service.service';
import { EquipmentTypeServiceService } from 'src/app/services/equipmentType/equipment-type-service.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit{

  displayedColumns: string[] = ['id', 'type', 'name', 'brands',  'status' ];
  dataSource:any = [];
  equipments?: any;
  public types: any = [];
  public brands: any = [];
  public typeSelected?: String
  public brandSelected?: String

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(
    private equipmentService: EquipmentServiceService,
    private router: Router, 
    private route: ActivatedRoute,
    private typeService: EquipmentTypeServiceService,
    private brandService: BrandServiceService,){}

  ngOnInit(){
    this.equipmentService.getEquipment()
    .subscribe((res: any)=> {
      this.equipments = res.data;
     this.dataSource = new MatTableDataSource(this.equipments);
    });
    this.typeService.getTypes().subscribe((res: any) => {
      this.types = res.data;
    });
    this.brandService.getBrand().subscribe((res: any) => {
      this.brands = res.data;
    });
  }
  isSelected(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator, this.paginator);
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData.length);
  }
  navigateDetailPage(id: string){
     this.router.navigate(['/', 'equipment', id], {relativeTo:this.route}) 
  }
}
