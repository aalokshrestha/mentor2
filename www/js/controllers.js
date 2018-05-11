angular.module('app.controllers', [])
  
.controller('landingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

	$scope.userdetails = {
		email: '',
		password: ''
	};

	$scope.$error = {
		email: '',
		password: '',
		login: ''
	}

	$scope.login = function(){

		if(!$scope.validateEmail($scope.userdetails.email)){
			$scope.$error.email = "Please enter valid email";
			return;
		}

		if($scope.userdetails.email == ''){
			$scope.$error.email = "Please enter email";
			return;
		}

		if($scope.userdetails.password == ''){
			$scope.$error.email = "Please enter password";
			return;
		}

		if($scope.userdetails.email == 'test@gmail.com' && $scope.userdetails.password == 'pass'){
			window.location.href = "#/page11";
			return;
		}

		$scope.$error.login = "Invalid email or password";
		return;
		
	}

	$scope.validateEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}


}])
   
.controller('mentorSignUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mentorSignUp2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('startUpRegistrationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.userdata = {
		name: '',
		description: '',
		email: '',
		password: '',
		re_password: ''
	};

	$scope.signup = function(){

		$scope.$error = {
			name: '',
			description: '',
			email: '',
			password: '',
			re_password: '',
			signup: ''
		};

		if($scope.userdata.name == ''){
			$scope.$error.name = "Please enter name";
			return;
		}

		if($scope.userdata.description == ''){
			$scope.$error.description = "Please enter description";
			return;
		}

		if($scope.userdata.email == ''){
			$scope.$error.email = "Please enter email";
			return;
		}

		if($scope.userdata.password == ''){
			$scope.$error.password = "Please enter password";
			return;
		}

		if($scope.userdata.re_password == ''){
			$scope.$error.re_password = "Please enter re-password";
			return;
		}

		if(!$scope.validateEmail($scope.userdata.email)){
			$scope.$error.email = "Please enter valid email";
			return;
		}

		if($scope.userdata.password != $scope.userdata.re_password){
			$scope.$error.signup = "Password doesn't match";
			return;
		}

		window.location.href = "#/verification";

	}

	$scope.validateEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

}])
   
.controller('profile2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('startUpRegistration2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.opencamera = function(){
		var file = document.getElementById('file');
		file.click();
	}

}])
   
.controller('typeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mentorDashBoardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settings2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('verificationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	// console.log("here");
	$scope.throwoutleft = function(eventName, eventObject){
		console.log("left",eventName,eventObject);
	};
	$scope.throwoutright = function(eventName, eventObject){
		console.log("right",eventName,eventObject);
	};

	$scope.options = {
	    isThrowOut: function (offset, element, throwOutConfidence) {
	        return throwOutConfidence > 0.6;
	    }
	};
}])
   
.controller('accountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('favouritesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 