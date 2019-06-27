# thvn-web-frontend

### Gulp workflow instructions (for writing Sass that automatically compiles to CSS)

#### Step 1

Install Gulp (unless you already have)

```
npm install gulp-cli -g
```

```
npm install gulp -D
```

#### Step 2

Install all dependencies of the project (in case you haven't done so since the commit that added a bunch of dependencies)

```
npm install
```

#### Step 3

Run Gulp in terminal

```
gulp
```

#### And you're done!

Now every time you make changes to any Sass files in the `src/style` folder (including new files) and hit save, Gulp automatically runs the task that compiles your Sass files to CSS and thereafter adds all necessary prefixes (to improve browser coverage), minifies the CSS files and stores them in the `public/style` folder.

_Note: For Gulp to "watch" your `src/style` folder (meaning it will automatically run the necessary task whenever you save changes to the Sass files), it needs to be running in your terminal. Basically don't close the terminal tab/window in which you executed `gulp` until you're done making changes._

---
