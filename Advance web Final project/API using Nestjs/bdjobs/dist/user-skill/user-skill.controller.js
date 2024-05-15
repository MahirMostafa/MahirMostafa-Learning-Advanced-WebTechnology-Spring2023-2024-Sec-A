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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSkillController = void 0;
const common_1 = require("@nestjs/common");
const user_skill_service_1 = require("./user-skill.service");
const create_user_skill_dto_1 = require("./dto/create-user-skill.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let UserSkillController = class UserSkillController {
    constructor(userSkillService) {
        this.userSkillService = userSkillService;
    }
    create(createUserSkillDto) {
        return this.userSkillService.create(createUserSkillDto);
    }
    findAll(userId) {
        return this.userSkillService.findUsersSkills(userId);
    }
};
exports.UserSkillController = UserSkillController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_skill_dto_1.CreateUserSkillDto]),
    __metadata("design:returntype", void 0)
], UserSkillController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtGuard),
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSkillController.prototype, "findAll", null);
exports.UserSkillController = UserSkillController = __decorate([
    (0, common_1.Controller)('user-skill'),
    __metadata("design:paramtypes", [user_skill_service_1.UserSkillService])
], UserSkillController);
//# sourceMappingURL=user-skill.controller.js.map