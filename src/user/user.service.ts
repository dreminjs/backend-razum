import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { SignupDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(payload: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.prisma.user.findFirst({ where:payload });
  }

  async create(dto: SignupDto) {
    return this.prisma.user.create({
      data: {
        fullName: dto.fullname,
        email: dto.email,
        password: dto.password,
        phone: dto.phone,
        role: 'user',
      },
    });
  }
}
