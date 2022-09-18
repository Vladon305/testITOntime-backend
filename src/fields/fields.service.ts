import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Statement,
  StatementDocument,
} from 'src/statements/entities/statement.entity';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { Field, FieldDocument } from './entities/field.entity';

@Injectable()
export class FieldsService {
  constructor(
    @InjectModel(Field.name) private readonly fieldModel: Model<FieldDocument>,
    @InjectModel(Statement.name)
    private statementModel: Model<StatementDocument>,
  ) {}

  async create(id: number, createFieldDto: CreateFieldDto) {
    const createdField = this.statementModel.findByIdAndUpdate(
      id,
      new this.fieldModel(createFieldDto),
    );
    return (await createdField).save();
  }

  findAll() {
    return this.fieldModel.find().exec();
  }

  findOne(id: number) {
    return this.fieldModel.findById(id);
  }

  update(id: number, updateFieldDto: UpdateFieldDto) {
    return this.fieldModel.findByIdAndUpdate(id, updateFieldDto);
  }

  remove(id: number) {
    return this.fieldModel.findByIdAndRemove(id);
  }
}
