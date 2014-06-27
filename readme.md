# Coventry Sports Awards Website 2014
[coventrysportsawards.co.uk/2014/](http://www.coventrysportsawards.co.uk/2014/)

## Description



## Dependencies

- NodeJS
  - Grunt
  - Bower
  - LESS CSS
- Ruby
  - Jekyll

## Instructions

### Setup Development Area

Install required dependencies:

```
bundle install
npm install grunt-cli bower
npm install
bower install
```

Run the development server:

```
grunt
```

Visit the url [localhost:3000](http://localhost:3000/) to view the site.

### Deploy to staging server

All commits and merges to the `stage` branch that pass our CI tests will be automaticly deployed to our production server.

### Deploy to production server

All commits and merges to the `master` branch that pass our CI tests will be automaticly deployed to our production server.

## Documentation

During the Alpha/Beta stages, due to constant changes, documentation will be mainly written in-line. With a dedicated section being created at the first major release.

### File Structure

```
|- _scripts               –  contains useful scripts to help with
|                            development of this project
|- _site                  –  compiled development files (not committed)
|- src
|  |- _includes           –  partial snippets of code to be used
|  |  |                      in layouts
|  |  |- bower_components -  component store of external library
|  |                         (not commited)
|  |- _layouts            –  page layouts
|  |- _posts              -  markdown files of news posts
|  |- media               -
|  |- static              -
|  |- {**/*.txt,html,md}  -  files for website
|- _config.yml            -  Jekyll config file
|- gruntfile.js
|- package.json
|- readme.md
```

## License

The source is opened for educational purposes. No rights are assigned to any downloads or forks.

## Copyright

Unless otherwise stated all code and content remain copyright &copy; Trinity Mirror. All rights reserved.
