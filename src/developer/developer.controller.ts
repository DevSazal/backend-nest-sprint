import { Body, Controller, Inject, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { DeveloperDTO, PartialDeveloperDTO } from './dto';
import { DeveloperService } from './developer.service';
import { InMemoryDeveloperService } from './in-memory-developer.service';

@Controller('developers')
export class DeveloperController {
  constructor(
    @Inject(
      process.env.NODE_ENV === 'development'
        ? InMemoryDeveloperService
        : DeveloperService,
    )
    private readonly developerService: DeveloperService,
  ) {}

  @Post()
  postDeveloper(@Body() dto: DeveloperDTO): object {
    return this.developerService.create(dto);
  }

  @Post('filter')
  filterDevelopersByLevel(@Body() dto: PartialDeveloperDTO): object {
    return this.developerService.filterByLevel(dto);
  }

  @Get()
  getDevelopers(): object {
    return this.developerService.readBatch();
  }

  @Get(':id')
  getDeveloper(@Param('id') id: string): object {
    return this.developerService.read(id);
  }

  @Put(':id')
  putDeveloper(@Param('id') id: string, @Body() dto: PartialDeveloperDTO): object {
    return this.developerService.update(id, dto);
  }

  @Delete(':id')
  deleteDeveloper(@Param('id') id: string): object {
    return this.developerService.delete(id);
  }
}
