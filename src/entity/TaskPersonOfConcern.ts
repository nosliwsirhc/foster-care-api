import { Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { Person } from "./Person/Person";
import { Task } from "./Task";

@Entity()
export class TaskPersonOfConcern extends BasicEntity {

    @ManyToOne(type => Person)
    person: Person

    @ManyToOne(type => Task)
    task: Task

}