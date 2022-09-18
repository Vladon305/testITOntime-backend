import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type FieldDocument = Field & Document;

export type IFieldType =
  | 'single-line'
  | 'multi-line'
  | 'checkbox'
  | 'select'
  | 'date-time';

export type IDefaultValue = string | boolean | IValueForSelect;
export type IValueForSelect = string[];

@Schema()
export class Field {
  @Prop()
  type: IFieldType;

  @Prop()
  required?: boolean;

  @Prop({ type: mongoose.Schema.Types.Mixed, ref: 'IDefaultValue' })
  defaultValue?: IDefaultValue;

  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const FieldSchema = SchemaFactory.createForClass(Field);
