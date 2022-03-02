import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Contact extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    countryCode: string

    @Column()
    areaCode: string

    @Column()
    exchange: string

    @Column()
    station: string

    @Column()
    extension: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}