import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('createnew')
  createNewToDo(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.todoService.createNewTodo(title, description);
  }

  @Put('update/:id')
  updateTodo(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('completed') completed: boolean,
  ) {
    console.log(id);
    return this.todoService.updateToDo(id, title, description, completed);
  }

  @Get('find/:id')
  getTodo(@Param('id') id: string) {
    console.log(id);
    if (id == 'all') return this.todoService.getAll();
    return this.todoService.getWithId(id);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id: string) {
    console.log(id);
    return this.todoService.deleteWithId(id);
  }
}
