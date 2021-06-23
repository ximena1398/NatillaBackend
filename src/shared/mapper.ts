import { user} from '../entities/user.entity';
import {userDto} from '../modules/user/dto/user.dto';


export const toUserDto = (data: user): userDto => {  
    const { username,password } = data;
    let UserDto: userDto = { username,password   };
    return UserDto;
};