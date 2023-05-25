import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  @Input() types?: any[]
  @Input() brands?: any[]
  public typeSelected?: String
  public brandSelected?: String
  
}
