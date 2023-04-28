import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { EDeveloperLevel } from './../../core/enums/EDeveloper';

export class DeveloperDTO {
  @IsString()
  @Length(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsEnum(EDeveloperLevel)
  @IsOptional()
  level: EDeveloperLevel;
}

export class PartialDeveloperDTO extends PartialType(DeveloperDTO) {}
