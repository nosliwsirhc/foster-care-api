import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PlacingAgencyJobTitle extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    jobTitle: string

    @Column()
    department: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}