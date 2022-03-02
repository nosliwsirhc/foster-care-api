import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    address1: string

    @Column()
    address2: string

    @Column()
    city: string

    @Column()
    province: string

    @Column()
    postalCode: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}