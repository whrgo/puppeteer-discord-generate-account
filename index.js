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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require("puppeteer");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, tempmailPage, email, registerAccountPage, AccountObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({ headless: false })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                tempmailPage = _a.sent();
                return [4 /*yield*/, tempmailPage.goto("https://temp-mail.org/ko/change")];
            case 3:
                _a.sent();
                email = "";
                _a.label = 4;
            case 4:
                if (!true) return [3 /*break*/, 6];
                return [4 /*yield*/, tempmailPage.$eval("#mail", function (v) { return v.value; })];
            case 5:
                email = _a.sent();
                if (email.startsWith("로딩")) {
                    return [3 /*break*/, 4];
                }
                else {
                    console.log(email);
                    return [3 /*break*/, 6];
                }
                return [3 /*break*/, 4];
            case 6: return [4 /*yield*/, browser.newPage()];
            case 7:
                registerAccountPage = _a.sent();
                return [4 /*yield*/, registerAccountPage.goto("https://discord.com/register")];
            case 8:
                _a.sent();
                AccountObject = {
                    email: registerAccountPage.$("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(1) > div > input"),
                    username: registerAccountPage.$("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(2) > div > input"),
                    password: registerAccountPage.$("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(3) > div > input"),
                    dob: registerAccountPage.$("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div.container-2UAUAG.marginTop20-2T8ZJx > div.inputs-3ELGTz"),
                    click: registerAccountPage.$("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(6) > button"),
                };
                // type email
                AccountObject.email.then(function (v) { return v.type(email); });
                return [4 /*yield*/, registerAccountPage.waitForTimeout(1000)];
            case 9:
                _a.sent();
                // type username
                AccountObject.username.then(function (v) { return v.type("sdklfsjldk"); });
                return [4 /*yield*/, registerAccountPage.waitForTimeout(1000)];
            case 10:
                _a.sent();
                // type password
                AccountObject.password.then(function (v) {
                    return v
                        .type("anysdfkljsdflksdjkl")
                        /* Typing date of birth */
                        .then(function () { return registerAccountPage.waitForTimeout(200); })
                        .then(function () { return registerAccountPage.keyboard.press("Tab"); })
                        .then(function () { return registerAccountPage.keyboard.down("1"); })
                        .then(function () { return registerAccountPage.keyboard.up("1"); })
                        .then(function () { return registerAccountPage.keyboard.press("Enter"); }) // end of pressing month
                        .then(function () { return registerAccountPage.waitForTimeout(200); })
                        .then(function () { return registerAccountPage.keyboard.down("1"); })
                        .then(function () { return registerAccountPage.keyboard.up("1"); })
                        .then(function () { return registerAccountPage.keyboard.press("Enter"); }) // end of pressing day
                        .then(function () { return registerAccountPage.waitForTimeout(200); })
                        .then(function () { return registerAccountPage.keyboard.down("9"); })
                        .then(function () { return registerAccountPage.keyboard.up("9"); })
                        .then(function () { return registerAccountPage.keyboard.down("9"); })
                        .then(function () { return registerAccountPage.keyboard.up("9"); })
                        .then(function () { return registerAccountPage.keyboard.press("Enter"); });
                } // end of pressing year
                );
                return [4 /*yield*/, registerAccountPage.waitForTimeout(1000)];
            case 11:
                _a.sent();
                // TODO: uuid값 파일로 저장
                registerAccountPage.keyboard.press("Enter");
                return [2 /*return*/];
        }
    });
}); })();
