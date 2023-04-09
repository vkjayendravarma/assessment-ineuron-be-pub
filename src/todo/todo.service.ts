import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from './todo.model';
import { log } from 'console';

@Injectable()
export class TodoService {
  constructor(@InjectModel('todo') private Todos: Model<ToDo>) {}

  // new todo

  async createNewTodo(title: string, description: string) {
    let newTodo = new this.Todos({
      title,
      description,
    });

    try {
      const queryResult = await newTodo.save();
      return queryResult;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async updateToDo(
    id: string,
    title: string,
    description: string,
    completed: boolean,
  ) {
    if (title == '') {
      throw new HttpException(
        'title should not be empty',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const queryResult = await this.Todos.findByIdAndUpdate(
        id,
        {
          title: title,
          description: description,
          completed: completed,
        },
        { new: true },
      );
      return queryResult;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getWithId(id: string) {
    try {
      let queryResult = await this.Todos.findById(id);
      return queryResult;
    } catch (error) {
      throw new HttpException('invalid id', HttpStatus.NOT_FOUND);
    }
  }

  async getAll() {
    let queryResult = await this.Todos.find();
    return queryResult;
  }

  async deleteWithId(id: string) {
    try {
      let queryResult = await this.Todos.findByIdAndDelete(id);
      log(queryResult);
      if (queryResult == null) {
        throw new HttpException('invalid id', HttpStatus.NOT_FOUND);
        return;
      }
      return queryResult;
    } catch (error) {
      throw new HttpException('invalid id', HttpStatus.NOT_FOUND);
    }
  }
}
