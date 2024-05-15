"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSkillModule = void 0;
const common_1 = require("@nestjs/common");
const user_skill_service_1 = require("./user-skill.service");
const user_skill_controller_1 = require("./user-skill.controller");
const user_skill_entity_1 = require("./entities/user-skill.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../user/user.module");
const skill_module_1 = require("../skill/skill.module");
const user_entity_1 = require("../user/entities/user.entity");
const skill_entity_1 = require("../skill/entities/skill.entity");
let UserSkillModule = class UserSkillModule {
};
exports.UserSkillModule = UserSkillModule;
exports.UserSkillModule = UserSkillModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_skill_entity_1.UserSkill, user_entity_1.User, skill_entity_1.Skill]), user_module_1.UserModule, skill_module_1.SkillModule],
        controllers: [user_skill_controller_1.UserSkillController],
        providers: [user_skill_service_1.UserSkillService],
    })
], UserSkillModule);
//# sourceMappingURL=user-skill.module.js.map