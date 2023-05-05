"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = exports.template = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' }
    }
};
var template = function (args) {
    return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)));
};
exports.template = template;
exports.Basic = exports.template.bind({});
exports.Basic.args = {
    size: "normal",
    allCaps: false // upper case all words
};
exports.AllCaps = exports.template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = exports.template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary',
};
exports.Tertiary = exports.template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
};
exports.customFontColor = exports.template.bind({});
exports.customFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
