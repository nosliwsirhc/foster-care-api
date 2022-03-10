import { Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { Person } from "./Person/Person";
import { Task } from "./Task";

@Entity()
export class TaskAssignedTo extends BasicEntity {

    @ManyToOne(task => Person)
    person: Person

    @ManyToOne(task => Task)
    task: Task

}