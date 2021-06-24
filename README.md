# Library: TOP JS Project: The Old Version

This library app was made with Webpack & Firebase as a [TOP Project](https://theodinproject.com/courses/javascript/lessons/library). There was a fatal glitch with git that forced me to create a new repository. You can find the final product [here](https://github.com/savwiley/libraryProject). This repository remains open so that the history of his project remains.

## What Happened? What Glitch?

My internet, at the time of writing this, can be a little slow. Sometimes, if I leave the Git Bash terminal running while I'm no longer doing a project, I get an error when I attempt to push commits. The error often presents itself as `error: object file .git/objects/##/################ is empty` and so forth. This has happened to me at least four times in the past, and I've learned to use the [solution provided here on StackOverflow](https://stackoverflow.com/questions/11706215/how-to-fix-git-error-object-file-is-empty) to fix it. If not that, then it's a simple matter of using `git pull`.

When I went through my solution this time, however, I got a new error that proclaimed something like this:
```
broken link from    tree ####... 
              to    tree ####...
```

I found out that one of the broken "tree" links was my src/ folder. In an attempt to save it, I used some [inadvisable techniques](https://stackoverflow.com/questions/4770177/git-patch-does-not-apply/49737208#49737208) without consulting the TOP Discord Server, a fatal mistake. After more digging, I found entire companies who have hit similar errors and had no means to fix it aside from just starting over. So, that's what I did.

To make matters worse, I didn't back up my git files before I started trying to debug the issue due to over confidence. I lost a day's worth of work. It could have been *much* worse.

## What I Learned

- **Always, always, *always* back up your git files before debugging *anything*.**
- If you can't find a reputable solution regarding a problem you know nothing about, it's best to **ask for help** before taking a blind, costly leap.
- If you're not using git bash, **close it**. Actually, that goes for all programs that don't need to be running.
- Unrelated to the bug, I learned the value of refreshing yourself with old techniques. I've been using React for awhile now but this project was made with just Webpack. It was valuable to go back to Webpack and (nearly) start a new project with it.

## Credits

This site was made with [Webpack ^5.16.0](https://webpack.js.org/) & [Firebase ^8.6.2](https://firebase.google.com/).

Images are from [FontAwesome](https://fontawesome.com/).

Dancing Script font from [Google Fonts](https://fonts.google.com/).

## License

[MIT](https://github.com/savwiley/library-project/blob/master/LICENSE.txt)
