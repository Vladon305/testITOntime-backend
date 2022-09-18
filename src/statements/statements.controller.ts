import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatementsService } from './statements.service';
import { CreateStatementDto } from './dto/create-statement.dto';
import { UpdateStatementDto } from './dto/update-statement.dto';

@Controller('statements')
export class StatementsController {
  constructor(private readonly statementsService: StatementsService) {}

  @Post()
  create(@Body() createStatementDto: CreateStatementDto) {
    return this.statementsService.create(createStatementDto);
  }

  @Get()
  findAll() {
    return this.statementsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStatementDto: UpdateStatementDto,
  ) {
    return this.statementsService.update(+id, updateStatementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statementsService.remove(+id);
  }
}
