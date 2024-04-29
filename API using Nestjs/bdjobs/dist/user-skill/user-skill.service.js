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
exports.UserSkillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_skill_entity_1 = require("./entities/user-skill.entity");
const user_entity_1 = require("../user/entities/user.entity");
const skill_entity_1 = require("../skill/entities/skill.entity");
let UserSkillService = class UserSkillService {
    constructor(userSkillRepository, userRepository, skillRepository) {
        this.userSkillRepository = userSkillRepository;
        this.userRepository = userRepository;
        this.skillRepository = skillRepository;
    }
    async create(createUserSkillDto) {
        const user = await this.userRepository.findOne({ where: { id: createUserSkillDto.userId } });
        const skill = await this.skillRepository.findOne({ where: { id: createUserSkillDto.skillId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${createUserSkillDto.userId} not found`);
        }
        if (!skill) {
            throw new common_1.NotFoundException(`Skill with ID ${createUserSkillDto.skillId} not found`);
        }
        const newUserSkill = this.userSkillRepository.create({
            user: user,
            skill: skill,
        });
        await this.userSkillRepository.save(newUserSkill);
        return skill;
    }
    async findUsersSkills(userId) {
        const userSkills = await this.userSkillRepository
            .createQueryBuilder("userSkill")
            .leftJoinAndSelect("userSkill.user", "user")
            .leftJoinAndSelect("userSkill.skill", "skill")
            .where("user.id = :userId", { userId })
            .getMany();
        return userSkills.map(userSkill => userSkill.skill);
    }
};
exports.UserSkillService = UserSkillService;
exports.UserSkillService = UserSkillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_skill_entity_1.UserSkill)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(skill_entity_1.Skill)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserSkillService);
//# sourceMappingURL=user-skill.service.js.map