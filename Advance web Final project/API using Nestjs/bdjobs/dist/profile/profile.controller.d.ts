import { EditProfileDto } from '../profile/dto/editprofile.dto';
import { User } from '..//user/entities/user.entity';
import { Repository } from 'typeorm';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly userRepo;
    private readonly profileService;
    constructor(userRepo: Repository<User>, profileService: ProfileService);
    getProfile(req: any): Promise<{
        success: boolean;
        user: User;
    }>;
    editProfile(editProfileDto: EditProfileDto, req: any): Promise<{
        success: boolean;
        user: User;
    }>;
}
