import { IsEmail, MaxLength, Length, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { city } from 'src/entities/city.entity';
import { idType } from 'src/entities/idType.entity';

export class userDto {

    @IsNotEmpty()  username: string;
    @IsNotEmpty()  @IsEmail()  email: string;
    @IsNotEmpty()  id: string;

    @IsNotEmpty() @Length(2, 50)
    identificacion:string;
    
    @IsNotEmpty() @Length(2, 50)
    direccion: string;

    @IsNotEmpty() @Length(2, 50)
    celular: string;
    
    @IsNotEmpty() @IsOptional()
    @Length(5, 20)
	numerotarjeta: string;
    
    @IsNotEmpty() @Length(1)
    idType: idType;
    
    @IsNotEmpty() @Length(1)
    city: city;
}