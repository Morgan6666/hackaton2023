import { AddRoadMapModel } from "domain/models/AddRoadMapModel";
export declare class AddRoadMapVM {
    events_id: number;
    shop_id: number;
    user_id: number;
    relax_id: number;
    attractions_id: number;
    static fromViewModel(vm: AddRoadMapVM): AddRoadMapModel;
}
