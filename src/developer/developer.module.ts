import { Module } from '@nestjs/common';
import { DeveloperController } from './developer.controller';
import { DeveloperService } from './developer.service';
import { Developer, DeveloperSchema } from './schemas/developer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Developer.name, schema: DeveloperSchema }]),
  ],
  controllers: [DeveloperController],
  providers: [DeveloperService],
})
export class DeveloperModule {}
