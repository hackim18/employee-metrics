# Employee Metrics API with NestJS and Elasticsearch

This application provides a RESTful API built with NestJS framework to fetch various metrics and distributions related to employees stored in an Elasticsearch index named `companydatabase`. It includes endpoints to retrieve counts, average salary, salary range, age distribution, gender distribution, marital status distribution, date of joining distribution, top interests, and designation distribution.

## Installation and Setup

### Prerequisites

- Node.js installed on your machine
- Elasticsearch 6.8.0 running locally at `http://localhost:9200` or `http://127.0.0.1:9200`

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/hackim18/employee-metrics.git
   cd employee-metrics
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Application:**

   ```bash
   npm run start:dev
   ```

   This will start the NestJS application. Ensure Elasticsearch 6.8.0 is running locally at `http://localhost:9200`.

## Endpoints

1. **Count of Employees**

   - Endpoint: GET http://localhost:3000/employees/count
   - Response Example:
     ```json
     {
       "count": 50000
     }
     ```

2. **Average Salary**

   - Endpoint: GET http://localhost:3000/employees/average-salary
   - Response Example:
     ```json
     {
       "average_salary": 57843.9
     }
     ```

3. **Salary Range**

   - Endpoint: GET http://localhost:3000/employees/salary-range
   - Response Example:
     ```json
     {
       "min_salary": 25000,
       "max_salary": 154000
     }
     ```

4. **Age Distribution**

   - Endpoint: GET http://localhost:3000/employees/age-distribution
   - Response Example:
     ```json
     {
       "age_distribution": [
         {
           "key": 20,
           "doc_count": 3572
         },
         {
           "key": 25,
           "doc_count": 25766
         },
         {
           "key": 30,
           "doc_count": 16066
         },
         {
           "key": 35,
           "doc_count": 2810
         },
         {
           "key": 40,
           "doc_count": 658
         },
         {
           "key": 45,
           "doc_count": 424
         },
         {
           "key": 50,
           "doc_count": 339
         },
         {
           "key": 55,
           "doc_count": 188
         },
         {
           "key": 60,
           "doc_count": 141
         },
         {
           "key": 65,
           "doc_count": 36
         }
       ]
     }
     ```

5. **Gender Distribution**

   - Endpoint: GET http://localhost:3000/employees/gender-distribution
   - Response Example:
     ```json
     {
       "gender_distribution": [
         {
           "key": "male",
           "doc_count": 25083
         },
         {
           "key": "female",
           "doc_count": 24917
         }
       ]
     }
     ```

6. **Marital Status Distribution**

   - Endpoint: GET http://localhost:3000/employees/marital-status-distribution
   - Response Example:
     ```json
     {
       "marital_status_distribution": [
         {
           "key": "unmarried",
           "doc_count": 25001
         },
         {
           "key": "married",
           "doc_count": 24999
         }
       ]
     }
     ```

7. **Date of Joining Distribution**

   - Endpoint: GET http://localhost:3000/employees/date-of-joining-distribution
   - Response Example:
     ```json
     {
       "date_of_joining_distribution": [
         {
           "key_as_string": "1970-01-01",
           "key": 0,
           "doc_count": 1
         },
         {
           "key_as_string": "1970-02-01",
           "key": 2678400000,
           "doc_count": 0
         },
         ...
       ]
     }
     ```

8. **Top Interests**

   - Endpoint: GET http://localhost:3000/employees/top-interests
   - Response Example:
     ```json
     {
       "top_interests": [
         {
           "key": "collecting",
           "doc_count": 9555
         },
         {
           "key": "to",
           "doc_count": 3845
         },
         {
           "key": "watching",
           "doc_count": 3811
         },
         {
           "key": "a",
           "doc_count": 3788
         },
         {
           "key": "music",
           "doc_count": 3278
         },
         {
           "key": "making",
           "doc_count": 3193
         },
         {
           "key": "cars",
           "doc_count": 2614
         },
         {
           "key": "diving",
           "doc_count": 2609
         },
         {
           "key": "c",
           "doc_count": 2589
         },
         {
           "key": "r",
           "doc_count": 2589
         }
       ]
     }
     ```

9. **Designation Distribution**
   - Endpoint: GET http://localhost:3000/employees/designation-distribution
   - Response Example:
     ```json
     {
       "designation_distribution": [
         {
           "key": "engineer",
           "doc_count": 38713
         },
         {
           "key": "software",
           "doc_count": 38713
         },
         {
           "key": "senior",
           "doc_count": 8601
         },
         {
           "key": "lead",
           "doc_count": 4300
         },
         {
           "key": "team",
           "doc_count": 4300
         },
         {
           "key": "trainee",
           "doc_count": 4300
         },
         {
           "key": "manager",
           "doc_count": 1806
         },
         {
           "key": "architect",
           "doc_count": 860
         },
         {
           "key": "human",
           "doc_count": 860
         },
         {
           "key": "resource",
           "doc_count": 860
         }
       ]
     }
     ```

## Testing with Postman

### Open Postman:

Launch Postman on your local machine.

### Testing Endpoints:

- Use the provided URLs for each endpoint.
- Set the HTTP method to GET.
- Click on Send to execute the request.
- View the response returned by the API in the Postman interface.

## Acknowledgements

We would like to acknowledge the invaluable contributions of the following frameworks and libraries that made this project possible:

- [NestJS](https://docs.nestjs.com/): A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [Elasticsearch 6.8.0](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html): A distributed, RESTful search and analytics engine capable of solving a growing number of use cases.

These frameworks provided the foundation for creating a robust API to retrieve employee metrics and distributions from Elasticsearch.

## License

This project is licensed under the MIT License.
