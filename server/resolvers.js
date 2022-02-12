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
    //deleteTodo Mutation
    deleteTodo: async (root, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "The Todo has been deleted.";
    },

    //updateTodo MUTATION
    updateTodo: async (root, args) => {
      const { id, title, detail, date } = args;
      //delcaring the updatedTodo variable as an object
      const updatedTodo = {};
      //checking to see if there was a title submitted in the updateTodo request
      //If there was no updated title submitted then we are using the original title
      //and declaring that as the "title" again.
      if (title != undefined) {
        updatedTodo.title = title;
      }
      //checking to see if there was new detail submitted in the updateTodo request
      //If there was no updated detail submitted then we are using the original detail
      //and declaring that as the "detail" again.
      if (detail != undefined) {
        updatedTodo.detail = detail;
      }
      //checking to see if there was new date submitted in the updateTodo request
      //If there was no updated date submitted then we are using the original date
      //and declaring that as the "date" again.
      if (date != undefined) {
        updatedTodo.date = date;
      }
      //passing in the updated Todo and saving that as the 'todo' variable.
      const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

      return todo;
    },
  },
};

export default resolvers;
