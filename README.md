# Open Collective Emails

## Foreword

If you see a step below that could be improved (or is outdated), please update the instructions. We rarely go through this process ourselves, so your fresh pair of eyes and your recent experience with it, makes you the best candidate to improve them for other users. Thank you!

## Development

### Prerequisite

1. Make sure you have Node.js version >= 11.

- We recommend using [nvm](https://github.com/creationix/nvm): `nvm install`.

2. Install `lerna` as a global package

- `npm install -g lerna`

### Install

We recommend cloning the repository in a folder dedicated to `opencollective` projects.

```
git clone git@github.com:opencollective/opencollective-emails.git opencollective/emails
cd opencollective/emails
lerna bootstrap
lerna link
```

### Start

Compile the client with:

```
npm run watch
```

Start the server with

```
npm run dev
```

## Contributing

Code style? Commit convention? Please check our [Contributing guidelines](CONTRIBUTING.md).

TL;DR: we use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/), we do like great commit messages and clean Git history.

## License

MIT
