const React = require('react');
const PropTypes = require('prop-types');

class Actions extends React.Component {
  tdStyle() {
    const width = Math.round(100 / this.props.children.length);
    return {
      width: `${width}%`,
    };
  }

  render() {
    return (
      <table width="100%" cellPadding={this.props.padding}>
        <tr>
          {this.props.children.map((child, index) => (
            <td key={index} style={this.tdStyle()}>
              {child}
            </td>
          ))}
        </tr>
      </table>
    );
  }
}

Actions.propTypes = {
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Actions.defaultProps = {
  padding: '20',
};

module.exports = Actions;
