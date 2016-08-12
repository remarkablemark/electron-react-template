# electron-react-template

A minimalist template for building [Electron](https://github.com/electron/electron) apps with [React](https://github.com/facebook/react).

If you are looking for something more complex, then check out [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

## Install

```sh
$ npm install
```

## Run

Run in production mode:
```sh
$ npm start
```

Run in development mode:
```sh
$ npm run dev
```

Directory structure:
```
.
├── ...
├── main.js           # initiates electron
└── app               # app directory
    ├── index.html    # entry html file
    ├── main.js       # entry javascript file
    ├── components    # react components
        └── ...
    └── build         # compiled files from webpack
        └── ...
```

## License

[MIT](https://github.com/remarkablemark/electron-react-template/blob/master/LICENSE)
