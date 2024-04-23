import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserDataService } from 'src/app/shared/service/user-data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.scss']
})
export class MyMatchesComponent implements OnInit {
  userList: User[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
      1140: {
        items: 5
      },
    },
    nav: true
  }
  constructor(
    private router: Router,
    private dataService: UserDataService
  ) { }


  ngOnInit(): void {
    this.userList = this.dataService.userList;
  }

  clickUser(user: User) {
    this.dataService.selectedProfile = user;
    this.router.navigate(['/profiles/profile'])
  }
}
