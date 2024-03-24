import { Injectable } from "@nestjs/common";
import { WorkerDTO } from "./worker.dto";


@Injectable()
export class WorkersService {
    private workers = [];

    getWorkerById(id: string): object {
        return {message: "Your id is " + id};
    }

    getWorkersByNameAndId(name: string, id: string): object {
        return {message: "Your id is "+ name + " and your id is "+ id};
    }

    getAllServices(id: string): object {
        return {message: "ID of this service is : "+ id};
    }

    addWorker(data:any): string {
        return "Posted";
    }

    async createWorker(myobj:WorkerDTO):Promise<WorkerDTO>{
        return myobj;
    }

}