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
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Book_1 = require("../entity/Book");
const CreateBookInput_1 = require("../inputs/CreateBookInput");
const UpdateBookInput_1 = require("../inputs/UpdateBookInput");
let BookResolver = class BookResolver {
    books() {
        return Book_1.Book.find();
    }
    async createBook(data) {
        const book = Book_1.Book.create(data);
        await book.save();
        return book;
    }
    book(id) {
        return Book_1.Book.findOne({ where: { id } });
    }
    async updateBook(id, data) {
        const book = await Book_1.Book.findOne({ where: { id } });
        if (!book)
            throw new Error("Book not found!");
        // 삭제
        Object.assign(book, data);
        await book.save();
        return book;
    }
    async deleteBook(id) {
        const book = await Book_1.Book.findOne({ where: { id } });
        if (!book)
            throw new Error("Book not found!");
        await book.remove();
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Book_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "books", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Book_1.Book),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBookInput_1.CreateBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, type_graphql_1.Query)(() => Book_1.Book),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "book", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Book_1.Book),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBookInput_1.UpdateBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "updateBook", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBook", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BookResolver);
exports.BookResolver = BookResolver;
