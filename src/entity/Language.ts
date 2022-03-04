import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Language extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ unique: true, nullable: false })
    language: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
}