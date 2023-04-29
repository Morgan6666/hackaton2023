export declare abstract class ICategory<Entity> {
    abstract getCategories(): any;
    abstract getRoadMapInfoById(entity: Entity): any;
    abstract addEventsInfo(entity: Entity): any;
    abstract addRelaxInfo(entity: Entity): any;
    abstract addShopInfo(entity: Entity): any;
    abstract addAttractionInfo(entity: Entity): any;
    abstract checkCategoryExist(entity: Entity): any;
    abstract updateShopInfo(entity: Entity): any;
    abstract updateRelaxInfo(entity: Entity): any;
    abstract updateAttractionInfo(entity: Entity): any;
    abstract updateEventInfo(entity: Entity): any;
}
