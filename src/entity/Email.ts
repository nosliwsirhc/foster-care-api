import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class Email extends BasicEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ unique: true, nullable: false })
    address: string

}