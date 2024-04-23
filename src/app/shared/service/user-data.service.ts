import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, BehaviorSubject, tap } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userList: User[] = [];
  selectedProfile!: User;

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<User[]>('assets/data/userlist.json')
      .pipe(
        debounceTime(2000),
        tap(result => this.userList = result));
  }

  private assessmentData = new BehaviorSubject({});
  data = this.assessmentData.asObservable();

  addData(data: any) {
    this.assessmentData.next(data);
  }

}


