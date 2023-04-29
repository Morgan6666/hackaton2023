import { CategoryModel } from "domain/models/CategoryModel";
import { BaseRepository } from "./BaseRepository";
import { ICategoryRepository } from "application/ports/ICategoryRepository";
import { Connection } from "typeorm";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
import { AddInfoModel } from "domain/models/AddInfoModel";
export declare class CategoriesRepository extends BaseRepository<CategoryModel> implements ICategoryRepository {
    connection: Connection;
    constructor(connection: Connection);
    getCategories(): Promise<any>;
    getRoadMapInfoById(entity: GetRoadMapInfoByIdModel): Promise<any>;
    addShopInfo(entity: AddInfoModel): Promise<any>;
    addAttractionInfo(entity: AddInfoModel): Promise<any>;
    addEventsInfo(entity: AddInfoModel): Promise<any>;
    addRelaxInfo(entity: AddInfoModel): Promise<any>;
    checkCategoryExist(entity: AddInfoModel): Promise<any>;
    updateShopInfo(entity: AddInfoModel): Promise<any>;
    updateAttractionInfo(entity: AddInfoModel): Promise<any>;
    updateRelaxInfo(entity: AddInfoModel): Promise<any>;
    updateEventInfo(entity: AddInfoModel): Promise<any>;
}
