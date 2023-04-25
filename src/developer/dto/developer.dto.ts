import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

enum ELevel {
  junior = 'junior',
  senior = 'senior',
}

export class DeveloperDTO {
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsEnum(ELevel)
  @IsOptional()
  level: ELevel;
}

export class PartialDeveloperDTO extends PartialType(DeveloperDTO) {}
