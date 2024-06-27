import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service';

@Injectable()
export class EmployeesService {
  private readonly index = 'companydatabase';

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async getCount() {
    return { count: await this.elasticsearchService.getCount(this.index) };
  }

  async getAverageSalary() {
    return {
      average_salary: await this.elasticsearchService.getAverageSalary(
        this.index,
      ),
    };
  }

  async getSalaryRange() {
    const salaryRange = await this.elasticsearchService.getSalaryRange(
      this.index,
    );
    return {
      min_salary: salaryRange.min_salary,
      max_salary: salaryRange.max_salary,
    };
  }

  async getAgeDistribution() {
    return {
      age_distribution: await this.elasticsearchService.getAgeDistribution(
        this.index,
      ),
    };
  }

  async getGenderDistribution() {
    return {
      gender_distribution:
        await this.elasticsearchService.getGenderDistribution(this.index),
    };
  }

  async getMaritalStatusDistribution() {
    return {
      marital_status_distribution:
        await this.elasticsearchService.getMaritalStatusDistribution(
          this.index,
        ),
    };
  }

  async getDateOfJoiningDistribution() {
    return {
      date_of_joining_distribution:
        await this.elasticsearchService.getDateOfJoiningDistribution(
          this.index,
        ),
    };
  }

  async getTopInterests() {
    return {
      top_interests: await this.elasticsearchService.getTopInterests(
        this.index,
      ),
    };
  }

  async getDesignationDistribution() {
    return {
      designation_distribution:
        await this.elasticsearchService.getDesignationDistribution(this.index),
    };
  }
}
