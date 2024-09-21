import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  name: string;
}
