var setTerminalTitle = require('./');
setTerminalTitle('Barnacle Burns');
setTerminalTitle('Bleeding Gums Murphy', { verbose: true });
setTerminalTitle('Quentin Jones', { verbose: true, logger: { info: function(){} } })
process.exit(0);