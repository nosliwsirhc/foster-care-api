import { Entity, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BasicEntity extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn({ name: "created_at"})
    createdAt: Date

    @UpdateDateColumn({ name: "updated_at"})
    updatedAt: Date

}