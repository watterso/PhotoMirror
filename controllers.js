photoMirror.controller('FacebookController',function ($scope){
	$scope.albums = [];
});
photoMirror.controller('GoogleController',function ($scope,$http){
	$http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/'+"103684022579152784663"+'?alt=json-in-script&callback=testkind=album&access_token='+"ya29.1.AADtN_WZwUfGSlmr-A14PWoqWANjMbBh6bk1-HquU48C-2LE94nVadpPL3oVJmgav_D0"}).
    success(function(data, status, headers, config) {
     	/*parser = new DOMParser();
		xmlDoc = parser.parseFromString(data,'text/xml');
		xmlAlbums = xmlDoc.getElementsByTagName('entry');
		function mapCallback(val){
			var obj = {
				id:val.getElementsByTagName('id')[1].firstChild.nodeValue,
				name:val.getElementsByTagName('title')[0].firstChild.nodeValue,
				link:null,
				count:val.getElementsByTagName('numphotos')[0].firstChild.nodeValue,
				cover_id:null,
				cover_src:val.getElementsByTagName('content')[0].getAttribute("url")
			};
			if(obj.name!="Auto Backup"){
				obj.link = "https://plus.google.com/u/0/photos/"+userid+"/albums/"+obj.id;
			}else{
				obj.link = "https://plus.google.com/u/0/photos/search/%23AutoBackup"
			}
			return obj;
		}
		$scope.albums = Array.prototype.map.call( xmlAlbums, mapCallback);*/
		console.log(data);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(data);
    });
});