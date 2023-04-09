import mongoose from 'mongoose';
export declare const ToDoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    completed: boolean;
    description?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    completed: boolean;
    description?: string;
}>> & Omit<mongoose.FlatRecord<{
    title: string;
    completed: boolean;
    description?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface ToDo {
    title: string;
    description: string;
    completed: boolean;
}
