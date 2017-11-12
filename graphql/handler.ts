import { makeExecutableSchema } from 'graphql-tools'
import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda'
import lambdaPlayground from 'graphql-playground-middleware-lambda'

const typeDefs = `
type Query {
  hello: String!
}

schema {
  query: Query
}
`

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default graphqlLambda({ schema })
export const playground = lambdaPlayground({ endpoint: '/' })