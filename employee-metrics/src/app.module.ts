import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from './elasticsearch/elasticsearch.module';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [ElasticsearchModule, EmployeesModule],
  controllers: [AppController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
