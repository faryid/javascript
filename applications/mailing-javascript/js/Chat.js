class Mail {
  constructor(author) {
    this.author = author;
    this._contacts = [];
  }
  
  sendMessage(msg, to) {
    console.log(`From    : ${this.author}`);
    console.log(`To      : ${to}`);
    console.log(`Message :`);
    console.log(`\t${msg}`);
    
    this._contacts.push(to);
  }
  
  showContacts() {
    console.log(this._contacts);
  }
}

class Chat extends Mail {
  constructor(phone) {
    super(phone);
  }
  
  sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log("Send by Chat App");
  }
}

const chat = new Chat("+6281806122365");
