import { Module } from '@nestjs/common';
import { DeveloperController } from './developer.controller';
import { DeveloperService } from './developer.service';
import { Developer, DeveloperSchema } from './schemas/developer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { InMemoryDeveloperService } from './in-memory-developer.service';

@Module({
  imports: [
    ...(process.env.NODE_ENV !== 'development'
      ? [MongooseModule.forFeature([{ name: Developer.name, schema: DeveloperSchema }])]
      : []),
  ],

  controllers: [DeveloperController],
  providers: [
    ...(process.env.NODE_ENV !== 'development'
      ? [DeveloperService]
      : [InMemoryDeveloperService]),
  ],
})
export class DeveloperModule {}
