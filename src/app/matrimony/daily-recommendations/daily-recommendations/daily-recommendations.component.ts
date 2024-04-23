import { Component, OnInit } from '@angular/core';
import { animate, keyframes, transition, trigger } from '@angular/animations';
import { swiperight, swipeleft } from 'src/app/shared/keyframes';
import { UserDataService } from 'src/app/shared/service/user-data.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-daily-recommendations',
  templateUrl: './daily-recommendations.component.html',
  styleUrls: ['./daily-recommendations.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swipeleft)))
    ])
  ]
})
export class DailyRecommendationsComponent implements OnInit {
  index = 0;
  userList: User[] = []
  animationState: string | any;
  eventText: string | any;

  constructor(
    private toastr: ToastrService,
    private dataService: UserDataService
  ) { }

  ngOnInit() {
    this.userList = this.dataService.userList;
  }

  startAnimation(value: any) {
    if (!this.animationState) {
      this.index++;
      if (this.userList.length === this.index) {
        this.index = 0;
      }
      if (value === 'swipeleft') {
        this.toastr.warning('', 'Not Interested');
      } else if (value === 'swiperight') {
        this.toastr.success(' ', 'Interested');
      } else if (value === 'shortlist') {
        this.toastr.info(' ', 'Shortlisted');
      }
      this.animationState = value;
    }
  }
  resetAnimationState(state: any) {
    this.animationState = '';
  }
  onSwipeRight(event: any) {
    console.log('event right', event);
    this.startAnimation('swiperight')
  }
  onSwipeLeft(event: any) {
    console.log('event left', event);
    this.startAnimation('swipeleft')
  }
}



