# Express Server

A small Node.js and Express server that serves a list of 30 top places to
visit in San Diego in two formats: a rendered HTML page and a JSON API.

**Deployed on Render:** https://my-express-server-vbyb.onrender.com/
(free tier - the first request after a while idle can take up to a minute)

## Endpoints

| Method | Route   | Response                                                     |
| ------ | ------- | ------------------------------------------------------------ |
| GET    | `/`     | HTML page listing each spot's name and description           |
| GET    | `/data` | JSON array of all spots, with name, description and location |

Each spot in `/data` looks like:

```json
{
  "name": "Go For A Run In The San Diego Zoo Safari Park",
  "description": "A half marathon on a trail running through the Safari Park...",
  "location": [33.09745, -116.99572]
}
```

## Run locally

```bash
npm install
npm start        # http://localhost:3000 (or $PORT)
npm test         # Mocha + Chai endpoint tests
```

## How it works

- `server/app.js` - builds the Express app: Morgan request logging, JSON body
  parsing, and the two routes. The HTML for `/` is generated from the same
  `data.json` the API returns.
- `server/index.js` - starts the server. It's kept separate from the app so
  the tests can import the app without opening a port.
- `server/data.json` - the list of spots.

## Built with

Node.js, Express, Morgan, Mocha, Chai
