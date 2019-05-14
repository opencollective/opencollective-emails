const React = require('react');
const PropTypes = require('prop-types');

const EyemailComponents = require('@eymail/components');

const BaseBlock = EyemailComponents.baseBlock;
const CenteredBlock = EyemailComponents.centeredBlock;

const Stylesheet = EyemailComponents.stylesheet;

class Content extends React.Component {
  outerStyle() {
    return {};
  }

  innerStyle() {
    return {
      paddingTop: this.props.padding,
      paddingBottom: this.props.padding,
    };
  }

  render() {
    const styles = Stylesheet.get();
    return (
      <BaseBlock innerStyle={{ paddingTop: '10px' }}>
        <CenteredBlock
          className="maxWidth"
          width={styles.maxWidth}
          outerStyle={this.outerStyle()}
          innerStyle={this.innerStyle()}
        >
          {this.props.children}
        </CenteredBlock>
      </BaseBlock>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

Content.defaultProps = {
  padding: '32px',
};

module.exports = Content;
