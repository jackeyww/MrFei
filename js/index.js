		

		window.onscroll = function(){
			var d = document.documentElement.scrollTop || document.body.scrollTop;
			var search = document.getElementsByClassName("search")[0];
			var location = document.getElementById("location");
			if(d>100){
				search.style.background = "#333";
				location.style.color = "#fff";
			}else{
				search.style.background = "none";
				location.style.color = "#ddd";
			}
		}