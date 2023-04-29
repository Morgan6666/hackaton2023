import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
export declare class GetInfoByIdVM {
    id: number;
    user_id: number;
    static fromViewModel(vm: GetInfoByIdVM): GetRoadMapInfoByIdModel;
}
