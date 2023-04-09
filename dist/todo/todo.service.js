"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const console_1 = require("console");
let TodoService = class TodoService {
    constructor(Todos) {
        this.Todos = Todos;
    }
    async createNewTodo(title, description) {
        let newTodo = new this.Todos({
            title,
            description,
        });
        try {
            const queryResult = await newTodo.save();
            return queryResult;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateToDo(id, title, description, completed) {
        if (title == '') {
            throw new common_1.HttpException('title should not be empty', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const queryResult = await this.Todos.findByIdAndUpdate(id, {
                title: title,
                description: description,
                completed: completed,
            }, { new: true });
            return queryResult;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getWithId(id) {
        try {
            let queryResult = await this.Todos.findById(id);
            return queryResult;
        }
        catch (error) {
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getAll() {
        let queryResult = await this.Todos.find();
        return queryResult;
    }
    async deleteWithId(id) {
        try {
            let queryResult = await this.Todos.findByIdAndDelete(id);
            (0, console_1.log)(queryResult);
            if (queryResult == null) {
                throw new common_1.HttpException('invalid id', common_1.HttpStatus.NOT_FOUND);
                return;
            }
            return queryResult;
        }
        catch (error) {
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('todo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map