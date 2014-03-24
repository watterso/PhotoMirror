var photoMirror = angular.module('PhotoMirrorApp', []);
var facebookAlbums = [];
var google_auth_token = "";
var google_user_id = "";
function gSigninCallback(authResult) {
	console.log(authResult);
	console.log(authResult.access_token);
	google_auth_token = authResult.access_token;
	gapi.client.load('plus','v1', function(){
		var request = gapi.client.plus.people.get( {'userId' : 'me'} );
	    request.execute(function(profile) { 
	    	console.log(profile);
	    	google_user_id = profile.id;
	    });
	});
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}