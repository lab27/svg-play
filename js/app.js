


TweenMax.set('#point-hand',{x:"1000px",y:"1000px"});
TweenMax.set('#illustration',{y:"190"});

var tl = new TimelineLite()

$('#home-btn').on('click', function(){
	TweenMax.to('#point-hand',.5,{x:0,y:0,ease:Power4.easeOut, repeat: 1, yoyo:true, onComplete: function(){

	// TweenMax.set($('.tab:last-child'),{className:"+=hovered"})
	}})
});


$('.tab').on('click', function(){
	TweenMax.to('#point-hand',1,{x:"1000px",y:"1000px",ease:Power4.easeIn})
	TweenMax.set($('.tab:last-child'),{className:"-=hovered"})
});