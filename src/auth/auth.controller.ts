import { Body, Controller, Get, Logger, Param, Post, Res } from '@nestjs/common';
import { SigninDto, SignupDto, IResponse } from './dto';
import { AuthService } from './auth.service';
import { CurrentUserId } from './decorators/userId.decorator';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private logger = new Logger(AuthController.name)

  @Post('/signup')
  async signup(
    @Body() body: SignupDto,
  ): Promise<User> {

    const user = await this.authService.signup(body);


    return user
  }

  @Post('/signin')
  async signin(
    @Body() body: SigninDto,
  ): Promise<User> {
    const user = await this.authService.signin(body);

    return user
  }


}
