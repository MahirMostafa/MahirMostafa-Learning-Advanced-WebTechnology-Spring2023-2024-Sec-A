import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { EditProfileDto } from './dto/editprofile.dto';
export declare class ProfileService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    getUserProfile(userid: number): Promise<User>;
    editUserProfile(id: number, editProfileDto: EditProfileDto): Promise<User>;
}
