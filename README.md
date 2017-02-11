## zeelib

A small lib of FP, Node, and DOM utils.

Changes:

* `0.2.0` -- *breaking* -- all functions now in top level
  * (No more `import { fp } from 'zeelib'` to use `zipWith`, just `import { zipWith } from 'zeelib'`).

Just a load of small utilities.

For now, documentation is mostly in the comments, or function names.
Sorry.

Usage:

```javascript
import z from 'zeelib'

z.open('http://zacanger.com')
if (z.isEven(process.argv[2])) // do things
z.camelCaseToLispCase('thisString')
```

Skimming the source or browsing in the Node REPL would probably be a good
way to find out what all is in here.

License: WTFPL
