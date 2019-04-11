const React = require('react');

const EyemailComponents = require('@eymail/components');

const Divider = EyemailComponents.divider;
const CenteredBlock = EyemailComponents.centeredBlock;
const Link = EyemailComponents.text.Link;
const Paragraph = EyemailComponents.text.Paragraph;

const Stylesheet = EyemailComponents.stylesheet;

class Footer extends React.Component {
  innerStyle() {
    return {
      padding: '24px 0 64px',
    };
  }

  helpStyle() {
    return {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '21px',
      letterSpacing: '-0.2px',
      textAlign: 'center',
    };
  }

  logoStyle() {
    return {
      textAlign: 'center',
    };
  }

  teamSignatureStyle() {
    const styles = Stylesheet.get();
    return {
      fontFamily: styles.fontFamily,
      color: styles.colors.darkGrey,
      fontSize: '14px',
      lineHeight: '21px',
      fontWeight: 500,
      letterSpacing: '-0.2px',
      textAlign: 'center',
    };
  }

  baselineStyle() {
    const styles = Stylesheet.get();
    return {
      fontFamily: styles.fontFamily,
      color: styles.colors.darkGrey,
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '18px',
      letterSpacing: '-0.2px',
      textAlign: 'center',
    };
  }

  noticeStyle() {
    const styles = Stylesheet.get();
    return {
      fontFamily: styles.fontFamily,
      color: styles.colors.lightGrey,
      fontSize: '12px',
      lineHeight: '17px',
      textAlign: 'center',
      fontWeight: 400,
    };
  }

  madeStyle() {
    const styles = Stylesheet.get();
    return {
      color: styles.colors.darkGrey,
      fontSize: '12px',
      lineHeight: '18px',
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
        <Divider.Line height={64} />

        <Paragraph style={this.helpStyle()}>
          If you have questions, follow us on{' '}
          <Link color="#1f87ff" href="https://twitter.com/opencollect">
            Twitter
          </Link>
          , join our{' '}
          <Link color="#1f87ff" href="https://slack.opencollective.com">
            Slack
          </Link>{' '}
          or check our{' '}
          <Link color="#1f87ff" href="http://docs.opencollective.com/">
            documentation
          </Link>
          . We&apos;re here to help!
        </Paragraph>

        <Divider height={35} />

        <CenteredBlock width="192">
          <table>
            <tr>
              <td style={{ padding: '5px' }}>
                <a href="https://medium.com/open-collective">
                  <img
                    width="38"
                    height="38"
                    alt=""
                    src="https://res.cloudinary.com/opencollective/image/upload/v1554473675/email/icon-medium.png"
                  />
                </a>
              </td>
              <td style={{ padding: '5px' }}>
                <a href="https://twitter.com/opencollect">
                  <img
                    width="38"
                    height="38"
                    alt=""
                    src="https://res.cloudinary.com/opencollective/image/upload/v1554473675/email/icon-twitter.png"
                  />
                </a>
              </td>
              <td style={{ padding: '5px' }}>
                <a href="https://github.com/opencollective">
                  <img
                    width="38"
                    height="38"
                    alt=""
                    src="https://res.cloudinary.com/opencollective/image/upload/v1554473675/email/icon-github.png"
                  />
                </a>
              </td>
              <td style={{ padding: '5px' }}>
                <a href="https://slack.opencollective.com/">
                  <img
                    width="38"
                    height="38"
                    alt=""
                    src="https://res.cloudinary.com/opencollective/image/upload/v1554473675/email/icon-slack.png"
                  />
                </a>
              </td>
            </tr>
          </table>
        </CenteredBlock>

        <Divider height={35} />
        <div style={this.teamSignatureStyle()}>
          Cheers,
          <br />
          <strong>Open Collective Team</strong>
        </div>

        <Divider.Line height={76} />

        <div className="maxWidth" style={this.logoStyle()}>
          <img
            width="167"
            height="28"
            alt=""
            src="https://res.cloudinary.com/opencollective/image/upload/v1554471430/email/logo.png"
          />
        </div>

        <Divider height={35} />

        <div style={this.baselineStyle()}>
          An organization for your community,
          <br />
          transparent by design.
        </div>

        <Divider height={35} />

        <Paragraph style={this.noticeStyle()}>
          You are receiving this email because you signed up for
          opencollective.com. If you did not make this request, please contact
          &nbsp;
          <Link href="https://opencollective.com/">Open Collective</Link>
          &nbsp; support. Open Collective, Inc - 156 2nd St., San Francisco, CA
          94105
        </Paragraph>

        <Divider />

        <Paragraph style={this.madeStyle()}>
          Made with ❤️ in NYC, Berlin, Guadalajara, and South of France!
        </Paragraph>
      </CenteredBlock>
    );
  }
}

module.exports = Footer;
