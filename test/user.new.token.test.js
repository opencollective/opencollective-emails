const fs = require('fs');
const path = require('path');

const { builder } = require('@eymail/editor/lib/server');

const template = fs.readFileSync(
  path.join(__dirname, '../templates/user.new.token.tpl'),
  'utf8',
);

describe('user.new.token', () => {
  it('compiles and match snapshot', done => {
    builder.buildHtmlAsync(
      template,
      { loginLink: 'https://opencollective.com/login' },
      html => {
        expect(html).toMatchSnapshot();
        done();
      },
    );
  });
});
