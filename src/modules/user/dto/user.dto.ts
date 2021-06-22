import { IsEmail, MaxLength, Length, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { idType } from 'src/entities/idType.entity';
import { Column } from 'typeorm';

export class userDto {

    @IsNotEmpty()  username: string;
    @IsNotEmpty()  id: string;
}