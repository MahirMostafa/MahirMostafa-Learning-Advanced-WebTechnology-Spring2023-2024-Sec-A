import { UserSkillService } from './user-skill.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
export declare class UserSkillController {
    private readonly userSkillService;
    constructor(userSkillService: UserSkillService);
    create(createUserSkillDto: CreateUserSkillDto): Promise<import("src/skill/entities/skill.entity").Skill>;
    findAll(userId: number): Promise<any[]>;
}
