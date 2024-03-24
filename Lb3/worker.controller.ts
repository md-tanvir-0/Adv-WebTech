import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { WorkersService } from "./worker.service";
import { WorkerDTO } from "./worker.dto";



@Controller('workers')
export class WorkersController {
    constructor(private workersService: WorkersService) {}

    @Get('/:id')
    getWorkerById(@Param('id') id: string): object {
        return this.workersService.getWorkerById(id);
    }
    @Get()
    GetWorkerByNameandId(@Query('name')name: string,
    @Query('id') id: string): object {
        return this.workersService.getWorkersByNameAndId(name, id);
    }

    @Get('/allServices/:id')
    GetAllServices(@Param('id') id: string):object {
        return this.workersService.getAllServices(id);    
    }
    
    @Post('/addWorker')
    addWorker(@Body() data:any): string {
        return this.workersService.addWorker(data);
    }

    @Post('createWorker')
    @UsePipes(new ValidationPipe)
    async createWorker(@Body() myobj:WorkerDTO):Promise<WorkerDTO>{
        console.log(myobj.name);
        return this.workersService.createWorker(myobj);
    }
    
    



}