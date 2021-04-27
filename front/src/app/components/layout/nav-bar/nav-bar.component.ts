import { Component, OnInit } from '@angular/core';
import {faHome, faUsers, faUserCheck, faFutbol, faChartBar, faFlag} from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	faHome = faHome;
	faUsers = faUsers;
	faUserCheck = faUserCheck;
	faFutbol = faFutbol;
	faChartBar = faChartBar;
    faflag = faFlag;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_JOUEUR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
