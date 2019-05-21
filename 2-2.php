

function r_pv(){
	document.getElementById("spv_link").click();
}

$(document).attr("title","请激活播放器：");

var spvaddiv_top = $('.spvaddiv').offset().top;
var spvaddiv_left = $('.spvaddiv').offset().left;

$('.spvaddiv').css({
    "filter":"Alpha(Opacity=0)",
    "-moz-opacity":"0",
    "-khtml-opacity":"0",
    "opacity":"0"
});

$('.spvxldiv').css({
	"position": "absolute",
    "top":spvaddiv_top-60,
    "left":spvaddiv_left-5,
    "z-index":"-999"
});

$(document).ready(function () {
	setTimeout('r_pv()',30119);
});
