import { Repository } from 'typeorm';
import { UserSkill } from './entities/user-skill.entity';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { User } from '../user/entities/user.entity';
import { Skill } from '../skill/entities/skill.entity';
export declare class UserSkillService {
    private userSkillRepository;
    private userRepository;
    private skillRepository;
    constructor(userSkillRepository: Repository<UserSkill>, userRepository: Repository<User>, skillRepository: Repository<Skill>);
    create(createUserSkillDto: CreateUserSkillDto): Promise<Skill>;
    findUsersSkills(userId: number): Promise<any[]>;
}
