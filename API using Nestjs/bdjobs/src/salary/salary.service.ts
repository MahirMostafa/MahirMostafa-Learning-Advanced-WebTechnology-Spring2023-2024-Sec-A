import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { Salary } from './entities/salary.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalaryService {
  
  constructor(@InjectRepository(Salary) private readonly salaryRepository : Repository<Salary>) {}

  async create(createSalaryDto: CreateSalaryDto) {
    const newSalary = this.salaryRepository.create(createSalaryDto);
    await this.salaryRepository.save(newSalary);
    return newSalary;
  }

  async findAll() {
    return await this.salaryRepository.find();
  }

  async findOne(id: number) {
    return await this.salaryRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateSalaryDto: UpdateSalaryDto) {
    await this.salaryRepository.update(id, updateSalaryDto);
    return await this.salaryRepository.findOne({where:{id:id}});
  }

  async remove(id: number) {
    await this.salaryRepository.delete(id);
    return { deleted: true };
  }
}
