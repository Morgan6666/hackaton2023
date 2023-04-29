import { AddInfoModel } from "domain/models/AddInfoModel";
export declare class AddInfoVM {
    name: string;
    description: string;
    category_name: string;
    time_start: string;
    time_end: string;
    user_id: number;
    static fromViewModel(vm: AddInfoVM): AddInfoModel;
}
