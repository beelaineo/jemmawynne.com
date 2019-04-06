## Dev Setup

- `npm run setup` to install dependencies for both packages
- Add the following to your VSCode settings:
  ```
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
   "javascript",
   "javascriptreact",
   {"language": "typescript", "autoFix": true },
   {"language": "typescriptreact", "autoFix": true }
  ],
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
  },
  "[typescript]": {
    "editor.formatOnSave": false,
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
  },
  ```
