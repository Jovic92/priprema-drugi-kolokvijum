import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import { Observable, Subject } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { SkillRatingChange } from 'src/app/model/skill-rating-change';


@Component({
  selector: 'app-skill-list',
  template: './skill-list.component.html',
  styles: []
})
export class SkillListComponent implements OnInit {

  public skills$: Observable<Skill[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadProductsList: Subject<void> = new Subject();

  constructor() { }

  ngOnInit() {
    // this.skills$ = this.searchSubject
    //     .startWith(this.searchTerm)
    //     .debounceTime(300)
    //     .distinctUntilChanged()
    //     .merge(this.reloadProductsList)
    //     .switchMap((query) => this.skillsService.getProducts(this.searchTerm));
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: SkillRatingChange) {
    // this.productService.changeQuantity(change.skill.id, change.changeInRating)
    //     .subscribe((res) => this.reloadProductsList
    //     .next());
  }

  onCreate() {
    this.reloadProductsList.next();
  }
}
