import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entity/User";
import { UserInput } from "../inputs/UserInput";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  userList() {
    return User.find();
  }
  @Query(() => User)
  userId(@Arg("id") id: number) {
    return User.findOne({ where: { id } });
  }
  @Mutation(() => User)
  async createUser(@Arg("inputs") inputs: UserInput) {
    console.log(inputs, "유저정보");
    const userInfor = await User.create(inputs as User).save();
    return userInfor;
  }
}
