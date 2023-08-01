class  user {
     constructor(username){
          this.username = username
     }
     logMe(){
      console.log(`user name is ${this.username}`);
     }
     static createId(){
      return `123`
     }
}

const Rahul = new user('Rahul')

// console.log(Rahul.createId())

class Teacher extends user{
  constructor(username,email){
    super(username)
   this.email = email
  }
}

const iPhone = new Teacher('iphone','i@Phone.com')
iPhone.logMe()
// iPhone.createId()