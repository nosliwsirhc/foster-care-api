import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Address } from "./Address";
import { Agency } from "./Agency";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class AgencyAddress extends BasicEntity {

    @ManyToOne(() => Agency)
    agency: Agency

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @Column()
    label: string

    @Column()
    isHeadquarters: boolean

}