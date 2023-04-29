"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const ICategoryRepository_1 = require("../../application/ports/ICategoryRepository");
const CategoryUseCase_1 = require("../../application/use-cases/CategoryUseCase");
const CategoryRepository_1 = require("../database/repositories/CategoryRepository");
const CategoryController_1 = require("../../presentation/controllers/CategoryController");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [CategoryController_1.CategoriesController],
        providers: [
            CategoryUseCase_1.CategoryUseCase,
            { provide: ICategoryRepository_1.ICategoryRepository, useClass: CategoryRepository_1.CategoriesRepository }
        ]
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map