import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Product {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  userId: number
}