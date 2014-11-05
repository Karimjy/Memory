"use strict"

$(document).ready(function(){

	var memory = {
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
					src:"img/memory0" + tabRandom[i] + ".png"
				}).prependTo(carte);
			};
		}, 

		hideAll : function(){
			$(".memo").hide();
			$(".hide").show();
		},

		game : function(event){
			$(".carte").click(function(event){
				var event = event.currentTarget;
				if($(event).find(".hide").is(":visible")){
					$(event).find(".hide").hide();
					$(event).find(".memo").show();
				}else{
					$(event).find(".hide").show();
					$(event).find(".memo").hide();
				}
			});
		}
	};
 
	memory.add(6);
	memory.hideAll();
	memory.game(event);

	
});