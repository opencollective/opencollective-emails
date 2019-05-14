let opencollectiveComponents;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line node/no-unpublished-require
  require('@babel/register')({
    only: [/packages\/opencollective-eymail-components\/src/],
    presets: ['@babel/preset-react'],
  });
  opencollectiveComponents = require('@opencollective/eymail-components/src');
} else {
  opencollectiveComponents = require('@opencollective/eymail-components');
}

const stylesheet = require('./opencollective.stylesheet');

module.exports = ({ builder }) => {
  // Register Additional components
  builder.registerAdditionalComponents('OC', opencollectiveComponents);

  // Register stylesheet
  builder.registerStylesheet(stylesheet);
};
