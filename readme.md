# Zuwarten

- Impossibly simple
- Promise handler
- Written in Typescript

```js
import handle from "zuwarten"

const promise = fetch("https://github.com/joaquinuriel.png")
const [res, err] = await handle(promise)
if (err) return console.error(err);
// all good 
```