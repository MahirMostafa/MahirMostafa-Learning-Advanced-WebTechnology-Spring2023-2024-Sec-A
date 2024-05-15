"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const skill_module_1 = require("./skill/skill.module");
const user_skill_module_1 = require("./user-skill/user-skill.module");
const auth_module_1 = require("./auth/auth.module");
const salary_module_1 = require("./salary/salary.module");
const profile_module_1 = require("./profile/profile.module");
const authentication_middleware_1 = require("./authentication/authentication.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(authentication_middleware_1.AuthenticationMiddleware).forRoutes({ path: 'user/*', method: common_1.RequestMethod.ALL }, { path: 'profile/*', method: common_1.RequestMethod.ALL }, { path: 'skill/*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule.forRoot({
                        isGlobal: true,
                        envFilePath: ".local.env",
                    })],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    synchronize: configService.get('DB_SYNC'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    logging: true
                }),
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
            skill_module_1.SkillModule,
            user_skill_module_1.UserSkillModule,
            auth_module_1.AuthModule,
            salary_module_1.SalaryModule,
            profile_module_1.ProfileModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map