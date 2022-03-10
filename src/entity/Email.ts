import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class Email extends BasicEntity {

    @Column({ unique: true, nullable: false })
    address: string

}