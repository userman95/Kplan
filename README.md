# README

# Requirements: 
  * Rails Version >= 5.2.4 (Command: rails -v)
  * Ruby Version >= 2.6 (Command: ruby -v)
  * Postgresql 10.8 (Command: psql -V)

# Install
After installing ruby, RubyGems are also installed. This means than you can use 'gem' package manager and also a bundler.
To Install the packages described in `./Gemfile` run `bundle install`. If an update is required , please do so.
Then go to the root folder of the app and run `npm install` or `yarn install` to install all packages that are configured in `package.json`.

# How to run
Change directory to the app's directory and then:

Run the server: `rails s`

Run webpack dev server to compile the React code. `./bin/webpack-dev-server`

and you are all set! 

# Important folders: 
* Routes that are described from rails: `config/routes.rb`
* Controllers decide what to do when the request reaches the demanded route and are located in: `app/controllers`.

