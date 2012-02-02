var assert = require('assert'),
    uuid = require('../');

assert.equal(uuid(), '0');

Array(36).join().split(',').forEach(uuid);

assert.equal(uuid(), '01');
