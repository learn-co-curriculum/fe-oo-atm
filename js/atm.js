$(function(){

  // 1. create a constructor function "User" that accepts a (name) as an argument

    // 2. create a static "all" method attached to User via "this.contructor.all.push()" and push each new user instance into it as they are created.

    // 3. create a public "id" property for each user instance that increments by one so the first user would have an id of 0 and the second an id of 1. To do this you can create a static "count" property attached to User constructor and increment it such as this.constructor.count++;  
    
    // 4. create a public "name" property for each user instance that will be set to the (name) argument passed into this User constructor function.

    // 5. create a public "balance" property for each user instance and initially set it to 0.0

    // 6. create a public "report" method that will select the ul with #user-list and find li inside where the data-id attribute matches this.id then find the .balance span and change its text to this.balance
    
    // 7. create a public "withdrawal" method that accepts a (ammount) argument and will subtract the amount from this.balance. Then call the "report" method above to run.
    
    // 8. create a public "deposit" method that accepts a (ammount) argument and will add the amount to this.balance. Then call the "report" method above to run.
    
    // 9. create a public "li" method that will return a string like the following: 
    //'<li data-id="'+this.id+'">'+this.name+'\'s balance $<span class="balance">'+this.balance+'</span></li>';

    // 10. create a public "option" method that will return a string like the following:
    // return '<option value="'+this.id+'">'+this.name+'</option>';
   
    // 11. create a public "display" method that will append this.li method aboves returned string inside of the ul with an id of #user-list. As well as append this.option method from aboves returned string inside of the select menu with an id of #select-user.
    
  //end User constructor function

  // 12. create a static User.all property holding an empty array. This will update from the code in step 2.

  // 13. create a static User.count property set to 0. This will update from the code in step 3.

  // 14. initial hide form with an id of #atm

  // 15. clear the value (set value to empty string) from inputs with type on focus

  // 16. on form with id of #create-user submit: 

    // 17. create a local variable "name" to hold the user name and set it to the value from the #new-user input

    // 18. create a local variable "newUser" and set it to a new instance being created from the User constructor function and pass in the (name) variable.

    // 19. call the display method on the newUser instance (code in step 11.).

    // console.log(User.all) if you like to see if new users are being added to the User.all array and check that their id property is incrementing.

    // 20. show the form with id of #atm

    // 21. make sure to add an event.preventDefault() to stop the form from submitting.

  // end #create-user form submit function

  // 22. on form with id of #atm submit:

    // 23. create a local variable "userId" and set it to the value of the #select-user menu.

    // 24. create a local variable "choice" and set it to the value of the #choice menu.

    // 25. create a local variable "amount" and set it equal to the value of the #amount input. Make sure to parseFloat() it so it becomes a number instead of a string.

    // 26. check if choice equals 'deposit' if yes then:
    // User.all[userId].deposit(amount);
    // else
    // User.all[userId].withdrawal(amount);

    // 27. make sure to add an event.preventDefault() to stop the form from submitting.

  // end #atm form submit function

});