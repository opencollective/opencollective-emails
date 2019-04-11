const merge = require('lodash/merge');

const React = require('react');
const PropTypes = require('prop-types');

const EyemailComponents = require('@eymail/components');

const BaseBlock = EyemailComponents.baseBlock;
const Link = EyemailComponents.text.Link;

const Stylesheet = EyemailComponents.stylesheet;

class Button extends React.Component {
  color() {
    const styles = Stylesheet.get();
    return this.props.color || styles.button.color;
  }

  backgroundColor() {
    const styles = Stylesheet.get();
    return this.props.backgroundColor || styles.button.backgroundColor;
  }

  outerStyle() {
    return {
      backgroundColor: this.backgroundColor(),
      borderRadius: this.props.borderRadius,
      border: this.props.border,
    };
  }

  innerStyle() {
    const styles = Stylesheet.get();
    return merge({}, styles.button, {
      color: this.color(),
      padding: this.props.padding,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      background: 'none',
    });
  }

  render() {
    return (
      <BaseBlock outerStyle={this.outerStyle()} innerStyle={this.innerStyle()}>
        {this.props.href && (
          <Link
            style={{ color: this.color(), textDecoration: 'none' }}
            href={this.props.href}
          >
            {this.props.children}
          </Link>
        )}
        {!this.props.href && this.props.children}
      </BaseBlock>
    );
  }
}

Button.propTypes = {
  href: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  padding: '12px',
  border: 'none',
  borderRadius: '100px',
};

module.exports = Button;
