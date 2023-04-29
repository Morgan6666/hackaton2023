import { Module } from "@nestjs/common";
import { ICategoryRepository } from "application/ports/ICategoryRepository";
import { CategoryUseCase } from "application/use-cases/CategoryUseCase";
import { CategoriesRepository } from "infrastructure/database/repositories/CategoryRepository";
import { CategoriesController } from "presentation/controllers/CategoryController";



@Module({
    imports: [],
    controllers: [CategoriesController],
    providers: [
        CategoryUseCase,
        {provide: ICategoryRepository, useClass: CategoriesRepository}
    ]
})
export class CategoryModule {}