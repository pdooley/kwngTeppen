
# About the App

Application to manage time sheets

It is built with kW2.0, which is built on Angular 5.

It utilizes "Themeforest's" @Fuse template.

#About kw2.0:

• Is framework agnostic (plugin for Angular7 – currently developing a plugin for ReactJS, VueJS)

• Architected with Multiple Abstractions (State Management, Connectivity, Framework, Widget Library...)

• Critical debugging functionality (Builtin logging for State, Topic, widget creation)

• Error messaging explicit and concise(Masks framework ambiguous error handling)

• Concise Object Modeling of the “Modern Client” problem space (i.e. SPA, mobile).

• Apps can be described via Metadata (json files for Bootstrap, View, Model, Apis, Init)

• Creates “Meta-Applications” (json files load at runtime on startup – not at build time)

• kW2.0 is State System agnostic (plugins for kWState, currently developing a plugin for Redux)

• kW2.0 is Connectivity agnostic (plugins for kWConnect, Firebase)

• Architecture is loosely coupled – utilizes Pub/Sub Pattern for all activity.

• Individual JSON objects in View.json subscribe and publish to topics for all actions.

• Currently developing Metadata persistence via Ajax Apis(Allowing changes to occur instantly)

#@Fuse
Fuse is a template library provided on Themeforest.  It provides the side menu bars, Headers and a themed widget library based on Angular Material.

`/src/@fuse` contains all Fuse logic.

# The App
The purpose of kw2.0 is to minimize the amount of logic necessary to built a complex SPA.
All files required to build the app are templates that are replicated.  The will be auto generated at some point in the near future.

###src/dw
Contains the application implementation.  

###src/dw/state
Contains the state management logic.  Each folder represents a 'table'.

###src/dw/crud
Contains the pages for crud views of each 'table' - primarily for testing

###src/dw/page
Contains the pages fo the actual application.


#kW2.0 Core

The SPA domain has been modelled to simplify and accelerate development.

###kw
The core module of kW2.0. Contains pure javascript classes that model the SPA problem space. (State, Pub/Sub, Ajax... ).  

`/src/kw/class` contains all classes.

###kwBs
The core bootstrap module.  Contains pure javascript classes that model the bootstrap process for SPAs. (MetaData Loading, Debug settings)

###kwFb
The core google FireBase module.

`/src/kwFb/class` contains all classes.

###kwUi
The core Widget module. Contains pure javascript classes for all things related to DOM Elements.

`/src/kwUi/class` contains all classes.

###kwUiAgGrid
The core module for the Ag-Grid widget. 

`/src/kwUiAgGrid/class` contains all classes.

#kW2.0 Angular Plugins
###kWNg
The core Angular plugin. Implements Angular controllers/servers for all generic SPA state handling. 

###kwNgUi
The core Angular Widget plugin. Implements core Angular controllers for creating DOM elements.

###kwNgUiAgGrid
The core Angular Ag-Grid Widget plugin. Implements Angular logic for Ag-Grid interface.

###kwNgUiFuse
The core Angular @Fuse interface.  Code to allow dynamic creation of pages based on JSON metadata.


#MISC
###Install git
goto `https://gitforwindows.org/`

###Install nodejs
goto `https://nodejs.org/en/download/`

#Install Angular Cli. 
run `npm install -g @angular/cli`

###Install dependencies. 
run `npm install`

### Run locally - make sure node version is 8.12.0
run `ng s`

#### Node memory limit issue - increases memory to 4GB
run `export NODE_OPTIONS=--max_old_space_size=4096`

### Build Docker base image
run `./baseBuild.sh`

### Build Docker image
run `./build.sh`

### Run Docker image
run `./run.sh`

###debug app while in container
run `./debug.sh`

###node-saas problem
exit docker

run `npm rebuild node-sass --force`

run `./run.sh`

This should resolve it

###build release while in container
run `./release.sh`

###To clear all docker artifacts
run `./erase.sh`

###To view all docker artifacts
run `./view.sh`

###to rename files globally on linux (for me - I always forget)
run `rename s/oldname/newname/ *`

###to rename files globally on linux - recursive
run `shopt -s globstar`
run `rename s/old/new/ **`

### to see files in subdirectories
run `find . -name "*.html" -type f`

### to delete files in subdirectories
run `find . -name "*.html" -type f -delete`

### to setup atom

 `apm install atom-beautify prettier-atom  atom-transpose case-keep-replace change-case copy-path duplicate-line-or-selection editorconfig file-icons git-plus highlight-selected local-history project-manager related set-syntax sort-lines sublime-style-column-selection tab-foldername-index sync-settings toggle-quotes atom-wrap-in-tag atom-ternjs autoclose-html autocomplete-modules color-picker docblockr emmet emmet-jsx-css-modules es6-javascript js-hyperclick hyperclick pigments linter-eslint tree-view-copy-relative-path lodash-snippets language-babel react-es7-snippets atom-jest-snippets one-dark-ui dracula-theme atom-spotify2`

### Inotify increase
run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`

run `sudo sysctl -p`

###Switch between nodjs versions
run `npm install -g n`

run `find /your/target/path/ -type f -exec rename 's/special/regular/' '{}' \`

###build production version
run `ng build --prod`

###turn off auto import for intellij typescript
File | Settings | Editor | General | Auto Import
file | Settings | Editor | Code Stype | TypeScript | Imports
