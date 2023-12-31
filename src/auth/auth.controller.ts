import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return await this.authService.signUp(CreateUserDto);
  }
}
