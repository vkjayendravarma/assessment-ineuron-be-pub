/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ToDo } from './todo.model';
export declare class TodoService {
    private Todos;
    constructor(Todos: Model<ToDo>);
    createNewTodo(title: string, description: string): Promise<import("mongoose").Document<unknown, {}, ToDo> & Omit<ToDo & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateToDo(id: string, title: string, description: string, completed: boolean): Promise<import("mongoose").Document<unknown, {}, ToDo> & Omit<ToDo & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getWithId(id: string): Promise<import("mongoose").Document<unknown, {}, ToDo> & Omit<ToDo & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, ToDo> & Omit<ToDo & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    deleteWithId(id: string): Promise<import("mongoose").Document<unknown, {}, ToDo> & Omit<ToDo & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
