import { Module } from "@nestjs/common";
import { WorkersController } from "./worker.controller";
import {WorkersService} from "./worker.service";

@Module({
    imports: [],
    controllers: [WorkersController],
    providers: [WorkersService]
})
export class WorkersModule {}