import { Injectable } from "@nestjs/common";
import { IQuest } from "./IQuest";
import { QuestModel } from "domain/models/QuestModel";



Injectable()
export abstract class IQuestRepository extends IQuest<QuestModel>{}
