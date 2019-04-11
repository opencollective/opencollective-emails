const merge = require('lodash/merge');

const React = require('react');
const PropTypes = require('prop-types');

const EyemailComponents = require('@eymail/components');

const Stylesheet = EyemailComponents.stylesheet;

class Data extends React.Component {
  rowStyle() {
    const styles = Stylesheet.get();
    return merge({}, styles.copy, {
      fontSize: '14px',
      lineHeight: '22px',
      textAlign: 'center',
      padding: this.props.padding,
    });
  }

  render() {
    return (
      <table width="100%">
        <tr>
          {Object.keys(this.props.data).map(key => (
            <th key={key} style={{ ...this.rowStyle(), fontWeight: 'bold' }}>
              {key}
            </th>
          ))}
        </tr>
        <tr>
          {Object.keys(this.props.data).map(key => (
            <td key={key} style={this.rowStyle()}>
              {this.props.data[key]}
            </td>
          ))}
        </tr>
      </table>
    );
  }
}

Data.propTypes = {
  padding: PropTypes.string,
  data: PropTypes.object.isRequired,
};

Data.defaultProps = {
  padding: '5px',
};

module.exports = Data;
