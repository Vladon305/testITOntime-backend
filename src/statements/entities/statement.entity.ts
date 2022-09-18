import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Field } from 'src/fields/entities/field.entity';

export type StatementDocument = Statement & Document;

@Schema()
export class Statement {
  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Field' })
  fields: Field[];
}

export const StatementSchema = SchemaFactory.createForClass(Statement);
