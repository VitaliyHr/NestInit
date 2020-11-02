import { Module } from '@nestjs/common';
import Controllers from "../controllers/index.controller";
import Services from "../services/index.service";

@Module({
  imports: [],
  controllers: Controllers,
  providers: Services,
})
export class AppModule {}
