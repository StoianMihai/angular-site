import { Injectable } from '@angular/core';
import { GitUsers } from './git-users';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class GitUsersService {
  cachedValues: Array <{
    [query: string]: GitUsers

  }> = [];
  constructor(private http: HttpClient) {
      
  }
  
  gitUsers = (query: string): Promise<GitUsers> => {
    let promise = new Promise<GitUsers>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this.http.get('https://api.github.com/users?q=' + query)
        .toPromise()
        .then( (response) => {
          resolve(response as GitUsers)
        }, (error: any) => {
          reject(error);
        })
      }
    })
    return promise;
  }
}
