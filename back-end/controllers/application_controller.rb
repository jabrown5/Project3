class ApplicationController < Sinatra::Base

	@account_message = ""
	@username = ''

	require 'bundler'
	Bundler.require

  # NEW - - - - - -
	register Sinatra::CrossOrigin
  # - - - - - - - -

	# set :public_folder, File.expand_path('../../public', __FILE__)
	# set :views, File.expand_path('../../views', __FILE__)

	ActiveRecord::Base.establish_connection(
		:adapter => 'mysql2',
		:database => 'pottyproject'
	)

  # NEW - - - - - -
	require 'sinatra'
	require 'sinatra/cross_origin'

	set :allow_origin, :any
	set :allow_methods, [:get, :post, :patch, :delete]

	options "*" do
		response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"

		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"

		200
  end

	# configure do
	# 	enable :cross_origin
	#   	enable :sessions, :logging
	#   	set :session_secret, "secret"
	# end

	configure do
		enable :cross_origin
	end
	# - - - - - - - -

	enable :sessions, :logging  # is all it takes to enable sessions


	not_found do
		# erb :not_found	#404 page
		{:message => "not found"}.to_json

	end

	# ENABLING THIS TEMPORARILY TO MAKE SURE THINGS ARE WORKING
	def does_user_exist?(username)
		user = Account.find_by(:username => username.to_s)
		if user
			return true
		else
			return false
		end
	end

	# ENABLING THIS TEMPORARILY TO MAKE SURE THINGS ARE WORKING
	def is_not_authenticated
		p session
		session[:user].nil?	#bool
	end

  # ENABLING THIS TEMPORARILY TO MAKE SURE THINGS ARE WORKING
	get '/' do
		# erb :home
		{:message => "home page"}.to_json
	end

end