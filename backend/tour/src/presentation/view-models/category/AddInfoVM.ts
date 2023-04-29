// name: string;
//     description: string;
//     category_name: string;
//     time_start: string;
//     time_end: string;
//     user_id: number;

import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AddInfoModel } from "domain/models/AddInfoModel";


export class AddInfoVM {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Названик",
        example: "Детский мир"
    })
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Описание",
        example: "Хуета разная"
    })
    description: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Название категории",
        example: "Еда" 
    })
    category_name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Время начала",
        example: "2023-04-30 22:43:12.000000"
    })
    time_start: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Время окончания",
        example: "2023-05-30 22:43:12.000000"
    })
    time_end: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Id пользователя",
        example: "1"
    })
    user_id: number

    

    static fromViewModel(vm: AddInfoVM): AddInfoModel{
        return new AddInfoModel(vm.name,vm.description, vm.category_name,  vm.time_start, vm.time_end, vm.user_id);
        
    }



}