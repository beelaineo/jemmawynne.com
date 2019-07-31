## Dev Setup

- `npm run setup`
- :)

## Local Development

To work locally, start up both the local proxy server and the frontend react app:

- `yarn start:proxy` (or `cd proxy && yarn start`)
- Then, in another terminal:
- `yarn start:app` (or `cd proxy && yarn start`)

## Commits

General commit guidelines:

- `develop` will be our main working branch. It will be locked from pushes on Github. Instead, create new branches, even if short-lived. Prefix the branch names with `fix-`, `feat-` or something similar, i.e. `feat-mobile-nav` or `fix-product-styling-fixes`.
- Try to work incrementally. Break bigger features into smaller commits.

This project uses commitlint to enforce commit message formatting. The format is:

```
type(scope): subject

message body (optional)
```

The types are:

- `feat`: You added a new "feature". (Most of your commits will probably be `feat` commits). Essentially, any time you are adding functionality or content to the code. This could be:
  - Building out a new component
  - Implementing an existing component with a view
  - Making improvements to a component
  - Adding styles
- `fix`: You fixed bugs, made tweaks to styles, or other fixes.
- `chore`: You've done work that doesn't modify source files, such as making updates to configuration files or updating dependencies.
- `refactor`: You have made changes that aren't new features or bug fixes. This might be:
  - Rewriting a class component to use hooks
  - Moving/renaming files
- `perf`: You have made changes that improve performance
- `docs`: You updated the documentation

The scopes for this project are:

- `repo`: You made general repo changes, such as updating the typescript configuration.
- `sanity`: You made changes within `./sanity`
- `app`: You made changes within `./app`

Some examples:

- `fix(app): add margins to product detail`
- `feat(app): use target="_blank" for external urls`
- `feat(app): add Navigation component`
- `chore(sanity): update sanity version`
- `refactor(app): put all styled components in separate styled.ts files`

Commit messages should use the grammar **This commit will...** "X"
