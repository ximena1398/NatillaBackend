import { IsEmail, MaxLength, Length, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class createUserDto {
    

    @IsNotEmpty()  username: string;
    @IsNotEmpty()  password: string;
    @IsNotEmpty()  @IsEmail()  email: string;

    @IsNotEmpty() @Length(2, 50)
    identificacion:string;
    
    @IsNotEmpty() @Length(2, 50)
    direccion: string;
    
    @IsNotEmpty() @IsOptional()
    @Length(5, 20)
	numerotarjeta: string;
    
    @IsNotEmpty() @Length(1)
    idType:string;
    
    @IsNotEmpty() @Length(1)
    city:string;
}