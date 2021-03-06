const currentBranch = process.env.BRANCH;

const config = {
  branches: [
    'main',
    {
      name: 'next',
      prerelease: true,
    },
  ],
  debug: true,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  repositoryUrl: 'https://github.com/mheob/hsv-neuwied',
};

if (currentBranch === 'main') {
  config.plugins.push(
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ]
  );
}

module.exports = config;
