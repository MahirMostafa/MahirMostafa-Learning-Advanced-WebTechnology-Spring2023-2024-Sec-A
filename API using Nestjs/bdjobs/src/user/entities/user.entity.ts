import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Salary } from "../../salary/entities/salary.entity";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ unique: false, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @Column({ nullable: false })
    address: string;

    @Column({ nullable: true })
    role: string;

    @Column({ nullable: true })
    salaryId: number; 

    @ManyToOne(() => Salary, { nullable: true })
    @JoinColumn({ name: "salaryId", referencedColumnName: "id" })
     salary: Salary;
}
