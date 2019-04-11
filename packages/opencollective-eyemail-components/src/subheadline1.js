const React = require('react');
const PropTypes = require('prop-types');

const EyemailComponents = require('@eymail/components');

const Stylesheet = EyemailComponents.stylesheet;

class SubHeadline1 extends React.Component {
  render() {
    const styles = Stylesheet.get();
    return (
      <div className="headline1" style={styles.subheadline1}>
        {this.props.children}
      </div>
    );
  }
}

SubHeadline1.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = SubHeadline1;
