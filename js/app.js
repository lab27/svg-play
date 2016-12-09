


TweenMax.set('#hand',{x:"-1000px",y:"1000px"});

var tl = new TimelineLite()

$('#circle').on('click', function(){
	TweenMax.to('#hand',.5,{x:0,y:0,ease:Power4.easeOut})
	TweenMax.to('svg defs filter fe')
});