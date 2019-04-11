const fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const fontSize = '12px';
const headlineFontSize = '20px';

const colors = {
  white: '#ffffff',
  black: '#000000',
  darkGrey: '#4B4E52',
  darkerGrey: '#2A2C2E',
  lightGrey: '#969BA3',
  orange: '#ffaa33',
  blue: '#1f87ff',
};

const stylesheet = {
  fontFamily,
  fontSize,
  headlineFontSize,
  colors,

  maxWidth: '460',
  textWidth: '408',
  imageWidth: '360', // 400 (textWidth) - 20 (paddingLeft) - 20 (paddingRight)

  borderRadius: '2px',

  backgroundColor: '#FFF',
};

stylesheet.headline1 = {
  fontFamily: fontFamily,
  color: colors.darkerGrey,
  fontSize: headlineFontSize,
  lineHeight: '24px',
  fontWeight: 800,
  letterSpacing: '-0.2px',
  textAlign: 'center',
};

stylesheet.subheadline1 = {
  fontFamily: fontFamily,
  color: colors.lightGrey,
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: 500,
  letterSpacing: '-0.2px',
  textAlign: 'center',
};

stylesheet.headline2 = {
  fontFamily: fontFamily,
  color: colors.darkerGrey,
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  textAlign: 'center',
};

stylesheet.headline3 = {
  fontFamily: fontFamily,
  color: colors.darkGrey,
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '18px',
  letterSpacing: '-0.2px',
};

stylesheet.copy = {
  fontFamily: fontFamily,
  color: colors.darkGrey,
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  letterSpacing: '0.2px',
};

stylesheet.link = {
  color: colors.blue,
};

module.exports = stylesheet;
