const React = require('react');

const EyemailComponents = require('@eymail/components');

const CenteredBlock = EyemailComponents.centeredBlock;

const Stylesheet = EyemailComponents.stylesheet;

class Header extends React.Component {
  innerStyle() {
    return {
      padding: '35px 0',
    };
  }

  symbolStyle() {
    return {
      textAlign: 'center',
    };
  }

  render() {
    const styles = Stylesheet.get();
    return (
      <CenteredBlock
        className="textWidth"
        width={styles.textWidth}
        innerStyle={this.innerStyle()}
      >
        <div className="maxWidth" style={this.symbolStyle()}>
          <img
            width="28"
            height="28"
            alt=""
            src="https://res.cloudinary.com/opencollective/image/upload/v1554471430/email/oc-symbol.png"
          />
        </div>
      </CenteredBlock>
    );
  }
}

module.exports = Header;
