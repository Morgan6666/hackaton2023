import { Injectable, Logger } from "@nestjs/common";
import { IQuestRepository } from "application/ports/IQuestRepository";
import { QuestModel } from "domain/models/QuestModel";
import { ServiceResponse } from "infrastructure/utils/serviceResponse";
import { EntityNotFoundError } from "typeorm";



@Injectable()
export class QuestUseCase {
  private readonly logger = new Logger(QuestUseCase.name);
  public serviceRes = new ServiceResponse();

  constructor(private readonly questRepo: IQuestRepository) {}


  async getQuestInfo(){
    this.logger.log(`Получаем информацию о доступных квестах`);
    const result = await this.questRepo.getQuestInfo();
    if(result){
      this.logger.log(`Информация получена`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.warn(`Информация не получена`);
      return this.serviceRes.internalServerError();
    }
  }


  async addUserQuest(entity: QuestModel){
    this.logger.log(`Добавляем пользователя в квест`);
    const result = await this.questRepo.addUserQuest(entity);
    this.logger.log(`Добявляем пользователя в таблицу ethaps`);
    const ethaps = await this.questRepo.addUserEthaps(entity);
    return this.serviceRes.successRes()
  }

  async getUserQuestInfo(entity: QuestModel){
    this.logger.log(`Получаем инфомацию о квесте`);
    const result = await this.questRepo.getUserQuestInfo(entity);
    if(result){
      this.logger.log(`Информация успешно получена`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.warn('Информация не получена');
      return this.serviceRes.internalServerError();
    }
  }

  async updateEthapsStatus(entity: QuestModel){
    this.logger.log(`Обновляем инфомрацию об этапе`);
    const result = await this.questRepo.updateEthapsStatus(entity);
    return this.serviceRes.successRes()
  }

}