
const { RuleTester } = require('@typescript-eslint/rule-tester');
const test = require('node:test');
const rule = require('../lib/lint-rule.js');

RuleTester.afterAll = test.after;
RuleTester.describe = test.describe;
RuleTester.it = test.it;
RuleTester.itOnly = test.it.only;

const ruleTester = new RuleTester();
ruleTester.run('lint-rule', rule, {
  valid: [],
  invalid: [
    {
      filename: '../test.ts',
      code: 'const a = 1;',
      errors: [
        {
          line: 1
        }
      ]
    }
  ]
})
