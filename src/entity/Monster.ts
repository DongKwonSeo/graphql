import { User } from "./User";
import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
//
export class Monster extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column("int")
  level: number;

  @Field(() => Int)
  @Column("int")
  user_id: number;

  @ManyToOne(() => User, (user) => user.monsters)
  user: User;
}
