import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class DeveloperDTO {
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  level: string;
}

export class PartialDeveloperDTO extends PartialType(DeveloperDTO) {}
