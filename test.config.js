'use strict';

const jest = require('jest');
const  { execSync, spawnSync } = require('child_process');

process.on('unhandledRejection', (err) => {
  throw err;
});

/**
 * Get the arguments passed to the script.
 * The first two arguments are the path to Node.js and the path to the script.
 */
const args = process.argv.slice(2);

/**
 * Check if the current directory is a Git repository.
 * @returns {boolean} - True if in a Git repository, false otherwise.
 */
function isInGitRepository() {
  try {
    spawnSync('git', ['rev-parse', '--is-inside-work-tree'], { stdio: 'ignore', timeout: 5000 });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Check if the current directory is a Mercurial repository.
 * @returns {boolean} - True if in a Mercurial repository, false otherwise.
 */
function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Determine if the tests should run in watch mode.
 * Adds the appropriate watch flag to the arguments array.
 */
function determineWatchMode() {
  const isCI = Boolean(process.env.CI);
  const isWatchAll = args.includes('--watchAll');
  const isWatchAllFalse = args.includes('--watchAll=false');

  if (!isCI && !isWatchAll && !isWatchAllFalse) {
    const hasSourceControl = isInGitRepository() || isInMercurialRepository();
    args.push(hasSourceControl ? '--watch' : '--watchAll');
  }
}

determineWatchMode();
jest.run(args);
