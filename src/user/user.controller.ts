import { Controller, Get, Logger } from '@nestjs/common';
import { CurrentUserId } from 'src/auth/decorators/userId.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    private logger = new Logger(UserController.name)

    @Get("")
    async findOne(@CurrentUserId() id :string) {
        this.logger.log(id)
        return await this.userService.findOne({id})
    }

}
