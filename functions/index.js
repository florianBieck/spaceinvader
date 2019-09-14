const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUser = functions.auth.user().onCreate((user) => {
  console.log(user);
  return admin.firestore().collection("users").doc(user.uid + "").set({
    email: user.email,
    displayname: user.displayName
  }).then((response) => {
    console.log(response);
    return response;
  }).catch(() => {
    return null;
  })
});

exports.deleteUser = functions.auth.user().onDelete((user) => {
  console.log(user);
  return admin.firestore().collection("users").doc(user.uid + "").get().then(function (u) {
    if (u.exists) {
      console.log(u.data());
      return admin.firestore().collection("users").doc(user.uid).delete().then(res => {
        return res;
      }).catch(() => {
        return null;
      })
    }
    return null;
  }).catch(() => {
    return null;
  });
});
