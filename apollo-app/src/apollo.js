import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://movieql2.vercel.app/',
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
});

export default client;
