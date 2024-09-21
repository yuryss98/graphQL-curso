import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { db } from '../../../db';
import { generateId } from '../../../utils/generate-id';
import { User } from './user.type';
import { Product } from '../product/product.type';
import { UserInput } from './user.input';

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => [Product])
  products(@Root() user: User) {
    return db.productsDB.filter(product => product.userId === user.id)
  }

  @Query(() => [User])
  users() {
    return db.usersDB
  }

  @Query(() => User)
  user(@Arg('id') id: number) {
    return db.usersDB.find((user) => user.id === id)
  }

  @Mutation(() => User)
  createUser(@Arg('newUser') newUser: UserInput) {
    const userFound = db.usersDB.find(user => user.name === newUser.name)
    if (userFound) {
      throw new Error('User already exists')
    }

    const user = {
      name: newUser.name,
      id: generateId(),
    };

    db.usersDB.push(user);

    return user;
  }
}