import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    Amount: number;
}
