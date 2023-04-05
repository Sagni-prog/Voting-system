  ## About Validation
  
    Validating the inputs on the backend                              |
       
          name => is requires cant be empty, string, max length less than 255 characters    
          email => is requires cant be empty, string, max length less than 255 characters,  
                  no duplicate value allowed                                                
          password => is requires cant be empty, string, min length is 8 characters  
  
  ## About Login
  
  If user provide their email and password, look up the user with the provided
  email, if found then check the provided password against the password stored in the database,
  If the password is correct a unique token is created with the expiration date set
  and sent to the user before being encrypted and then encrypted and stored in the database, 
  the client stores the token on the browser (localstorage,cookie in this system the token is stored on the localstorage) and the token is attached on the http header and sent for every request made by the client ,
  
  if the user with the provided email is not authorized message is sent with the 401 status code
  After 3 login attempts the user is banned for 1 hour
  
  
