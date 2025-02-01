$(function(){
	pics();
	tzgg();
	gzap();
})
function pics(){
	var oimg = $("#imgs li");
	oimg.hide();
	oimg.eq(0).show();
	var oicon = $("#icons li");
	oicon.mouseover(function(){
		$(this).addClass('on1').siblings().removeClass('on1');
		var i = $(this).index();
		$(oimg).eq(i).siblings().fadeOut(1000);
		$(oimg).eq(i).fadeIn(1000);
		clearInterval(t);
	})
	oicon.mouseout(function(){
		t=setInterval(mar,3000);
	})
	oimg.mouseover(function(){
		clearInterval(t);
	})
	oimg.mouseout(function(){
		t=setInterval(mar,3000);
	})
	function mar(){
		var j;
		oicon.each(function(){
			if($(this).hasClass('on1')){
				j = $(this).index();
			}
		})
		if(j<7){

		oimg.eq(j+1).siblings().fadeOut(1000);
		oimg.eq(j+1).fadeIn(1000);
		oicon.eq(j+1).addClass('on1').siblings().removeClass('on1');			
		}
		else{
		oimg.eq(0).siblings().fadeOut(1000);
		oimg.eq(0).fadeIn(1000);
		oicon.eq(0).addClass('on1').siblings().removeClass('on1');					
		}
	}
	var t = setInterval(mar,2000);
}
function tzgg(){
	var ot = $('#t a');
	var ob = $('#b ul');
	ob.hide();
	ob.eq(0).show();
	ot.mouseover(function(){
		$(this).css('color','rgb(25,148,72)').siblings().css('color','#444');
		var i = $(this).index();
		ob.eq(i).siblings().fadeOut(100);
		ob.eq(i).fadeIn(100);
	})
}
function gzap(){
	var ot = $('#t1 a');
	var ob = $('#b1 ul');
	ob.hide();
	ob.eq(0).show();
	ot.mouseover(function(){
		$(this).css('color','rgb(25,148,72)').siblings().css('color','#444');
		var i = $(this).index();
		ob.eq(i).siblings().fadeOut(100);
		ob.eq(i).fadeIn(100);
	})
}