const opencollectiveComponents = require('@opencollective/eymail-components');
const stylesheet = require('./opencollective.stylesheet');

module.exports = ({ builder }) => {
  // Register Additional components
  builder.registerAdditionalComponents('OC', opencollectiveComponents);

  // Register stylesheet
  builder.registerStylesheet(stylesheet);
};
