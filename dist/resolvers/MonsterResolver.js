"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterResolver = exports.InputMonster = void 0;
const type_graphql_1 = require("type-graphql");
const Monster_1 = require("../entity/Monster");
let InputMonster = class InputMonster {
    user_id;
    name;
    level;
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], InputMonster.prototype, "user_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InputMonster.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], InputMonster.prototype, "level", void 0);
InputMonster = __decorate([
    (0, type_graphql_1.InputType)()
], InputMonster);
exports.InputMonster = InputMonster;
//
let InputTask = class InputTask {
    title;
    isComplete;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InputTask.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], InputTask.prototype, "isComplete", void 0);
InputTask = __decorate([
    (0, type_graphql_1.InputType)()
], InputTask);
let MonsterResolver = class MonsterResolver {
    async getMonsterList() {
        return Monster_1.Monster.find();
    }
    async getUserMonster() {
        return Monster_1.Monster.find();
    }
    async createMonter(inputs) {
        console.log(inputs, "inputs");
        // const makeMonster = await Monster.insert(inputs);
        const makeMonster = Monster_1.Monster.create(inputs).save();
        return makeMonster;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Monster_1.Monster]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MonsterResolver.prototype, "getMonsterList", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Monster_1.Monster]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MonsterResolver.prototype, "getUserMonster", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Monster_1.Monster),
    __param(0, (0, type_graphql_1.Arg)("inputs")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputMonster]),
    __metadata("design:returntype", Promise)
], MonsterResolver.prototype, "createMonter", null);
MonsterResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MonsterResolver);
exports.MonsterResolver = MonsterResolver;
