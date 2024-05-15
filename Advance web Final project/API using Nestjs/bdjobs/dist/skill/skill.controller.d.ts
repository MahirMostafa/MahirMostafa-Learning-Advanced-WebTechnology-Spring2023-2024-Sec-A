import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
export declare class SkillController {
    private readonly skillService;
    constructor(skillService: SkillService);
    create(createSkillDto: CreateSkillDto): Promise<import("src/skill/entities/skill.entity").Skill>;
    findAll(): Promise<import("src/skill/entities/skill.entity").Skill[]>;
    findOne(id: string): Promise<import("src/skill/entities/skill.entity").Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<import("src/skill/entities/skill.entity").Skill>;
    remove(id: string): Promise<import("src/skill/entities/skill.entity").Skill>;
}
