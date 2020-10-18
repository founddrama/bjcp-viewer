# A BJCP Style Viewer

Wherein I try to teach myself some **React** and **TypeScript** by hacking
together a mini web app for view BJCP beer styles.

BJCP styles imported from <https://github.com/meanphil/bjcp-guidelines-2015>


## Generating the runtime JSON

```sh
node src/bjcp/bjcp-xml-to-json.js
```

Should output 2 files:

- `2015-bjcp-styleguide.json`
- `2015-bjcp-styleguide-flattened.json`


## Run it

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open <http://localhost:3000> to view it in the browser.


### `npm test`

Would run tests if I'd bothered to write anyway. ¯\_(ツ)_/¯


### `npm run build`

Builds the app for production to the `build` folder.
