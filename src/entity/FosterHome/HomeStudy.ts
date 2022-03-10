import { Column, CreateDateColumn, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class HomeStudy extends BasicEntity {

    @Column()
    url: string

}