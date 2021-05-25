import { Component, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {


  public message = '';
  constructor() { }

  createSkill(skillForm) {
    
  }

}
