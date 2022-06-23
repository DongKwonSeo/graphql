import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ApolloContextInterface } from "../context/ApolloContext";
import { User } from "../entity/User";
import { UserInput } from "../inputs/UserInput";

@Resolver()
export class UserResolver {
  @Authorized()
  @Query(() => [User])
  userList() {
    return User.find();
  }

  //   @Authorized()
  //   @Query(() => User)
  //   async userId(
  //     @Arg("id") id: number,
  //     @Ctx() apolloContext: ApolloContextInterface
  //   ): Promise<User | null> {
  //     console.log(apolloContext, "apolloContext");
  //     const user = await User.findOne({ where: { id } });
  //     return user;
  //   }
  @Mutation(() => User)
  async createUser(@Arg("inputs") inputs: UserInput) {
    console.log(inputs, "유저정보");
    const userInfor = await User.create(inputs as User).save();
    return userInfor;
  }
  //   로그인
  @Query(() => String, { nullable: true, description: "Find One User" })
  async signIn(
    @Arg("id") id: number,
    @Ctx() apolloContext: ApolloContextInterface
  ): Promise<String> {
    const user = await User.findOne({ where: { id } });
    const userInfor = {
      name: user?.name,
      id: user?.id,
      age: user?.age,
    };
    const token = await apolloContext.jwt.sign(
      userInfor,
      apolloContext.JWT_SECRET_KEY
    );
    console.log("dasdad1token", token.userInfor);
    return token;
  }
  //
  @Authorized()
  @Query(() => User, { nullable: true, description: "Find One User" })
  async user(
    @Arg("id") id: number,
    @Ctx() apolloContext: ApolloContextInterface
  ): Promise<User | null> {
    //
    console.log("kymykymym", apolloContext);
    return await User.findOne({ where: { id } });
  }
}
