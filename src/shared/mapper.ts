import { user} from '../entities/user.entity';
import {userDto} from '../modules/user/dto/user.dto';


export const toUserDto = (data: user): userDto => {  
    const { id, username, email,celular, identificacion, idType, city, numerotarjeta, direccion } = data;
    let UserDto: userDto = { id, username, email, celular, identificacion, idType, city, numerotarjeta, direccion,  };
    return UserDto;
};