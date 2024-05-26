import { skill } from "./skill.model";

export class Developer{
constructor(
readonly firstName: string,   
readonly lastName: string,
readonly age : number,
readonly gender : string,
readonly bio : string,
//readonly skills: Array<skill>
readonly skills: skill[]
){}
}