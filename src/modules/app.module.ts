import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from "../controllers/app.controller";
import { AppService } from "../services/app.service";
import { UserModule } from "./user.module";
import config from "../config";

@Module({
  imports: [UserModule, MongooseModule.forRoot(config.db.Uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
