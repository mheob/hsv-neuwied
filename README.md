# Turborepo starter with pnpm

This is an official starter Turborepo.

## What's inside?

This Turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following
packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and
  `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which
package manager you wish to use with your monorepo (pnpm).

### Build

To build all apps and packages, run the following command:

```sh
cd my-Turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd my-Turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as
[Remote Caching](https://Turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts
across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with
Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the
following commands:

```sh
cd my-Turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your
[Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the
root of your Turborepo:

```sh
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://Turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://Turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://Turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://Turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://Turborepo.org/docs/reference/configuration)
- [CLI Usage](https://Turborepo.org/docs/reference/command-line-reference)

---

## Using Git Hooks

We use [simple-git-hooks](`https://github.com/toplenboren/simple-git-hooks`) for handling git hooks.

The hooks are defined in the `package.json`. The needed scripts inside the hooks should be stored in
the `scripts` folder to have a clean structure.
