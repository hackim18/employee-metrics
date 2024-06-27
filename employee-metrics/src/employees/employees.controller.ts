import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('count')
  async getCount() {
    return await this.employeesService.getCount();
  }

  @Get('average-salary')
  async getAverageSalary() {
    return await this.employeesService.getAverageSalary();
  }

  @Get('salary-range')
  async getSalaryRange() {
    return await this.employeesService.getSalaryRange();
  }

  @Get('age-distribution')
  async getAgeDistribution() {
    return await this.employeesService.getAgeDistribution();
  }

  @Get('gender-distribution')
  async getGenderDistribution() {
    return await this.employeesService.getGenderDistribution();
  }

  @Get('marital-status-distribution')
  async getMaritalStatusDistribution() {
    return await this.employeesService.getMaritalStatusDistribution();
  }

  @Get('date-of-joining-distribution')
  async getDateOfJoiningDistribution() {
    return await this.employeesService.getDateOfJoiningDistribution();
  }

  @Get('top-interests')
  async getTopInterests() {
    return await this.employeesService.getTopInterests();
  }

  @Get('designation-distribution')
  async getDesignationDistribution() {
    return await this.employeesService.getDesignationDistribution();
  }
}
