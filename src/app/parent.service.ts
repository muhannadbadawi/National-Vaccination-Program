import { Injectable } from '@angular/core';
import { Parent } from './Parent.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParentService {
  url: string = "https://localhost:44325/api/parents";
  parents: Parent[];
  parent: Parent;
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
  putParent() {
    return this.http.put(this.url+"/"+this.parent.id, this.parent);
  }
  deleteParent(id:any) {
    return this.http.delete(this.url+"/"+id);
  }

  
}
