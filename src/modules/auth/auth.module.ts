import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { userModule } from "../user/user.module";
import { authController } from "./auth.controller";
import { authService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({  
    imports: [    
        userModule,    
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: process.env.SECRETKEY, signOptions: {
                expiresIn: process.env.EXPIRESIN,
            },
        }),
    ], 
    controllers: [authController],  
    providers: [authService, JwtStrategy],  
    exports: [
        PassportModule, 
        JwtModule
    ],
})
export class AuthModule {}