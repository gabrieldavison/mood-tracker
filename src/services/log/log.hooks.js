const { authenticate } = require('@feathersjs/authentication').hooks;

const addTimestamp = require('../../hooks/add-timestamp');

const addUser = require('../../hooks/add-user');

const addCalendarEvent = require('../../hooks/add-calendar-event');

const addReadableTimestamp = require('../../hooks/add-readable-timestamp');

const convertUserIdToObjectId = require('../../hooks/convert-user-id-to-object-id');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [convertUserIdToObjectId()],
    get: [],
    create: [
      addUser('userId'),
      addTimestamp('createdAt'),
      addReadableTimestamp('createdAtFormatted', 'createdAt'),
      addCalendarEvent()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
