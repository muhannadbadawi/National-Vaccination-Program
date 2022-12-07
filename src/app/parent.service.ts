import { Injectable } from '@angular/core';
import { Parent } from './Parent.model';
import { HttpClient } from '@angular/common/http';
import { Login } from './app-account/signin/Login.model';
@Injectable({
  providedIn: 'root'
})
export class ParentService {
  url: string = "https://localhost:44325/api/parents";
  parents: Parent[];
  parent: Parent;
  login: Login;

  constructor(private http: HttpClient) { }
  getAllParent() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.parents = res as Parent[];
      }
    )
  }
  postParent() {
    return this.http.post(this.url, this.parent);
  }
  loginParent() {
    debugger
    return this.http.post(this.url+"/LoginParent",this.login);
  }
  putParent() {
    return this.http.put(this.url+"/"+this.parent.id, this.parent);
  }
  deleteParent(id:any) {
    return this.http.delete(this.url+"/"+id);
  }

  
}
