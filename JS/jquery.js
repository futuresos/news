if(top.location!==self.location){ 
	top.location.href="http://911188.com"; 
}

function sc(id)
{
	document.cookie="picid="+id+";path=/";
	document.cookie="spv_flag=1;path=/";
	return true;
}

function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
}
document.writeln("<style>.postBody {display:none;}</style>");