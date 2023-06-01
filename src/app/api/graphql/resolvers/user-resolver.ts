import 'reflect-metadata';
import { User } from "../dtos/models/user-model";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateUserInput } from '../dtos/inputs/user-input';
import { Address } from '../dtos/models/address-model';

@Resolver(User)
export class UserResolver {
  private usersCollection: User[] = [];

  @Query(() => [User])
  async users() {
    return this.usersCollection;
  }

  @Query(() => User)
  async user(@Arg('id', () => String) id: string) {
    return this.usersCollection.find(user => user.id === id);
  }

  @Mutation(() => User)
  async createUser(@Arg('data', () => CreateUserInput) data: CreateUserInput) {
    console.log(data);

    const user = {
      id: data.id,
      name: data.name,
      email: data.email,
      mail: data.email,
      password: data.password,
      address: data.address,
      phone: data.phone,
      role: data.role
    }

    this.usersCollection.push(user);

    return user;
  }

  @FieldResolver(() => Address)
  async address(@Root() user: User) {
    console.log(user);
    return user.address;
  }
}