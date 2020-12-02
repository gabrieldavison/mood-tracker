// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {


  return async context => {
    const userService = context.app.service('users');// get the users service
    const result = await userService.find({query: {username: context.data.username }});
    if (result.total > 0) { // throw an error because an account already exists.
      throw new Error('Username already taken');
    }

    return context;
  };
};
