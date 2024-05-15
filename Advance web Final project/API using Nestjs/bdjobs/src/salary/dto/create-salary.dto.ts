import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSalaryDto {
    @IsNotEmpty({ message: 'Amount is required' })
    @IsNumber({}, { message: 'Amount must be a number' })
    Amount: number;
}

