'use strict';
angular.module('myApp',
		[
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster",
			"com.2fdevs.videogular.plugins.buffering"
		]
	)
	.controller('HomeCtrl',
		["$sce", function ($sce) {
			var controller = this;
			controller.API = null;

			controller.onPlayerReady = function(API) {
				controller.API = API;
			};

			controller.videos = [
			{
				sources: [
					{src: $sce.trustAsResourceUrl("video/brutal-assertivity.mp4"), type: "video/mp4"}
				]
			},
			{
				sources: [
					{src: $sce.trustAsResourceUrl("video/movie1.mp4"), type: "video/mp4"}
				]
			},
			{
				sources: [
					{src: $sce.trustAsResourceUrl("video/movie2.mp4"), type: "video/mp4"}
				]
			}
		];

			controller.config = {
				preload: "none",
				autoHide: false,
				autoHideTime: 3000,
				autoPlay: false,
				sources: controller.videos[0].sources,
				theme: {
					url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"
				},
				plugins: {
					poster: "video/7181.jpg"
				}
			};

			controller.setVideo = function(index) {
				controller.API.stop();
				controller.config.sources = controller.videos[index].sources;
			};
		}]
	);
