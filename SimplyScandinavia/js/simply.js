function thisPage(){

	myUrl = location.href;
	mySub1 = "/";

	if (myUrl.lastIndexOf(mySub1) == -1) {
		return "";
	} else {
		return myUrl.substring(myUrl.lastIndexOf(mySub1)+1, myUrl.length);
	}

}

strPage = thisPage();

if (strPage == "") { strPage = "index.htm" };

/* Namn f�r engelska och svenska sidor */

if (strPage.substring(0, 3) != "en-") {
	strEnPage = "en-" + strPage;
	strSvPage = strPage;
} else {
	strEnPage = strPage
	strSvPage = strPage.substring(3);
}


$(document).ready(function(){
	$("a[href='"+strPage+"']").addClass("dennaSida").attr("href", "#");
	$("#sprakval a[href='en-index.htm']").attr("href", strEnPage);
	$("#sprakval a[href='index.htm']").attr("href", strSvPage);
	
	$('div.product a[href]').lightBox();

 });


