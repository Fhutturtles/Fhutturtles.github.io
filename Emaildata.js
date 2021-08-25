
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'fhutturtle@address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "A message has been sent this is jsu ta twst!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }