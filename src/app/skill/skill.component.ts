import { Component, Input, input } from '@angular/core';
import { skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
@Input() skills:skill[]=[];
}
