import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({nullable: false})
    firstName: string;

    
    @Column({nullable: false})
    lastName: string;

    
    @Column({unique: false, nullable: false})
    email: string;

    
    @Column({nullable: false})
    password: string;
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password,10)
    }
    
    @Column({nullable: false})
    address: string;

    @Column({nullable: true})
    role: string;

    @Column({nullable: true})
    SalaryId : number;
}
