import { Skill } from './skill';

export interface SkillRatingChange {
  skill: Skill;
  changeInRating: number;
}