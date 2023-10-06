import { Controller, Get } from '@nestjs/common';

@Controller('notes')
export class NotesController {
  @Get()
  findAll(): string {
    //TODO:
    return 'This action returns all cats';
  }
}
