import { Question } from "./Question";

export interface Answer{
    id?:number;
	description_answer?:string;
	status?:string;
	datetime?:string;
	question?:Question;
    approved_by?:string;
	created_by?:string;
}