import { Field, ObjectType } from "type-graphql"
import { Product } from "../product/product.type"

@ObjectType()
export class User {
  @Field()
  id: number

  @Field()
  name: string

  @Field(() => [Product])
  products: Product[]
}