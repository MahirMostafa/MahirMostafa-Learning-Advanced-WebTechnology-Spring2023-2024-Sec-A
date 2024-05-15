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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
        if (existingUser) {
            throw new common_2.HttpException('User already exists', common_2.HttpStatus.BAD_REQUEST);
        }
        let user = new user_entity_1.User();
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.gender = createUserDto.gender;
        user.phonenumber = createUserDto.phonenumber;
        user.role = "user";
        return this.userRepository.save(user);
    }
    async createAdmin(createAdminDto) {
        const existingUser = await this.userRepository.findOne({ where: { email: createAdminDto.email } });
        if (existingUser) {
            throw new common_2.HttpException('User already exists', common_2.HttpStatus.BAD_REQUEST);
        }
        let user = new user_entity_1.User();
        user.username = createAdminDto.username;
        user.gender = createAdminDto.gender;
        user.email = createAdminDto.email;
        user.password = createAdminDto.password;
        user.phonenumber = createAdminDto.phonenumber;
        user.salaryId = createAdminDto.salaryId;
        user.role = "admin";
        return this.userRepository.save(user);
    }
    findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new common_2.HttpException('User not found', common_2.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findOneWithEmail(email) {
        return await this.userRepository.findOne({ where: { email: email } });
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        user.username = updateUserDto.username;
        user.email = updateUserDto.email;
        user.gender = updateUserDto.gender;
        user.phonenumber = updateUserDto.phonenumber;
        user.password = updateUserDto.password;
        user.role = "user";
        user.id = id;
        return this.userRepository.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_2.HttpException('User not found', common_2.HttpStatus.NOT_FOUND);
        }
        return this.userRepository.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map