$(function(){


function showScroll() {
            $(window).scroll(function () {
                var scrollValue = $(window).scrollTop();
                scrollValue > 100 ? $('.return-top').fadeIn() : $('.return-top').fadeOut();
            });
            $('.return-top').click(function () {
                $("html,body").animate({scrollTop: 0}, 200);
            });
        }
        showScroll();



        $('.jc-content li:odd').css({'float':'right','marginLeft':'400px'})




	// float
	$('.kf').click(function(){
		$('.kf').hide();
		$('.f-list').fadeIn()
	})
	$('.close').click(function(){
		$('.kf').fadeIn()
		$('.f-list').hide();
	})







})






	// 加入收藏
		function AddFavorite(sURL, sTitle)
		{
		    try
		    {
		        window.external.addFavorite(sURL, sTitle);
		    }
		    catch (e)
		    {
		        try
		        {
		            window.sidebar.addPanel(sTitle, sURL, "");
		        }
		        catch (e)
		        {
		            alert("加入收藏失败，请使用Ctrl+D进行添加");
		        }
		    }
		}

		// 设为首页
		function SetHome(obj,url){
		  try{
		    obj.style.behavior='url(#default#homepage)';
		    obj.setHomePage(url);
		  }catch(e){
		    if(window.netscape){
		     try{
		       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		     }catch(e){
		       alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
		     }
		    }else{
		    	alert("您的浏览器不支持,请按下面步骤操作:1.打开浏览器设置。2.点击设置网页。3.输入:http://300155.com点击确认");
		    }
		 }
		}


























