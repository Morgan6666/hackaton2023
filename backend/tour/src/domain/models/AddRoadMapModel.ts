import { IEntity } from "domain/shared/IEntity";


export class AddRoadMapModel implements IEntity {
    events_id: number;
    shop_id: number;
    user_id: number;
    relax_id: number;
    attractions_id: number;

    constructor(
        events_id: number,
        shop_id: number,
        user_id: number,
        relax_id: number,
        attractions_id: number
    ){
        this.events_id = events_id;
        this.shop_id = shop_id;
        this.user_id = user_id;
        this.relax_id = relax_id,
        this.attractions_id = attractions_id;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof AddRoadMapModel)) return false;
        return this.user_id === entity.user_id;
      }
    
}