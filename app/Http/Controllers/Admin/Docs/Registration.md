## About Registration
  The users registration is handled by admin
  The admin registers Voters, Candidates and Chairmans
  
## About Voter Registration
  ### Validations
    name => is requires cant be empty, string, max length less than 255 characters    
    email => is requires cant be empty, string, max length less than 255 characters,  
                  no duplicate value allowed                                                
   password => is required cant be empty, string, min length is 8 characters 
   faceId => is required cant be empty, it is string
   sex => is required field and it is string
   
## About Voter Candidate Registration 
  ### Validations
    name => is requires cant be empty, string, max length less than 255 characters    
    email => is requires cant be empty, string, max length less than 255 characters,  
                  no duplicate value allowed                                                
   password => is required cant be empty, string, min length is 8 characters 
   faceId => is required cant be empty, it is string
   sex => is required field and it is string
   admission_year => is required field,it is timestamp, it is the year that the candidate   
                     started education at that university
   educational_year => is required field,it is timestamp, it is the year that the candidate  
                        it is what year the student is at / accadamical year
 department => require field, it is srting
 gpa => required field, float 
 exam_score => is required, float datatype, it is the exam the candidate takes before 
               registaring for the election and maximum score is 50
 candidates_description => ,
                            'strategic_plan'
   
   
   #### About FaceId
     Face id is the unique id that identifies the users face
     when users register on the client side the face is registerd and the unique id for the users face is genetated and sent to the backend 