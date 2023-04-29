import { CategoryModel } from "domain/models/CategoryModel";
import { BaseEntity, Entity, EntitySchema } from "typeorm";



export const CategoriesEntity = new EntitySchema<CategoryModel> ({
    name: "CategoryModel",
    tableName: "category",
    target: CategoryModel,
    columns: {
        ...BaseEntity,
        name: {
            type: String,
        
        
        }
}})