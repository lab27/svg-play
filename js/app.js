


TweenMax.set('#hand',{x:"1000px",y:"1000px"});

var tl = new TimelineLite()

$('#home').on('click', function(){
	TweenMax.to('#hand',.5,{x:0,y:0,ease:Power4.easeOut, onComplete: function(){

	TweenMax.set($('.tab:last-child'),{className:"+=hovered"})
	}})
});


$('.tab').on('click', function(){
	TweenMax.to('#hand',1,{x:"1000px",y:"1000px",ease:Power4.easeIn})
	TweenMax.set($('.tab:last-child'),{className:"-=hovered"})
});