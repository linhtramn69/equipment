import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public active: number = 0
  public links = [
    {
      name: "Dashboard",
      link: '/',
      icon: 'dashboard',
    },
    {
      name: "Equipments",      
      link: '/equipment',
      icon: 'laptop_mac',      
    },
    {
      name: "Equipment Types",      
      link: '/equipment',
      icon: 'devices',      
    },
    {
      name: "Brands",      
      link: '/brands',
      icon: 'devices',      
    },
    {
      name: "Assignment",      
      link: '/equipment',
      icon: 'devices',      
    },
    {
      name: "Employees",      
      link: '/equipment',
      icon: 'group',      
    }
  ]
  public activeItem(i: number){
    this.active = i
    
  }
}
