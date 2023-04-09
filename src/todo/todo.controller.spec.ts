import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { getModelToken } from '@nestjs/mongoose';
import { ToDoSchema } from './todo.model';

describe('TodoController', () => {
  let controller: TodoController;
  let service: TodoService;

  let testData = {
    title: 'test_title',
    description: 'test_description',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        {
          provide: getModelToken('ToDoSchema'),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('createNewToDo', () => {
    it('should return a status of 200', () => {
      let responce = controller.createNewToDo(
        testData.title,
        testData.description,
      );
      // expect(service.createNewTodo).toHaveBeenCalled()
      console.log(responce);
    });
  });
});
