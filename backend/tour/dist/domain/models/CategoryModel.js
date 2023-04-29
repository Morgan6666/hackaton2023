"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
class CategoryModel {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    equals(entity) {
        if (!(entity instanceof CategoryModel))
            return false;
        return this.name === entity.name;
    }
}
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map