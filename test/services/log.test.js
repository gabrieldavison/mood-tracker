const app = require('../../src/app');

describe('\'log\' service', () => {
  it('registered the service', () => {
    const service = app.service('log');
    expect(service).toBeTruthy();
  });
});
