import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      node: 'http://localhost:9200',
    });
  }

  async getCount(index: string): Promise<number> {
    const result = await this.client.count({ index });
    return result.body.count;
  }

  async getAverageSalary(index: string): Promise<number | null> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          avg_salary: {
            avg: { field: 'Salary' },
          },
        },
        size: 0,
      },
    });

    const avgSalary = result.body.aggregations?.avg_salary as { value: number };
    return avgSalary?.value ?? null;
  }

  async getSalaryRange(
    index: string,
  ): Promise<{ min_salary: number | null; max_salary: number | null }> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          min_salary: {
            min: { field: 'Salary' },
          },
          max_salary: {
            max: { field: 'Salary' },
          },
        },
        size: 0,
      },
    });

    const minSalary = result.body.aggregations?.min_salary as { value: number };
    const maxSalary = result.body.aggregations?.max_salary as { value: number };
    return {
      min_salary: minSalary?.value ?? null,
      max_salary: maxSalary?.value ?? null,
    };
  }

  async getAgeDistribution(index: string): Promise<any[]> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          age_distribution: {
            histogram: {
              field: 'Age',
              interval: 5,
            },
          },
        },
        size: 0,
      },
    });

    const ageDistribution = result.body.aggregations?.age_distribution as {
      buckets: any[];
    };
    return ageDistribution?.buckets ?? [];
  }

  async getGenderDistribution(index: string): Promise<any[]> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          gender_distribution: {
            terms: { field: 'Gender' },
          },
        },
        size: 0,
      },
    });

    const genderDistribution = result.body.aggregations
      ?.gender_distribution as {
      buckets: any[];
    };
    return genderDistribution?.buckets ?? [];
  }

  async getMaritalStatusDistribution(index: string): Promise<any[]> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          marital_status_distribution: {
            terms: { field: 'MaritalStatus' },
          },
        },
        size: 0,
      },
    });

    const maritalStatusDistribution = result.body.aggregations
      ?.marital_status_distribution as { buckets: any[] };
    return maritalStatusDistribution?.buckets ?? [];
  }

  async getDateOfJoiningDistribution(index: string): Promise<any[]> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          date_of_joining_distribution: {
            date_histogram: {
              field: 'DateOfJoining',
              interval: 'month',
            },
          },
        },
        size: 0,
      },
    });

    const dateOfJoiningDistribution = result.body.aggregations
      ?.date_of_joining_distribution as { buckets: any[] };
    return dateOfJoiningDistribution?.buckets ?? [];
  }

  async getTopInterests(index: string): Promise<any[]> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          top_interests: {
            terms: {
              field: 'Interests',
              size: 10,
            },
          },
        },
        size: 0,
      },
    });

    const topInterests = result.body.aggregations?.top_interests as {
      buckets: any[];
    };
    return topInterests?.buckets ?? [];
  }

  async getDesignationDistribution(index: string): Promise<any[]> {
    const result = await this.client.search({
      index,
      body: {
        aggs: {
          designation_distribution: {
            terms: { field: 'Designation' },
          },
        },
        size: 0,
      },
    });

    const designationDistribution = result.body.aggregations
      ?.designation_distribution as { buckets: any[] };
    return designationDistribution?.buckets ?? [];
  }
}
