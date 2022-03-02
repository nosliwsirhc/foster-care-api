import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ContactType extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ unique: true, nullable: false })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}