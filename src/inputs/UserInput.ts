import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  age?: number;
}
