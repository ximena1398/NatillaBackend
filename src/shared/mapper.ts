import { user} from '../entities/user.entity';
import {userDto} from '../modules/user/dto/user.dto';


export const toUserDto = (data: user): userDto => {  
    const { password, username, } = data;
    let UserDto: userDto = { password, username,   };
    return UserDto;
};