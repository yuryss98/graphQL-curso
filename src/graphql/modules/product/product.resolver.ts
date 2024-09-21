import { Resolver, Query } from 'type-graphql';
import { db } from '../../../db';
import { Product } from './product.type';

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products() {
    return db.productsDB;
  }
}

