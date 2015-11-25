get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index
end

post '/comment' do
  erb :_form, layout: false
end

post '/post_comment' do
	@comment = params[:comment]
	@author = params[:author]
	erb :_comment, layout: false
end