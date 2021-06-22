import { user} from '../entities/user.entity';
import {userDto} from '../modules/user/dto/user.dto';


export const toUserDto = (data: user): userDto => {  
    const { id, username, } = data;
    let UserDto: userDto = { id, username,   };
    return UserDto;
};