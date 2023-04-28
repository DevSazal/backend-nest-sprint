import { EDeveloperLevel } from '../enums/EDeveloper';
import { IService } from './IService';
import { DeveloperDocument } from '../../developer/schemas/developer.schema';
import { DeveloperDTO, PartialDeveloperDTO } from 'src/developer/dto';
import { HttpException } from '@nestjs/common';

export interface IDeveloperService extends IService<DeveloperDTO, PartialDeveloperDTO> {
  developer?: IDeveloper;

  /**
   * create record
   */
  create(dto: DeveloperDTO): Promise<DeveloperDocument | object>;

  /**
   * get the full records
   */
  readBatch(): Promise<DeveloperDocument[] | object[]>;

  /**
   * get a single record
   */
  read(id: string): Promise<DeveloperDocument | object>;

  /**
   * get all the developers by level
   */
  filterByLevel(dto: PartialDeveloperDTO): Promise<DeveloperDocument[] | object[]>;

  /**
   * update a single record
   */
  update(id: string, dto: PartialDeveloperDTO): Promise<DeveloperDocument | object>;

  /**
   * delete a single record
   */
  delete(id: string): Promise<HttpException>;
}

export interface IDeveloper {
  readonly _id: string;
  name: string;
  email: string;
  level: EDeveloperLevel.JUNIOR | EDeveloperLevel.SENIOR;
}
