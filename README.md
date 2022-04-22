# Demo react cinema

## install

- clone project
- install dependencies
- install json-server

## start project

```bash
npm start
# or
yarn start
```

## start json-server api
```bash
cd ./src/data
json-server --watch ./cinema.json --port 5000
```

## api end point

```bash
http://localhost:5000/films?_expand=realisateur&_embed=roles
http://localhost:5000/roles?_expand=film&_expand=acteur
http://localhost:5000/films?_expand=realisateur&_embed=comments
```

### plugin ide vs-code

- [react snipet](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)