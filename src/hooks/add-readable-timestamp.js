const Moment = require('moment');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (name = 'readableTimestamp', timeStampName = 'timestamp') => {
  return async context => {
    context.data[name] = Moment(context.data[timeStampName]).format("MMMM Do YYYY, h:mm:ss a'")
    return context;
  };
};
