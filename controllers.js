photoMirror.controller('FacebookController', function ($rootScope,$scope){
	if(FB && $rootScope.accessToken){
		console.log("FB LOADED");
		FB.api({
			method: 'fql.multiquery',
	 		queries: {
	    		query1: 'select aid,name,link,photo_count,cover_object_id from album where owner = me()',
	    		query2: 'SELECT pid,src FROM photo WHERE object_id  IN (SELECT cover_object_id FROM #query1)'
	    	}
	 	}, 
	 	function(response) {
	 		function mapCallback(currentValue, index, array){
	 			var album = array[index];
	 			var cover = this[index];
	 			var obj = {
	 				id:album.aid,
	 				name:album.name,
	 				link:album.link,
	 				count:album.photo_count,
	 				cover_id:cover.pid,
	 				cover_src:cover.src
	 			};
	 			return obj;
	 		}
			console.log(response);
			if(!response.error){
				albums = response[0].fql_result_set;
				coverPhotos = response[1].fql_result_set;
				$scope.albums = albums.map(mapCallback,coverPhotos);
				console.log($scope.albums);
			}
		});
		FB.api('/me/permission',function(response){
			console.log(response);
		});
	}else{
		console.log("FB not LOADED");
	}
	//$scope.albums = [{"id":"2737757699100901378","name":"France Study Abroad","link":"https://www.facebook.com/album.php?fbid=10152342568718888&id=637433887&aid=1073741826","count":"36","cover_id":"2737757699100901675","cover_src":"https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/1385032_10152342568813888_1532301424_s.jpg"},{"id":"2737757698027541553","name":"Cover Photos","link":"https://www.facebook.com/album.php?fbid=10150554085588888&id=637433887&aid=382001","count":"8","cover_id":"2737757698038870828","cover_src":"https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/550344_10151575917798888_571413750_s.jpg"},{"id":"2737757698027382658","name":"Profile Pictures","link":"https://www.facebook.com/album.php?fbid=456613968887&id=637433887&aid=223106","count":"55","cover_id":"2737757699100901689","cover_src":"https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/1506806_10152342599763888_2072594624_s.jpg"},{"id":"2737757698027560870","name":"Mobile Uploads","link":"https://www.facebook.com/album.php?fbid=10150692114768888&id=637433887&aid=401318","count":"166","cover_id":"2737757698039693624","cover_src":"https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/944137_10151787515818888_55469626_s.jpg"},{"id":"2737757699100901377","name":"Family Weekend!","link":"https://www.facebook.com/album.php?fbid=10152071540648888&id=637433887&aid=1073741825","count":"20","cover_id":"2737757699100901466","cover_src":"https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-prn2/t1.0-0/1382973_10152071540713888_306586169_s.jpg"},{"id":"2737757698027306973","name":"Timeline Photos","link":"https://www.facebook.com/album.php?fbid=298733478887&id=637433887&aid=147421","count":"21","cover_id":"2737757698039416991","cover_src":"https://fbcdn-photos-f-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/431911_10151724732688888_693562453_s.jpg"},{"id":"2737757698027647163","name":"Adam and Ian Brawling","link":"https://www.facebook.com/album.php?fbid=10151459366343888&id=637433887&aid=487611","count":"1","cover_id":"2737757698038510423","cover_src":"https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/532564_10151459366413888_145963963_s.jpg"},{"id":"2737757698027642646","name":"Thanksgiving 2012","link":"https://www.facebook.com/album.php?fbid=10151425191333888&id=637433887&aid=483094","count":"8","cover_id":"2737757698038359211","cover_src":"https://fbcdn-photos-e-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/481688_10151425194368888_715200940_s.jpg"},{"id":"2737757698027632348","name":"Not a nerdy trip to LA","link":"https://www.facebook.com/album.php?fbid=10151354034928888&id=637433887&aid=472796","count":"13","cover_id":"2737757698038047441","cover_src":"https://fbcdn-photos-e-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/285773_10151354034978888_98969934_s.jpg"},{"id":"2737757698027603847","name":"Koko Crater Botanical Gardens","link":"https://www.facebook.com/album.php?fbid=10151141490043888&id=637433887&aid=444295","count":"7","cover_id":"2737757698037199943","cover_src":"https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/487708_10151141576693888_752978989_s.jpg"},{"id":"2737757698027597134","name":"Tio Ted's Flux Altenator","link":"https://www.facebook.com/album.php?fbid=10151082197678888&id=637433887&aid=437582","count":"4","cover_id":"2737757698036991391","cover_src":"https://fbcdn-photos-f-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/295064_10151082197718888_568030854_s.jpg"},{"id":"2737757698027591492","name":"Down Undah","link":"https://www.facebook.com/album.php?fbid=10151025205468888&id=637433887&aid=431940","count":"17","cover_id":"2737757698036831083","cover_src":"https://fbcdn-photos-e-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/550836_10151025211973888_1840302479_s.jpg"},{"id":"2737757698027590039","name":"CS Shenaningans","link":"https://www.facebook.com/album.php?fbid=10151010500158888&id=637433887&aid=430487","count":"2","cover_id":"2737757698036788994","cover_src":"https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/523005_10151010501713888_1640605494_s.jpg"},{"id":"2737757698027511695","name":"Webcam Photos","link":"https://www.facebook.com/album.php?fbid=10150350360328888&id=637433887&aid=352143","count":"6","cover_id":"2737757698035511349","cover_src":"https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/308406_10150495916553888_497631553_s.jpg"},{"id":"2737757698027474013","name":"Zaaaaak","link":"https://www.facebook.com/album.php?fbid=10150206745638888&id=637433887&aid=314461","count":"2","cover_id":"2737757698033829784","cover_src":"https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/217278_10150206745658888_7206388_s.jpg"},{"id":"2737757698027434907","name":"<3 Preston","link":"https://www.facebook.com/album.php?fbid=10150105348973888&id=637433887&aid=275355","count":"1","cover_id":"2737757698033148849","cover_src":"https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/169040_10150105349078888_377474_s.jpg"},{"id":"2737757698027328156","name":"SAMMICH!","link":"https://www.facebook.com/album.php?fbid=393334448887&id=637433887&aid=168604","count":"7","cover_id":"2737757698030999368","cover_src":"https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/28324_393334478887_5320195_s.jpg"},{"id":"2737757698027319012","name":"Whistler '10","link":"https://www.facebook.com/album.php?fbid=383160648887&id=637433887&aid=159460","count":"86","cover_id":"2737757698030762538","cover_src":"https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/23792_383170218887_6462653_s.jpg"},{"id":"2737757698027296565","name":"LOL I HAS NEW CAMERAAAA!?!","link":"https://www.facebook.com/album.php?fbid=235261338887&id=637433887&aid=137013","count":"4","cover_id":"2737757698030245159","cover_src":"https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-0/19868_235263068887_3733920_s.jpg"},{"id":"2737757698027223318","name":"LULZ!!","link":"https://www.facebook.com/album.php?fbid=55309908887&id=637433887&aid=63766","count":"5","cover_id":"2737757698029409828","cover_src":"https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-ash3/t1.0-0/6294_121335658887_3384862_s.jpg"},{"id":"2737757698027234001","name":"Crew Pics","link":"https://www.facebook.com/album.php?fbid=76632643887&id=637433887&aid=74449","count":"2","cover_id":"2737757698028774413","cover_src":"https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-ash4/t1.0-0/3301_76632868887_2880395_s.jpg"},{"id":"2737757698027215636","name":"pics i bother to upload","link":"https://www.facebook.com/album.php?fbid=47244993887&id=637433887&aid=56084","count":"1","cover_id":"2737757698028393397","cover_src":"https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/t1.0-0/2130_47245033887_1280_s.jpg"}]
});