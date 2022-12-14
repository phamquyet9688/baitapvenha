"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = void 0;
var User_1 = require("../Model/User");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, email, password, address, group, GPA, code) {
        var _this = _super.call(this, name, email, password, address) || this;
        _this.group = group;
        _this.GPA = GPA;
        _this.code = code;
        return _this;
    }
    Student.prototype.getGroup = function () {
        return this.group;
    };
    Student.prototype.getGPA = function () {
        return this.GPA;
    };
    Student.prototype.getCode = function () {
        return this.code;
    };
    return Student;
}(User_1.User));
exports.Student = Student;
