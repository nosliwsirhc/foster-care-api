import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HomeStudy } from "./HomeStudy";

@Entity()
export class FosterHome extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

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

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}