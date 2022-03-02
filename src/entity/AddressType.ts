import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AddressType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true, nullable: false })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}