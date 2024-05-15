"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProfileDto = void 0;
const class_validator_1 = require("class-validator");
class EditProfileDto {
}
exports.EditProfileDto = EditProfileDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Username must be string!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fill the Username' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fill the Email' }),
    (0, class_validator_1.Matches)((/^([a-z]{3,8})([0-9]{1,4})@((gmail|yahoo|hotmail)).com$/), { message: 'pattern not match..add 3 to 8 small character then 1 to 4 digit before @' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)("BD"),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fill the Phone Number' }),
    (0, class_validator_1.Matches)((/([01]|\+88)?\d{11}/), { message: 'invaid Phone Number!' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "phonenumber", void 0);
__decorate([
    (0, class_validator_1.IsISO8601)({}, { message: 'Invalid Date of Birth!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fill the Date of Birth' }),
    __metadata("design:type", Date)
], EditProfileDto.prototype, "dob", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fill the Gender' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4, { message: 'Minimum length 4' }),
    (0, class_validator_1.MaxLength)(10, { message: 'Maximum length 10' }),
    (0, class_validator_1.Matches)(/[A-Za-z0-9@#$%&!]{8,10}/, { message: 'invalid Password!' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4, { message: 'Minimum length 4' }),
    (0, class_validator_1.MaxLength)(10, { message: 'Maximum length 10' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "confirmpassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fill the Type' }),
    __metadata("design:type", String)
], EditProfileDto.prototype, "type", void 0);
//# sourceMappingURL=editprofile.dto.js.map