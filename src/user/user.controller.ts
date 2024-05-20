import { Controller, Get } from '@nestjs/common';
import { CurrentUserId } from 'src/auth/decorators/userId.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get("")
    async findOne(@CurrentUserId() id :string) {
        return await this.userService.findOne({id})
    }

}
