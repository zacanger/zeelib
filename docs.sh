#!/usr/bin/env bash
set -e
if hash gsed 2>/dev/null; then
    _sed=$(which gsed)
else
    _sed=$(which sed)
fi

rm -f README.md
npx typedoc
cat docs/README.md docs/modules.md > README.md
$_sed -i 's/modules\.md//g' README.md
rm -rf docs/
git commit -am 'docs: generate [skip ci]'
