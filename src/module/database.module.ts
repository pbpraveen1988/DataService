import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connections } from '../database';


/*
* @author : Praveen Kumar
* @comment : If we will not pass param for forRoot(), it will search for ormConfig.json 
* @date: 2020-05-09 18:05:41
*/
@Module({
    imports: [TypeOrmModule.forRoot()]
})
export class DatabaseModule { }
