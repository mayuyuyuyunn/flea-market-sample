import { User } from "src/entities/user.entity";
import { EntityRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, status } = createUserDto;
    const user = this.create({ username, password, status });

    await this.save(user)
    return user;
  }
}
