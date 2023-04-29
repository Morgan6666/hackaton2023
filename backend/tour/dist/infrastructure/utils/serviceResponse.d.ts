import { TServiceRes, TServiceResWithoutContent } from 'infrastructure/types/TServiceRes';
export declare class ServiceResponse {
    uniqueServiceErrorRes(success: boolean, code: number, message: string): TServiceResWithoutContent;
    uniqueServiceRes(success: boolean, code: number, message: string, content: object): TServiceRes;
    categoryDoesntExists(): TServiceResWithoutContent;
    uniqueSuccessRes(content: Object): TServiceRes;
    successRes(): TServiceResWithoutContent;
    userSessionNotFound(): TServiceResWithoutContent;
    usersSessionSuccessDelete(): TServiceRes;
    categoryGetError(): TServiceResWithoutContent;
    polisSuccessAdded(): TServiceResWithoutContent;
    passwordMismatch(): TServiceResWithoutContent;
    polisAlreadyExists(): TServiceResWithoutContent;
    documnetsNotFound(): TServiceResWithoutContent;
    documentsAddSuccessfully(): TServiceResWithoutContent;
    documentsAlreadyExists(): TServiceResWithoutContent;
    userNotFound(): TServiceResWithoutContent;
    passwordSuccessUpdate(): TServiceResWithoutContent;
    userAlreadyExist(): TServiceResWithoutContent;
    userSuccessfulyCreated(): TServiceResWithoutContent;
    userNotAuthorisated(): TServiceResWithoutContent;
    internalServerError(): TServiceResWithoutContent;
}
