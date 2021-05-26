import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient: HttpClient) { }

  BACKEND_BASE = "http://localhost:3000"

  getSkills(query: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.BACKEND_BASE + "/api/skills", {
      params: { q: query }
    })
  }

  changeRating(id: number, changeAmount: number): Observable<any> {
    return this.httpClient.patch(this.BACKEND_BASE + "/api/skills/" + id, {
      changeInQuantity: changeAmount
    })
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(this.BACKEND_BASE + "/api/skills", skill)
  }

}
