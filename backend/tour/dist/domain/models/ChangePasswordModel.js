"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordModel = void 0;
class ChangePasswordModel {
    constructor(email, password, newPassword) {
        (this.email = email),
            (this.password = password),
            this.newPassword = newPassword;
    }
    equals(entity) {
        if (!(entity instanceof ChangePasswordModel))
            return false;
        return this.email === entity.email;
    }
}
exports.ChangePasswordModel = ChangePasswordModel;
//# sourceMappingURL=ChangePasswordModel.js.map