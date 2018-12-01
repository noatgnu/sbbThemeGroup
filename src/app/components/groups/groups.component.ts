import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ResearchGroup} from '../../classes/research-group';
import {AssetsService} from '../../services/assets.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groupObs: Observable<ResearchGroup[]>;
  constructor(private assetsService: AssetsService) {
    this.groupObs = this.assetsService.groupsReader;
  }

  ngOnInit() {
    this.getGroup();
  }

  getGroup() {
    this.assetsService.getAssets('assets/groups.json').subscribe((resp) => {
      this.assetsService.updateGroups(resp.body['data']);
    });
  }
}
