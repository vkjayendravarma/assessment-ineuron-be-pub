"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ToDoSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
});
//# sourceMappingURL=todo.model.js.map