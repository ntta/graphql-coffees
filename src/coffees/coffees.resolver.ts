import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee, CreateCoffeeInput } from 'src/graphql';

@Resolver()
export class CoffeesResolver {
  @Query()
  async coffees(): Promise<Coffee[]> {
    return [];
  }

  @Query('coffee')
  async findOne(@Args('id', ParseIntPipe) id: number): Promise<Coffee> {
    return null;
  }

  @Mutation('createCoffee')
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ): Promise<Coffee> {
    return null;
  }
}
