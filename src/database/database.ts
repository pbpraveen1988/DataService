import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class Connections {
    public static postgres: TypeOrmModuleOptions = {
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'typescriptLocal',
        synchronize: true,
        entities: []
    };

    /*
    * @author : Praveen Kumar
    * @comment : Micorsoft Azure Database connections 
    * @date: 2020-05-09 13:33:19
    */
    public static mssql: TypeOrmModuleOptions = {
        host: 'nestjs.database.windows.net',
        type: 'mssql',
        username: 'pbpraveen1988',
        password: 'Yourtest0001',
        database: 'nestjs_microapp',
        synchronize: true,
        entities: [],
        port: 1433
    };

    /*
    * @author : Praveen Kumar
    * @comment : To connect outside of docker container and connect with local, need to use 
    *           For Mac  -> docker.for.mac.localhost
    *           For Wind -> docker.for.windows.localhost
    * @date: 2020-05-03 13:01:53
    */
    public static mysql: TypeOrmModuleOptions = {
        host: "docker.for.mac.localhost",
        type: 'mysql',
        port: 3306,
        username: 'root',
        password: '',
        database: 'typescript_node',
        synchronize: true,
        entities: []
    }
}