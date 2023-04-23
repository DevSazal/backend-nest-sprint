import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeveloperDocument = HydratedDocument<Developer>;

enum ELevel {
  junior = 'junior',
  senior = 'senior',
}

@Schema()
export class Developer {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ type: String, enum: ELevel, default: ELevel.junior })
  level: ELevel;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);
