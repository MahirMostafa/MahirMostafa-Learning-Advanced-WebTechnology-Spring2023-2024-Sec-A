import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { Salary } from './entities/salary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Salary])],
  controllers: [SalaryController],
  providers: [SalaryService],
})
export class SalaryModule {}
