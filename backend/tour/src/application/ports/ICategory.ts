import { Injectable } from "@nestjs/common";



@Injectable()
export abstract class ICategory<Entity>{
    abstract getCategories();
    abstract getRoadMapInfoById(entity: Entity);
    abstract addEventsInfo(entity: Entity);
    abstract addRelaxInfo(entity: Entity);
    abstract addShopInfo(entity: Entity);
    abstract addAttractionInfo(entity: Entity);
    abstract checkCategoryExist(entity: Entity);
    abstract updateShopInfo(entity: Entity);
    abstract updateRelaxInfo(entity: Entity);
    abstract updateAttractionInfo(entity: Entity);
    abstract updateEventInfo(entity: Entity);
    abstract addRoadMap(entity: Entity);
    abstract getRelaxInfo();
    abstract getEventsInfo();
    abstract getShopInfo();
    abstract getAttractionInfo();
    
    
}