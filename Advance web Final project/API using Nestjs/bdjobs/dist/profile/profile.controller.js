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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const editprofile_dto_1 = require("../profile/dto/editprofile.dto");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("..//user/entities/user.entity");
const typeorm_2 = require("typeorm");
const profile_service_1 = require("./profile.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ProfileController = class ProfileController {
    constructor(userRepo, profileService) {
        this.userRepo = userRepo;
        this.profileService = profileService;
    }
    async getProfile(req) {
        const user = await this.profileService.getUserProfile(req.user.id);
        console.log(user);
        return { success: true, user };
    }
    async editProfile(editProfileDto, req) {
        const updatedUser = await this.profileService.editUserProfile(req.user.id, editProfileDto);
        return { success: true, user: updatedUser };
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile/edit'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editprofile_dto_1.EditProfileDto, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "editProfile", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtGuard),
    (0, common_1.Controller)('profile'),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map