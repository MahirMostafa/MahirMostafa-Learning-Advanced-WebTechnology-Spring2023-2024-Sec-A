import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Salary } from "../../salary/entities/salary.entity";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: false, nullable: false})
    username: string;

    @Column({ unique: false, nullable: false })
    email: string;

    
    @Column({nullable: true})
    phonenumber: string;

    @Column({nullable:false})
    gender: string;

    @Column({ nullable: false })
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @Column({ nullable: true })
    role: string;

    @Column({ nullable: true })
    salaryId: number; 

    @ManyToOne(() => Salary, { nullable: true })
    @JoinColumn({ name: "salaryId", referencedColumnName: "id" })
     salary: Salary;

}
