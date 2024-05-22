import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDto, SignupDto,IResponse } from './dto';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}

    private logger = new Logger(AuthService.name)

    async signup(dto:SignupDto): Promise<User> {

        this.logger.log(dto)

        const candidate = await this.userService.findOne({email:dto.email})

        if(candidate){
            throw new UnauthorizedException("Такой пользователь с таким email уже существует!")
        }

        const user = await this.userService.create(dto)

        return user
    }
    
    async signin(dto:SigninDto): Promise<User> {

        const candidate = await this.userService.findOne({email:dto.email})
        
        if(!candidate){
            throw new UnauthorizedException("Такой пользователь с таким email не существует!")
        }

        const isPasswordCorrect = candidate.password === dto.password

        if(!isPasswordCorrect){
            throw new UnauthorizedException("Не верный пароль!")
        }

        return candidate
    }

    async checkAdminStatus(id:string) {

        const user = await this.userService.findOne({id})

        const isAdmin = user.role === "admin" ? true : false

        {
            isAdmin
        }
    }
}
