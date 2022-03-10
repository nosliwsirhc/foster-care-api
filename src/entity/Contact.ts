import { Column, Entity } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class Contact extends BasicEntity {

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

}