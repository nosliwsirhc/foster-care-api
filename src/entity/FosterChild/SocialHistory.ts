import { Column, Entity, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Attachment } from "../Attachment";
import { FosterChild } from "./FosterChild";

@Entity()
export class SocialHistory extends BasicEntity {

    @ManyToOne(type => FosterChild)
    fosterChild: string

    @Column()
    dateRequested: Date

    @Column()
    dateReceived: Date

    @Column()
    dateAuthored: Date

    @OneToOne(type => Attachment)
    @JoinTable()
    attachment: Attachment

}