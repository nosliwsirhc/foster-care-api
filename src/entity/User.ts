import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import bcrypt from 'bcrypt'

export interface IUSerRoles {
    admin: boolean
    director: boolean
    officeAdministrator: boolean
    accountant: boolean
    resourceWorker: boolean
    fosterParent: boolean
    careWorker: boolean
    guest: boolean
}

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        nullable: false,
        unique: true,
        length: 100
    })
    username: string;

    @Column({
        nullable: false
    })
    password: string;

    @Column({
        default: true
    })
    isActive: boolean

    @Column(
        'jsonb',
        {
            default: {
            admin: false,
            director: false,
            officeAdministrator: false,
            accountant: false,
            resourceWorker: false,
            fosterParent: false,
            careWorker: false,
            guest: true
        }
    })
    roles: IUSerRoles

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    async checkPassword(password: string): Promise<boolean> {
        const pwdMatch = await bcrypt.compare(password, this.password)
        return pwdMatch
    }

    async hashAndSetPassword(password: string): Promise<{message: string}> {
        if(this.password) return {message: 'Password already exists'}
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)
        this.password = hash
        return {message: 'Password set'}
    }

    async updatePassword(currentPassword: string, newPassword: string): Promise<{message: string}> {
        if(!this.password) return {message: 'No current password is set'}
        const passwordMatch = await bcrypt.compare(currentPassword, this.password)
        if(!passwordMatch) return {message: 'Current and new passwords do not match'}
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(newPassword, salt)
        this.password = hash
        return {message: 'Password updated'}
    }

}
