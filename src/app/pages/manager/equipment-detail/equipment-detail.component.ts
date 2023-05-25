import { Component, inject } from '@angular/core';
import { EquipmentServiceService } from 'src/app/services/equipment/equipment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss'],
})
export class EquipmentDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  public equipment: any = {};
  public equipmentId: String = '';
  public edit: boolean = false;
  constructor(
    private equipmentService: EquipmentServiceService,
    private router: Router,
    private _snackBar: MatSnackBar,

  ) {}

  ngOnInit() {
    this.equipmentId = String(this.route.snapshot.params['id']);
    this.equipmentService
      .getEquipmentById(this.equipmentId)
      .subscribe((res: any) => {
        this.equipment = res.data;
      });
  }
  isEdit() {
    this.edit = true;
  }
  public openSnackBar(mess: string) {
    this._snackBar.open(mess, 'Close', {
      duration: 5 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  isAcitve() {
    this.equipment.status = !this.equipment.status;
    this.equipmentService
          .update(this.equipment._id, {...this.equipment, status: this.equipment.status})
          .subscribe((data: any) => {
            this.openSnackBar('Cập nhật thành công');
          });
  }
  handleDelete(id: String) {
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {
      this.equipmentService.delete(id).subscribe((res: any) => {});
      this.router.navigate(['/', 'equipment'], { relativeTo: this.route });
    }
  }
}
