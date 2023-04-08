  ## AuthController
   Is the controller class where authentication logics dwells
   inside this class there is one method wich is login 
   login method is for user login
   
   first the input from the client side is validated 
   - 1. if the validation fails returns the validation error message with 400 status code
   - 2. else lookup the user of the provided email  
   - 3. if user with the provided email is not found the anuthorized error message with 401 
         status code is returned
   - 3. else if the user is found the provided password is checked against the users stored password,
   - 4. if the password does not matches the authorized error message is returned with 401 error message.
   - 5. if the password matches the token is generated with the users id attached to it expiratin date set and the plain text token is returned. on the client side this token is stored somewhere on the browser storage and attatched on the Authorization http header as a bearer for every http reaquest made, this helps the backend authorizes the incoming user then the token is encrypted and stored on the database, now the user is logged as long as they can provide the valid token
     
   
  
  ## About Validation
  
    Validating the inputs on the backend                              |
       
          name => is requires cant be empty, string, max length less than 255 characters    
          email => is requires cant be empty, string, max length less than 255 characters,  
                  no duplicate value allowed                                                
          password => is required cant be empty, string, min length is 8 characters 
          faceId => is required cant be empty, it is string
  
  ## About Login
  
  If user provide their email and password, look up the user with the provided
  email, if found then check the provided password against the password stored in the database,
  on the client side if the face of the user matches the face id for particular face is returned and checked against the face id with the users with that email and if the face id does not match the error message is returned.
  If the password is correct a unique token is created with the expiration date set
  and sent to the user before being encrypted and then encrypted and stored in the database, 
  the client stores the token on the browser (localstorage,cookie in this system the token is stored on the localstorage) and the token is attached on the http header and sent for every request made by the client ,
  
  if the user with the provided email is not authorized message is sent with the 401 status code
  After 3 login attempts the user is banned for 1 hour
  
  
