"use strict"

$(document).ready(function(){

	var memory = {
		check : [],
		add : function(nb){
			var tabRandom = [];
			for (var i = 0; i < nb; i+=2) {
				tabRandom[i] = tabRandom[i+1] = _.random(1,6);

			};
			tabRandom = _.shuffle(tabRandom);
			console.log(tabRandom);

			for (var i = 0; i < tabRandom.length; i++) {
				var carte = $(document.createElement('div')).attr("class", "carte").appendTo('.cartes');
				$(document.createElement('div')).attr("class", "hide").prependTo(carte);

				$(document.createElement('img')).attr({
					class:"memo",
					src:"img/memory0" + tabRandom[i] + ".png",
				}).prependTo(carte);
			};
		}, 

		hideAll : function(){
			$(".memo").hide();
			$(".hide").show();
		},

		game : function(event){
			var that = this;
			var cpt = 0;
			$(".carte").click(function(event){
				var event = event.currentTarget;
				cpt++;
				if (that.check.length <= 2 ) {
					if($(event).find(".hide").is(":visible")){
						$(event).find(".hide").hide();
						$(event).find(".memo").show();
						that.check.push($(event));
					}else{
						$(event).find(".hide").show();
						$(event).find(".memo").hide();
						that.check.pop();
					}
				};

				console.log($(that.check[0]).find(".memo").attr("src") +" "+$(that.check[1]).find(".memo").attr("src"));
				
				if(that.check.length == 2 && $(that.check[0]).find(".memo").attr("src") === $(that.check[1]).find(".memo").attr("src")){
					console.log('gagner');
					_.delay(function(){
						$(that.check[0]).find(".hide").remove();
						$(that.check[0]).find(".memo").remove();
						$(that.check[1]).find(".hide").remove();
						$(that.check[1]).find(".memo").remove();
						that.check = [];
					}, 1000);
				}else if(that.check.length == 2 && $(that.check[0]).find(".memo").attr("src") != $(that.check[1]).find(".memo").attr("src")){
					_.delay(function(){
						$(that.check[0]).find(".hide").show();
						$(that.check[0]).find(".memo").hide();
						$(that.check[1]).find(".hide").show();
						$(that.check[1]).find(".memo").hide();
						that.check = [];
					}, 1000);
				};
			});
		}
	};
 
	memory.add(6);
	memory.hideAll();
	memory.game(event);

	
});