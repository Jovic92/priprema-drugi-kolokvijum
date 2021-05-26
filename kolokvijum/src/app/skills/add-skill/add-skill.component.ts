import { Component, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {


  public message = '';
  constructor(private skillService: SkillService) { }

  createSkill(skillForm) {
    console.log(skillForm)
    const skill: Skill = skillForm.value.skill
    this.skillService.addSkill(skill).subscribe((res) => {
      alert("created")
    })
  }

}
