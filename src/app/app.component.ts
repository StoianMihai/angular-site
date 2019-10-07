import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [GitSearchService, GitUsersService]
})
export class AppComponent implements OnInit {
  constructor (private GitSearchService : GitSearchService) {

 }
  ngOnInit() {}
  title = 'app is functional!';

}
//export class AppComponent implements OnInit {
  //constructor (private GitUsersService : GitUsersService) {

  //}
  //ngOnInit() {
   // this.GitUsersService.gitUsers('&&&&&').then( (response) => {
   //   alert("I have found:" + response.total_count);
  //  }, (error) => {
 //     alert("Error: " + error.statusText);
  //  })
 // }
  //title = 'It is working and ';
  
//}