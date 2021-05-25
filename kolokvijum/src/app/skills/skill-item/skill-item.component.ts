import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillRatingChange } from 'src/app/model/skill-rating-change';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillItemComponent {
 
  constructor() { }

  incrementInCart() {
    this.quantityChange.emit({skill: this.skill, changeInRating: 1});
  }

  decrementInCart() {
    if (this.skill.rating > 0) {
      this.quantityChange.emit({skill: this.skill, changeInRating: -1});
    }
  }

}
