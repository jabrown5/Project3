class AccountController < ApplicationController

	@username = ''

	get '/' do
		p session
		Account.all.to_json
		# login/registration page
		# erb :login


	end

	post '/' do
		# accept the params from a post
		# to create a user
		# hint: bcrypt
		@username = params[:username]
		@password = params[:password]
		@email = params[:email]


		# if does_user_exist?(@username) == true
		# 	@account_message = "User already exists."
		# 	# return erb :login_notice
		# end

		password_salt = BCrypt::Engine.generate_salt
		password_hash = BCrypt::Engine.hash_secret(@password, password_salt)

		@model = Account.new


		@model.username = @username
		@model.email = @email
		# @model.password_hash = password_hash
		# @model.password_salt = password_salt
    	@model.password_hash = password_hash
   		@model.password = password_salt
    	@model.save



		@account_message = "You have successfully registered and you are logged in :)"

		session[:user] = @username
		# @username = session[:user][:username]
		#binding.pry

		# erb :login_notice
   		p session
   		@model.to_json
	end



	post '/login' do

		puts session
		# params { :username, :password, :email }
		@username = params[:username]
		@password = params[:password]
		# accept params from a post
		# to check if a user exists
		# and if so, log them in
		if does_user_exist?(@username) == false
			@account_message = "User does not exist. Please try again or register a new account."
				return {:message => @account_message}.to_json

			#binding.pry
			# return erb :login_notice

		else

	        @model = Account.where(:username => @username).first
	        @password = BCrypt::Engine.hash_secret(params[:password], @model.password_hash)
	       
	        if @password == @model.password_hash
				@account_message = "Welcome back!"
				session[:user] = @model
				return {:message => @account_message, :key => 'catscatscatscats'}.to_json
			# if @model.password_hash == BCrypt::Engine.hash_secret(@password, @model.password_salt)
			else
				@account_message = "Sorry, you password did not match. Try again?"
				return {:message => @account_message}.to_json
			end
        

		end

		# session[:user] = @username
		# p session
		# { :message => 'New session enabled.'}.to_json


		# #binding.pry
		# @model = Account.where(:username => @username).first!
		# if @model.password_hash == BCrypt::Engine.hash_secret(@password, @model.password)
		# 	@account_message = "Welcome back!"
		# 	session[:user] = @model

		# 	@username = session[:user][:username]
		# 	#binding.pry

		# 	# return erb :login_notice
		# else
		# 	@account_message = "Sorry, you password did not match. Try again?"
		# 	# return erb :login_notice
		# end

   		@model.to_json


	end

	get '/logout' do
		# user peaces out
		# set session to nil
		# they will then need to login again
		p session
		session[:user] = nil
		# @username = nil
		redirect '/'
	end

end