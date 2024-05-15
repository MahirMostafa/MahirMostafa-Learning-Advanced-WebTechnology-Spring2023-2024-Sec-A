import { User } from "../../user/entities/user.entity";
import { Skill } from "../../skill/entities/skill.entity";
export declare class UserSkill {
    id: number;
    user: User;
    skill: Skill;
}
