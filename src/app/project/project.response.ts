import { ToDo } from "../todo/todo";
import { Project } from "./project";

export class ProjectResponse {
    project!: Project;
    toDos!: ToDo[];
}