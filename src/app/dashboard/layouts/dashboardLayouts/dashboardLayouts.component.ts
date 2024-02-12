import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboardLayouts',
  templateUrl: './dashboardLayouts.component.html',
  styleUrls: ['./dashboardLayouts.component.css']
})
export class DashboardLayoutsComponent  {
 private authService = inject(AuthService)

 public user = computed( () => this.authService.currentUser())
  constructor() {
    if(this.user){
      console.log("users", this.user())
    }
   }


}
