import { IsEmail, MaxLength, Length, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { idType } from 'src/entities/idType.entity';
import { Column } from 'typeorm';

export class createUserDto {

    @IsNotEmpty()  username: string;
    @IsNotEmpty()  password: string;
    
}