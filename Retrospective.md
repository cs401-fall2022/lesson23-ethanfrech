# Retrospective

- name: Ethan Frech
- email: ethanfrech@u.boisestate.edu

## Instructions

For the **Experience** section you need to detail your experience with this lab. 

- Were there any things that you struggled with? 
- Were there any parts of this lab that were unclear or poorly specified? 
- Were you able to get the entire project done?

For the **Known issues or Bugs** section you need to detail any issues or bugs that you have in your
code. For example maybe your code crashes randomly and you couldn't figure out why. If your code
doesn't have any issues you can simply write NONE in this section.

For the **Sources used** section you must detail any sources you used outside of the textbook or
course website. If you write NONE in this section it is assumed that you didn't use google at all.
Be safe CITE!

## Experience

Overall the final full stack website assignment was a fun and interesting experience. Going into this I already had experience with express and ejs, so figuring out the front end, middleware, and routes
was rather straight forward. I also had prior experience with SQL and PostGreSQL so I decided to try something new and attempt this project with MongoDB. I quickly found it would be best to use Mongoose, an Object Data Modeling 
Library for MongoDB. Given I was only planning to store blog post text and some sort of identifier to retrieve them I was able to quickly create a Schema for my database. It ended up just being blog post text and the blog number. 
After setting this up I struggled a little bit with properly passing back the blog number. I was having trouble with JavaScript based post requests, so I decided to just create a form action. This meant I had to post data that was not
entered by the user in the form, so I created a hidden field whose value was set automatically using inline JavaScript(a big perk of using ejs). This workaround took a while to discover but began working immediately upon implementation. 
I had make a JavaScript function to copy the blog post text a user is trying to edit into the update field, so they can modify or delete the based blog contents based on preference.

## Known issues or Bugs

None

## Sources used

https://www.mongodb.com/docs/manual/installation/
https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
https://www.npmjs.com/package/mongodb
https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
https://www.npmjs.com/package/mongoose
https://mongoosejs.com/docs/guide.html
