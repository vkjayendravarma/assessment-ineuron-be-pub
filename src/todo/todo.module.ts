import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoSchema } from './todo.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'todo', schema: ToDoSchema }])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
