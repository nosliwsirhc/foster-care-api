import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Race extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ unique: true, nullable: false })
    race: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
}