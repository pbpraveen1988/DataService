import { Controller, Get, Param, Query, UseFilters, Logger } from '@nestjs/common';
import { DataService } from '../services';
import { RequestContext } from '../model';
import { DBException } from '../filters';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
@UseFilters(new DBException())
export class DataController {
  private logger = new Logger('DataController');
  constructor(private readonly dataService: DataService) { }

  @MessagePattern('list')
  async getList(requestContext: RequestContext): Promise<any> {
    this.logger.log('list of records for object');
    return await this.dataService.getList(requestContext.object, requestContext.query);
  }

  @MessagePattern('read')
  async getRecord(requestContext: RequestContext): Promise<any> {
    this.logger.log('get the record of particular id');
    return await this.dataService.getRecordByIdOrKey(requestContext.object, requestContext.idOrKey, requestContext.query);
  }

}
