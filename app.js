"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// to make this work when working with typescript
// you have to install this: npm install --save-dev @types/node
// this lets typescript know nodejs specific commands and how to translate them into javascript
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const activities_1 = __importDefault(require("./routes/activities"));
// this lets typescript know express, its functions, classes, objects and it helps intellisense
// npm install --save-dev @types/express
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(activities_1.default);
app.listen(3000);
