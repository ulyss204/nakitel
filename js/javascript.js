var slider = {
	slides:['images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg'],
	frame:0, 
	set: function(image) { 
		document.getElementById("slider_item").style.backgroundImage = "url("+image+")";
	},
	init: function() { 
		this.set(this.slides[this.frame]);
	},
	left: function() { 
		$('.nav li').removeClass("nav_item-check");
		this.frame--;
		$('.nav li:eq('+ this.frame +')').addClass("nav_item-check");
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);

	},
	right: function() { 
		$('.nav li').removeClass("nav_item-check");
		this.frame++;
		$('.nav li:eq('+ this.frame +')').addClass("nav_item-check");
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	}

};
function showPage( pageID ){
	
    slider.frame = pageID; 
    
    slider.init();
    
    
}
$('.hamb').click(function(){
	$('div.menu').toggleClass("menu-toggle");
});   


$('.nav_item').click(function(){
	$('.nav li').removeClass("nav_item-check");
    showPage( $(this).attr('data-id') );
    $('.nav li:eq('+ $(this).attr('data-id') +')').addClass("nav_item-check");
      
});
window.onload = function() { 
	slider.init();
	setInterval(function() { 
		slider.right();
	},5000);
};