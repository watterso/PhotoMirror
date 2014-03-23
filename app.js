var photoMirror = angular.module('PhotoMirrorApp', []);
photoMirror.run(function($rootScope){
	FB.init({
					appId      : '601476799944295',
					status     : true, // check login status
					cookie     : true, // enable cookies to allow the server to access the session
					xfbml      : true  // parse XFBML
				});
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
		// the user is logged in and has authenticated your
		// app, and response.authResponse supplies
		// the user's ID, a valid access token, a signed
		// request, and the time the access token 
		// and signed request each expire
		$rootScope.uid = response.authResponse.userID;
		$rootScope.accessToken = response.authResponse.accessToken;

		} else if (response.status === 'not_authorized') {
		// the user is logged in to Facebook, 
		// but has not authenticated your app
		} else {
		// the user isn't logged in to Facebook.
		}
 	});
});

photoMirror.service('GetFacebookAlbums', function() {
    this.sayHello = function() {
        return "Hello, World!"
    };
});