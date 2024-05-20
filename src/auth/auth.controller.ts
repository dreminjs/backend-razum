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
    @Res({ passthrough: true }) res,
  ): Promise<User> {

    this.logger.log(body)

    this.logger.log("HIT 2")

    const user = await this.authService.signup(body);

    res.cookie('userId', user.id, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return user
  }

  @Post('/signin')
  async signin(
    @Body() body: SigninDto,
    @Res({ passthrough: true }) res,
  ): Promise<User> {
    const user = await this.authService.signin(body);

    res.cookie('userId', user.id, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return user
  }


}
