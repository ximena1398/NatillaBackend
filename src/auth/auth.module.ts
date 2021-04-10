import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

@Module({  
    imports: [    ...,    
        PassportModule.register({      
            defaultStrategy: 'jwt',      
            property: 'user',      
            session: false,    
        }),    ...  
    ],  
    controllers: [AuthController],  
    providers: [AuthService, JwtStrategy],  
    exports: [PassportModule],
})
export class AuthModule {}