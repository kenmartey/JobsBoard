// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function () {
    

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      from: "kenmartey89@gmail.com",
      to: "kennedy.anyinatoe@meltwater.org",
      subject: "This is the subject of the mail",
      text: "This is the body of the mail"
    });

  }
});

Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://kenmartey89:ceremony.1989@smtp.gmail.com:465';
});


