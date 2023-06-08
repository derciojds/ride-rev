import 'reflect-metadata';
import { Address, User } from "../dtos/models/user-model";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateUserInput } from '../dtos/inputs/create-user-input';
import { UserModel } from '../../db/models/user-model';
import { AddressModel } from '../../db/models/address-model';
import { UpdateUserInput } from '../dtos/inputs/update-user-input';

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users() {
    return await UserModel.find();
  }

  @Query(() => User)
  async user(@Arg('id', () => String) id: string) {
    const user: User | null = await UserModel.findById(id);

    if (!user)
      throw new Error('Server err: User not found');
    
    return user
  }

  @Mutation(() => User)
  async createUser(@Arg('data', () => CreateUserInput) data: CreateUserInput): Promise<User> {
    try {
      const createdAddress = await AddressModel.create(data.address)

      const createdUser = await UserModel.create({
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        password: data.password,
        address: createdAddress._id,
        phone: data.phone,
        role: data.role,
        postIds: data.postIds
      })

      const user = await this.user(createdUser._id);
      return user;

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('id', () => String) id: string, 
    @Arg('data', () => UpdateUserInput) data: UpdateUserInput
  ) {
      
    if (data.address) {
      const {address : { _id }} = await this.user(id) as any;
      await AddressModel.findByIdAndUpdate(_id, data.address, { new: true });
      delete data.address;
    }
    
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }
  
  @Mutation(() => User)
  async deleteUser(@Arg('id', () => String) id: string) {
    return await UserModel.findByIdAndDelete(id);
  }

  @FieldResolver(() => Address)
  async address(@Root() user: User): Promise<Address | undefined > {
    return user.address;
  }
}