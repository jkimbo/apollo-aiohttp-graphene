import random
import asyncio
import graphene


# class Patron(graphene.ObjectType):
#     id = graphene.ID()
#     name = graphene.String()
#     age = graphene.Int()

# class Query(graphene.ObjectType):
#     base = graphene.String()
#
#     patron = graphene.Field(Patron)
#
#     def resolve_patron(self, info):
#         return Patron(id=1, name='David', age=26)
#
# class RandomType(graphene.ObjectType):
#     seconds = graphene.Int()
#     random_int = graphene.Int()

class CreatePerson(graphene.Mutation):
    class Arguments:
        name = graphene.String()

    ok = graphene.Boolean()
    person = graphene.Field(lambda: Person)

    def mutate(self, info, name):
        print (name)
        person = Person(name=name)
        ok = True
        return CreatePerson(person=person, ok=ok)



class Person(graphene.ObjectType):
    name = graphene.String()
    age = graphene.Int()

class MyMutations(graphene.ObjectType):
    create_person = CreatePerson.Field()

# We must define a query for our schema
class Query(graphene.ObjectType):
    person = graphene.Field(Person)

schema = graphene.Schema(query=Query, mutation=MyMutations)

# class Subscription(graphene.ObjectType):
#     count_seconds = graphene.Float(up_to=graphene.Int())
#     random_int = graphene.Field(RandomType)
#
#     async def resolve_count_seconds(root, info, up_to=5):
#         for i in range(up_to):
#             print("YIELD SECOND", i)
#             yield i
#             await asyncio.sleep(1.)
#         yield up_to
#
#     async def resolve_random_int(root, info):
#         i = 0
#         while True:
#             yield RandomType(seconds=i, random_int=random.randint(0, 500))
#             await asyncio.sleep(1.)
#             i += 1


# schema = graphene.Schema(query=Query, subscription=Subscription)
