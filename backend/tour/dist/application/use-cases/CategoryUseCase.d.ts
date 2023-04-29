import { ServiceResponse } from "infrastructure/utils/serviceResponse";
import { ICategoryRepository } from "application/ports/ICategoryRepository";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
import { AddInfoModel } from "domain/models/AddInfoModel";
export declare class CategoryUseCase {
    private readonly categoryRepo;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(categoryRepo: ICategoryRepository);
    getCategories(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getRoadMapInfoById(entity: GetRoadMapInfoByIdModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addShopInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addAttractionInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addEventsInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addRelaxInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateRelaxInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateShopInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateAttractionInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateEventsInfo(entity: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
}
