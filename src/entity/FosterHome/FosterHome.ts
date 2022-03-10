import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { HomeStudy } from "./HomeStudy";

@Entity()
export class FosterHome extends BasicEntity {

    @Column({ unique: true, nullable: false })
    name: string

    @Column()
    applicationDate: Date

    @Column()
    openedDate: Date

    @Column()
    closedDate: Date

    @OneToOne(type => HomeStudy)
    @JoinColumn()
    homeStudy: HomeStudy

}