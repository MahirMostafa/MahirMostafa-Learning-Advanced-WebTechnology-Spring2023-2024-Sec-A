import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    Amount: number;
}
