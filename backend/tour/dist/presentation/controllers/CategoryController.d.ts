import { CategoryUseCase } from "application/use-cases/CategoryUseCase";
import { AddInfoModel } from "domain/models/AddInfoModel";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
export declare class CategoriesController {
    private readonly catUseCases;
    constructor(catUseCases: CategoryUseCase);
    getAllCategories(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getRoadMapInfoById(data: GetRoadMapInfoByIdModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addShopInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addAttractions(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addRelaxInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addEventsInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateEventsInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateShopInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateAttraction(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateRalax(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
}
