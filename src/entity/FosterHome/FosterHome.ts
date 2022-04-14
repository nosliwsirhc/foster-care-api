import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Agency } from "../Agency";
import { BasicEntity } from "../BasicEntity";
import { HomeStudy } from "./HomeStudy";

@Entity()
export class FosterHome extends BasicEntity {

    @ManyToOne(() => Agency)
    agency: Agency

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