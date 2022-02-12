import Todo from "./models/Todo.js";

//resolvers
const resolvers = {
  //**QUERY RESOLVERS**

  //resolver for the welcome Query
  Query: {
    welcome: () => {
      return "Welcome to the app!";
    },
    //resolver for the getTodos Query
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    //resolver for the getSingleTodo Query
    getSingleTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },

  //**MUTATION RESOLVERS**
  Mutation: {
    //addTodo Mutation
    addTodo: async (root, args) => {
      const newTodo = new Todo({
        title: args.title,
        detail: args.detail,
        date: args.date,
      });
      await newTodo.save();
      return newTodo;
    },
  },
};

export default resolvers;
