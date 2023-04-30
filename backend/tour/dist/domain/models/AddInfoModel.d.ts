import { IEntity } from "domain/shared/IEntity";
export declare class AddInfoModel implements IEntity {
    name?: string;
    description?: string;
    category_name?: string;
    time_start?: string;
    time_end?: string;
    user_id?: number;
    road_map_id?: number;
    city_name?: string;
    constructor(name?: string, description?: string, category_name?: string, time_start?: string, time_end?: string, user_id?: number, road_map_id?: number, city_name?: string);
    equals(entity: IEntity): boolean;
}
