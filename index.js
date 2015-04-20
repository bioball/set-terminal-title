/**
 * setTerminalTitle
 * Sets the terminal title for your process.
 *
 * @param  {String}  name          the name to set as your title
 * @param  {Object}  opts
 * @param  {Boolean} opts.verbose  toggle verbose mode.
 * @param  {Boolean} opts.logger   The logger to use. Needs to have an `info` method.
 * @return {Undefined}
 */
module.exports = function setTerminalTitle(name, opts){
  opts = opts || {};
  opts.logger = opts.logger || console;
  if (opts.verbose) {
    opts.logger.info("Setting terminal title as " + name);
  }
  process.stdout.write("\033]0;" + name + "\007");
};