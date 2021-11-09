#! /usr/bin/env node

const fs = require('fs')

const prettierConfig = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}

fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2))
process.exit(0)
