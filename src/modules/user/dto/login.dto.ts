import { IsNotEmpty } from "class-validator";

export class loginUserDto {  
    @IsNotEmpty()  readonly username: string;
    @IsNotEmpty()  readonly password: string;
}