import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  Int,
} from "type-graphql";
import { Monster } from "../entity/Monster";
import { Task } from "../entity/Task";

@InputType()
export class InputMonster {
  @Field(() => Int)
  user_id: number;

  @Field()
  name: string;

  @Field(() => Int)
  level: number;
}
//
@InputType()
class InputTask {
  @Field()
  title: string;

  @Field(() => Boolean)
  isComplete: Boolean;
}

@Resolver()
export class MonsterResolver {
  @Query(() => [Monster])
  async getMonsterList() {
    return Monster.find();
  }
  @Query(() => [Monster])
  async getUserMonster() {
    
    return Monster.find();
  }

  @Mutation(() => Monster)
  async createMonter(@Arg("inputs") inputs: InputMonster) {
    console.log(inputs, "inputs");
    // const makeMonster = await Monster.insert(inputs);

    const makeMonster = Monster.create(inputs as Monster).save();

    return makeMonster;
  }
  //   @Mutation(() => Task)
  //   async createTask(
  //     @Arg("options", () => InputTask)
  //     options: InputTask
  //   ): Promise<Task> {
  //     //   const takeList = await Task.create(options).save();
  //     //   return takeList;
  //     // return Task.create({ title, isComplete: false }).save();
  //   }
}
