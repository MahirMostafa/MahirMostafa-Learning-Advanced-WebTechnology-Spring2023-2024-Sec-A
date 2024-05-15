import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
export declare class SalaryController {
    private readonly salaryService;
    constructor(salaryService: SalaryService);
    create(createSalaryDto: CreateSalaryDto): Promise<import("src/salary/entities/salary.entity").Salary>;
    findAll(): Promise<import("src/salary/entities/salary.entity").Salary[]>;
    findOne(id: string): Promise<import("src/salary/entities/salary.entity").Salary>;
    update(id: string, updateSalaryDto: UpdateSalaryDto): Promise<import("src/salary/entities/salary.entity").Salary>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
