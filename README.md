# A BJCP Style Viewer 🍺

Wherein I try to teach myself some **React** and **TypeScript** by hacking
together a tiny web app for viewing the [BJCP](https://www.bjcp.org/)
**2021 style guidelines** ([PDF](https://www.bjcp.org/download/2021_Guidelines_Beer.pdf)
or [.docx](https://www.bjcp.org/download/2021_Guidelines_Beer.docx)).

Original BJCP style XML imported from <https://github.com/meanphil/bjcp-guidelines-2015>


## Run it

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open <http://localhost:3000> to view it in the browser.


### `npm test`

Runs the tests like a boss.


### `npm run build`

Builds the app for production to the `build` folder.


## Generating the runtime JSON

```sh
node src/bjcp/bjcp-xml-to-json.js
```

Should output 2 files:

- `bjcp-styleguide.json`
- `bjcp-styleguide-flattened.json`

But this will get run as part of `npm start` so you shouldn't need to do this.
