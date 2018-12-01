import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ResearchGroup} from '../classes/research-group';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private _groupsSource: Subject<ResearchGroup[]> = new Subject<ResearchGroup[]>();
  groupsReader = this._groupsSource.asObservable();
  constructor(private http: HttpClient) { }
  getAssets(url: string) {
    return this.http.get(url, {observe: 'response'});
  }

  updateGroups(data) {
    this._groupsSource.next(data);
  }
}
