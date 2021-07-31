const uname = document.querySelector(".username .uname"),
ppp = document.querySelector(".profile img"),
email = document.querySelector(".emailid .email"),
gid = document.querySelector(".googleid .gid");

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  gid.textContent = profile.getId();
  uname.textContent = profile.getName();
  ppp.src = profile.getImageUrl();
  email.textContent = profile.getEmail();
}