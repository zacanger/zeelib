Right now, this is just a crapton of little functions all in one file.
One day, maybe something else. Probably not. Who knows.

For now, documentation is mostly in the comments. Sorry.

Usage (sorta):

```javascript
import { dom, fp, str, forNode, misc, util } from 'zeelib'

forNode.open('http://zacanger.co')

console.log(dom.getScrollBarWidth())

document.write(misc.transparentGif)

fp.identity('something')

if (util.isEven(2)) // do things

str.camelCaseToLispCase('thisString')
```

Skimming the source or browsing in the Node REPL would probably be a good
way to find out what all is in here.

License: WTFPL
