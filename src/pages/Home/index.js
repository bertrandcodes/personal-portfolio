"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var is_js_1 = __importDefault(require("is_js"));
var react_router_dom_1 = require("react-router-dom");
var _components_1 = require("@components");
var Home = function () { return (react_1.default.createElement("div", { className: "main" },
    react_1.default.createElement(_components_1.SeoData, { title: "Home | Bertrand Shao", name: "description", content: "Begin your journey here. Find out about the latest creative web projects I've been working on. Try out some cool applications." }),
    react_1.default.createElement("div", { className: "background-div" },
        react_1.default.createElement("div", { className: "overlay" }),
        is_js_1.default.mobile() ? (react_1.default.createElement("img", { className: "background-image", src: "mountainlake.jpg", alt: "mountains and lake" })) : (react_1.default.createElement("video", { className: "home-video", autoPlay: true, loop: true, muted: true },
            react_1.default.createElement("source", { src: "code.mp4", type: "video/mp4" }),
            react_1.default.createElement("img", { className: "background-image", src: "mountainlake.jpg", alt: "mountains and lake" }))),
        react_1.default.createElement("div", { className: "home-body" },
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "my-face", to: "/about" }),
            react_1.default.createElement("div", { className: "about-me" },
                react_1.default.createElement("p", { className: "line-1 anim-typewriter" }, "Welcome! My name is Bertrand Shao"),
                react_1.default.createElement("div", { className: "experiences" }, "and I develop web experiences.")),
            react_1.default.createElement("div", { className: "button_body" },
                react_1.default.createElement(react_router_dom_1.NavLink, { className: "button", to: "/about" },
                    react_1.default.createElement("div", { className: "button__text" }, "Enter."),
                    react_1.default.createElement("div", { className: "button__wrapper" },
                        react_1.default.createElement("div", { className: "button__arrow" }),
                        react_1.default.createElement("div", { className: "button__border-circle" }),
                        react_1.default.createElement("div", { className: "button__mask-circle" },
                            react_1.default.createElement("div", { className: "button__small-circle" }))))))))); };
exports.default = Home;
