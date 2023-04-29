import { IEntity } from "domain/shared/IEntity";

export class AddInfoModel implements IEntity {
    name?: string;
    description?: string;
    category_name?: string;
    time_start?: string;
    time_end?: string;
    user_id?: number;
    road_map_id?: number
    

    constructor(
        name?: string,
        description?: string,
        category_name?: string,
        time_start?: string,
        time_end?: string,
        user_id?: number,
        road_map_id?: number
    ){
        this.name = name;
        this.description = description;
        this.category_name = category_name;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
        this.road_map_id = road_map_id;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof AddInfoModel)) return false;
        return this.name === entity.name;
      }
    
}