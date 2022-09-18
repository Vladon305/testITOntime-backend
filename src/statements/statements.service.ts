import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStatementDto } from './dto/create-statement.dto';
import { UpdateStatementDto } from './dto/update-statement.dto';
import { Statement, StatementDocument } from './entities/statement.entity';

@Injectable()
export class StatementsService {
  constructor(
    @InjectModel(Statement.name)
    private statementModel: Model<StatementDocument>,
  ) {}

  create(createStatementDto: CreateStatementDto) {
    const createdStatement = new this.statementModel(createStatementDto);
    return createdStatement.save();
  }

  findAll() {
    return this.statementModel.find().exec();
  }

  update(id: number, updateStatementDto: UpdateStatementDto) {
    return this.statementModel.findByIdAndUpdate(id, updateStatementDto);
  }

  remove(id: number) {
    return this.statementModel.findByIdAndRemove(id);
  }
}
