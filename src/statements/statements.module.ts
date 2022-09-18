import { Module } from '@nestjs/common';
import { StatementsService } from './statements.service';
import { StatementsController } from './statements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Statement, StatementSchema } from './entities/statement.entity';

@Module({
  controllers: [StatementsController],
  providers: [StatementsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Statement.name,
        schema: StatementSchema,
      },
    ]),
  ],
})
export class StatementsModule {}
