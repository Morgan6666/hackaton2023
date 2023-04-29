import { Injectable } from "@nestjs/common";
import { CategoryModel } from "domain/models/CategoryModel";
import { ICategory } from "./ICategory";



@Injectable()
export abstract class ICategoryRepository extends ICategory<CategoryModel> {}
