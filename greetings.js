const getFlags = require('./flags.js');
console.log(`${getFlags('--greeting')} ${getFlags('--name')}`)