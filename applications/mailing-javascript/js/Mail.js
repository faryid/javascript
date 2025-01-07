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

const mail = new Mail("haryansyah.study.id@gmail.com");
