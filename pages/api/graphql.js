import { ApolloServer } from 'apollo-server-micro'
import resolvers from '../../graphql/resolvers'
import typeDefs from '../../graphql/schemas'
import Cors from 'micro-cors'

const cors = Cors({})

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: process.env.NODE_ENV !== 'production',
    context: ({ req }) => {
        return {
            headers: req.headers,
            token: req.headers.authorization,
        }
    },
})

const server = apolloServer.start()

export default cors(
    async function (req, res) {
        if (req.method === 'OPTIONS') {
            res.end()
            return false
        }
        await server
        await apolloServer.createHandler({
            path: '/api/graphql',
        })(req, res)
    }
)

export const config = {
    api: {
        bodyParser: false,
    }
}
