import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/service/user-data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  selectedProfile!: User;
  constructor(
    private router: Router,
    private dataService: UserDataService
  ) { }

  ngOnInit(): void {
    if (this.dataService.selectedProfile) {
      this.selectedProfile = this.dataService.selectedProfile;
    } else {
      this.router.navigate(['']);
    }
  }

}
