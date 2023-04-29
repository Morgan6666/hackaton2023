import { IEntity } from "domain/shared/IEntity";



export class ShopModel implements IEntity {
    name: string;
    description: string;
    categoryName: string;
    time_start: string;
    time_end: string;
    user_id: number

    constructor
    (
        name: string,
        description: string,
        categoryName: string,
        time_start: string,
        time_end: string,
        user_id: number
    ){
        this.name = name;
        this.description = description;
        this.categoryName = categoryName;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof ShopModel)) return false;
        return this.name === entity.name;
      }
    
}