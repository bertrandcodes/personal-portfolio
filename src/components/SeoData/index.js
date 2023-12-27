"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = require("react-helmet");
var SeoData = function (_a) {
    var title = _a.title, name = _a.name, content = _a.content;
    return (react_1.default.createElement(react_helmet_1.Helmet, null,
        react_1.default.createElement("title", null, title),
        react_1.default.createElement("meta", { name: name, content: content })));
};
exports.default = SeoData;
