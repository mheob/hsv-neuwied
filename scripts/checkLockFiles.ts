import { existsSync } from 'node:fs';

const checkLockFiles = (): string[] => {
  const uesYarnLockFileMessage = 'Please remove it and use only "pnpm-lock.yaml".';
  const invalidFileMessage = (lockFile: string): string =>
    `Invalid occurrence of "${lockFile}" file. ${uesYarnLockFileMessage}`;

  const errors: string[] = [];

  const npmLockFile = 'package-lock.json';
  existsSync(npmLockFile) && errors.push(invalidFileMessage(npmLockFile));

  const yarnLockFile = 'yarn.lock';
  existsSync(yarnLockFile) && errors.push(invalidFileMessage(yarnLockFile));

  const pnpmLockFile = 'pnpm-lock.yaml';
  !existsSync(pnpmLockFile) &&
    errors.push('The "pnpm-lock.yaml" does not exist or cannot be read. Please run "pnpm i".');

  return errors;
};

const invalidLockFileErrors = checkLockFiles();

if (invalidLockFileErrors.length > 0) {
  for (const error of invalidLockFileErrors) console.log(error);
  process.exit(1);
}

process.exit(0);
