"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//parser
app.use(express_1.default.json());
app.use(express_1.default.text());
const logger = (req, res, next) => {
    console.log(req.method, req.url, req.hostname);
    next();
};
app.get("", logger, (req, res) => {
    res.send("Hello World!");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    // res.send("Hello World!");
    res.json({ "success": "success" });
});
exports.default = app;
