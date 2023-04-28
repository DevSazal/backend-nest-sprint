import { EDeveloperLevel } from './../../core/enums/EDeveloper';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeveloperDocument = HydratedDocument<Developer>;

@Schema()
export class Developer {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ type: String, enum: EDeveloperLevel, default: EDeveloperLevel.JUNIOR })
  level: EDeveloperLevel;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);
