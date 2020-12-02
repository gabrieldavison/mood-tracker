const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const checkUsernameUnique = require('../../hooks/check-username-unique');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [hashPassword('password'), checkUsernameUnique()],
    update: [hashPassword('password'), authenticate('jwt'), checkUsernameUnique()],
    patch: [hashPassword('password'), authenticate('jwt'), checkUsernameUnique()],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};





// const { authenticate } = require('@feathersjs/authentication').hooks;

// module.exports = {
//   before: {
//     all: [ authenticate('jwt') ],
//     // all: [],
//     find: [],
//     get: [],
//     create: [],
//     update: [],
//     patch: [],
//     remove: []
//   },

//   after: {
//     all: [],
//     find: [],
//     get: [],
//     create: [],
//     update: [],
//     patch: [],
//     remove: []
//   },

//   error: {
//     all: [],
//     find: [],
//     get: [],
//     create: [],
//     update: [],
//     patch: [],
//     remove: []
//   }
// };
