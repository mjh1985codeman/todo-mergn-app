//resolvers

//resolver for the welcome query
const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to the app!";
    },
  },
};

export default resolvers;
