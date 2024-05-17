"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const userRoute = express_1.default.Router();
const courseRoute = express_1.default.Router();
app.use('/api/users', userRoute);
app.use('/api/courses', courseRoute);
userRoute.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({ success: true, message: "Success", data: user });
});
courseRoute.get('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({ success: true, message: "Success", data: course });
});
const logger = (req, res, next) => {
    console.log(req.method, req.url, req.hostname);
    next();
};
app.get("", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(SomeThing);
    }
    catch (err) {
        console.log(err);
        next(err);
        // res.status(400).json({
        //    success: false,
        //    message: "filed your function",
        //    data: null
        // })
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    // res.send("Hello World!");
    res.json({ "success": "success" });
});
app.all("*", (req, res) => {
    res.status(500).json({
        success: false,
        message: "Route is not Found",
    });
});
//global error handel 
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });
    }
});
exports.default = app;
