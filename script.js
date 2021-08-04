const uname = document.querySelector(".username .uname"),
  ppp = document.querySelector(".profile img"),
  email = document.querySelector(".emailid .email"),
  signout = document.querySelector(".login-signup a"),
  gid = document.querySelector(".googleid .gid");

signout.onclick = () => {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');

    gid.textContent = '';
    uname.textContent = '';
    ppp.src = '';
    email.textContent = '';
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  console.log('Password: ' + profile.getPassword());
  
  gid.textContent = 'Google ID: ' + profile.getId();
  uname.textContent = profile.getName();
  ppp.src = profile.getImageUrl();
  email.textContent = '(' + profile.getEmail() + ')';
}
