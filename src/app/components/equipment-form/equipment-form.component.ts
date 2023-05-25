import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/interface/equipment';
import { BrandServiceService } from 'src/app/services/brand/brand-service.service';
import { EquipmentServiceService } from 'src/app/services/equipment/equipment-service.service';
import { EquipmentTypeServiceService } from 'src/app/services/equipmentType/equipment-type-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.scss'],
})
export class EquipmentFormComponent {
  @Input() equipment!: Equipment;

  public types: any = [];
  public brands: any = [];
  public idEquipment: String = '';
  public checkoutForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentServiceService,
    private typeService: EquipmentTypeServiceService,
    private brandService: BrandServiceService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      equipmentName: [
        this.equipment ? this.equipment.equipmentName : '',
        Validators.required,
      ],
      description: [
        this.equipment ? this.equipment.description : '',
        Validators.required,
      ],
      equipmentTypeId: [
        this.equipment ? this.equipment.equipmentTypeId._id : '',
        Validators.required,
      ],
      brandId: [
        this.equipment ? this.equipment.brandId._id : '',
        Validators.required,
      ],
      equipmentImageUrl: this.equipment ? this.equipment.equipmentImageUrl : {},
    });
    this.typeService.getTypes().subscribe((res: any) => {
      this.types = res.data;
    });
    this.brandService.getBrand().subscribe((res: any) => {
      this.brands = res.data;
    });
  }
  handleFileInput(event: any) {
    this.checkoutForm.value.equipmentImageUrl =
      'uploads/equipments/' + event.target.files[0].name;
    this.equipment
      ? (this.equipment.equipmentImageUrl =
          this.checkoutForm.value.equipmentImageUrl)
      : null;
  }

  public openSnackBar(mess: string) {
    this._snackBar.open(mess, 'Close', {
      duration: 5 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  onSubmit() {
    if (this.equipment) {
      try {
        this.equipmentService
          .update(this.equipment._id, {
            ...this.checkoutForm.value,
            _id: this.equipment._id,
          })
          .subscribe((data: any) => {
            this.openSnackBar('Cập nhật thành công');
            this.router.navigate(['/', 'equipment'], {
              relativeTo: this.route,
            });
          });
      } catch (err) {
        this.openSnackBar('Vui lòng kiểm tra lại thông tin');
      }
    } else {
      try {
        this.equipmentService
          .create(this.checkoutForm.value)
          .subscribe((data: any) => {
            this.idEquipment = data._id;
            this.openSnackBar('Thêm thành công');
            this.router.navigate(['/', 'equipment'], {
              relativeTo: this.route,
            });
          });
      } catch (err) {
        this.openSnackBar('Vui lòng kiểm tra lại thông tin');
      }
    }
  }
}
