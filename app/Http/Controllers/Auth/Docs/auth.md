  ## About Validation
  
    Validating the inputs on the backend                              |
        |------------------------------------------------------------------------------------|
        |  name => is requires cant be empty, string, max length less than 255 characters    |
        |  email => is requires cant be empty, string, max length less than 255 characters,  |
        |          no duplicate value allowed                                                |
        |  password => is requires cant be empty, string, min length is 8 characters  
  
  ## About Registration
  
  if the user is sucrssfully registered a unique token is created and send to the       
  user before being encrypted and then encrypted and stored in the database,          
  and the token is attached on the http header and sent for every request made by the client 
  
  if the registration fails return error message else return newly creared 
  user with token  
  
