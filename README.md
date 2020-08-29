# [Techheaven web](https://techheaven.org/)

## Requirements
- Node.js v8 or above
- Yarn ([read more](https://yarnpkg.com/en/docs/install))
- Firebase tools ([read more](https://firebase.google.com/docs/cli))   

## Instalation 

### Step 1 - Preprare your dev-stack (unless you already have)
Install [Gulp](https://gulpjs.com/)
```
npm install gulp-cli -g
```

Install [Firebase CLI](https://firebase.google.com/docs/cli#mac-linux-npm)
```
npm install firebase-tools -g
```

### Step 2 - Project dependencies
Install all dependencies of the project
```
yarn
```

It should you call every time you pull new version of app from GitHub.  

### Step 3 - Build
```
gulp build
```
That's re-generate all compiled files in `public/style/` directory.

You can also call `gulp watch` to automatically re-generate files immediately
than you change any monitored files (all in `src/style` directory).

### Step 4 - Run app locally
```
firebase serve
```
Start's local server (usually at URL http://localhost:5000/) with app.

### Step 5 - Deploy app to server
```
firebase deploy
```
It can call only users with access to [Firebase `techheaven-general` project](https://console.firebase.google.com/project/techheaven-general).

Currently is deploy produced automactically by Travis CI. Just delivery new content do `master` branch on GitHub repository.
