import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../model/client.model';
import { ErrorMsg } from '../../model/error.model';
import { AccountService } from '../../services/account/account.service';
import { DataService } from '../../services/data/data.service';
import { appIcon } from '../../services/icons/icon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  client: Client = new Client();
  error: ErrorMsg = new ErrorMsg();
  icon = appIcon;
  constructor(private router: Router,
    private dataService: DataService,
    private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.dataService.client.subscribe(client=> this.client = client);
  }

  selectRole(id: number){
    if(this.client.roles && this.client.roles.length > 0){
      this.client.roles.map(r=>r.selected = false);
      this.client.roles[id].selected = true;
      // this.selectedRole = this.client.roles[id];
      switch(this.client.roles[id].name){
        case "ROLE_CLIENT":
          this.router.navigate(['/main']);
        break;
        case "ROLE_ADMIN":
          this.router.navigate(['/admin']);
        break;
      }
    }
  }

  logout(){
    this.client = new Client(undefined);
    this.error = ErrorMsg.create(undefined);
    this.router.navigate(['/']);
  }
}
