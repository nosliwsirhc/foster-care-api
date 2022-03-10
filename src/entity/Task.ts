import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { Person } from "./Person/Person";
import { TaskAssignedTo } from "./TaskAssignedTo";
import { TaskPersonOfConcern } from "./TaskPersonOfConcern";

export enum TaskStatus {

    ASSIGNED = 'assigned',
    IN_PROGRESS = 'in progress',
    COMPLETE = 'complete'

}

@Entity()
export class Task extends BasicEntity {

    @ManyToOne(type => Task)
    parentTask: Task

    @OneToMany(type => TaskAssignedTo, assignedTo => assignedTo.person)
    assignedTo: TaskAssignedTo[]

    @OneToMany(type => TaskPersonOfConcern, personOfConcern => personOfConcern.person)
    personOfConcern: TaskPersonOfConcern[]

    @Column()
    dateAssigned: Date

    @ManyToOne(task => Person)
    assignedBy: Person

    @Column()
    dueDate: Date

    @Column()
    reminderDateTime: Date

    @Column()
    status: TaskStatus

}