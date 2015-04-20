# Set Terminal Title

Set the title of your terminal window.

## Example

```js
var setTerminalTitle = require('set-terminal-title');
setTerminalTitle('Wallaby Wallace', { verbose: true });
// => Setting terminal title as Wallaby Wallace
```

## Installation

```bash
npm install set-terminal-title
```

## Usage

Syntax is `setTerminalTitle(<name>, <opts>)`, where `opts` is an object.

## Options

### Verbose

Type: `Boolean`
Default: `false`

Will log out that you're setting the terminal title

### Logger

Type: `Object`
Default: `console`

The logger instance to use. Needs to have an `info` method.