$(function(){

  function User(name) {
    this.id = this.constructor.all.length;
    this.constructor.all.push(this);
    this.name = name;
  }
  User.all = [];
  User.prototype.balance = 0.0;
  User.prototype.report = function() {
    $('#user-list').find('li[data-id="'+this.id+'"]').find('.balance').text(this.balance);
  };
  User.prototype.withdrawal = function(amount) {
    this.balance -= amount;
    this.report();
  };
  User.prototype.deposit = function(amount) {
    this.balance += amount;
    this.report();
  };
  User.prototype.li = function() {
    return '<li data-id="'+this.id+'">'+this.name+'\'s balance $<span class="balance">'+this.balance+'</span></li>';
  };
  User.prototype.option = function() {
    return '<option value="'+this.id+'">'+this.name+'</option>';
  }
  User.prototype.display = function() {
    $('#user-list').append(this.li());
    $('#select-user').append(this.option());
  };

  //initial hide atm
  $('#atm').hide();

  //clear inputs on focus
  $('input[type="text"]').focus(function(){ $(this).val('') });

  //create new users

  $('#create-user').submit(function(event){
    var name = $('#new-user').val();
    var newUser = new User(name);
    newUser.display();
    //console.log(User.all);
    $('#atm').show();
    event.preventDefault();
  });

  //transactions

  $('#atm').submit(function(event){
    var userId = $('#select-user').val();
    var choice = $('#choice').val();
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount)) {
      if (choice === 'deposit') {
        User.all[userId].deposit(amount);
      }
      else {
        User.all[userId].withdrawal(amount);
      }
    }
    event.preventDefault();
  });

});