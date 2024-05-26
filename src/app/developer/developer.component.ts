import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
dev:Developer =new Developer(
"marwa", 
"sliti",
35,
"female",
"im marwa",
[{
  name: "angular",
  website: "https://angular.io/",
  logo:"logo_angular"

},
{
  name:"java",
  website:"https://www.java.com/fr/",
  logo: "logo_java"
}],
);
}
