"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesEntity = void 0;
const CategoryModel_1 = require("../../../domain/models/CategoryModel");
const typeorm_1 = require("typeorm");
exports.CategoriesEntity = new typeorm_1.EntitySchema({
    name: "CategoryModel",
    tableName: "category",
    target: CategoryModel_1.CategoryModel,
    columns: Object.assign(Object.assign({}, typeorm_1.BaseEntity), { name: {
            type: String,
        } })
});
//# sourceMappingURL=CategoriesEntity.js.map