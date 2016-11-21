(function(){
	"use strict";
	console.log("fired");

function imageExpan(img1,img2,img3,img4){
	//constructor
	

	// my variables
	var image1= document.querySelector(img1);//four image classes from css
	var image2= document.querySelector(img2);
	var image3= document.querySelector(img3);
	var image4= document.querySelector(img4);

	var containerWidth=0;
	var containerHeight=0;

	//variables
	var imageCon = document.querySelector("#imageCon");
	var dragging = false;
	var min  = 0;
	var max = imageCon.offsetWidth;



this.setContainerDim=function(wide,height)
{//construction function1
	containerWidth=wide;
	containerHeight=height;

};
this.welPrint=function()
{
	alert("Welcome! This is a prototype of image selector tool to showcase whole image gallery in small space");
}

	//functions
function onDown(event){
	dragging = true;


	if(dragging === true)

	{

			/*getting the x values start*/
			var x = event.clientX - imageCon.getBoundingClientRect().left;
			
			var y = event.clientY - imageCon.getBoundingClientRect().top;
			
			/*start for image expansion*/
			if(x>0 && x<containerWidth/2 && y>0 && y<containerHeight/2)

			{
				image1.style.width=containerWidth+"px";
				image1.style.height=containerHeight+"px";

				image1.style.position="absolute";

				image2.style.display="none";
				image3.style.display="none";
				image4.style.display="none";

			}
			else if(x>containerWidth/2 && x<containerWidth && y> 0 && y<containerHeight/2)
				{
				image2.style.width=containerWidth+"px";
				image2.style.height=containerHeight+"px";

				image1.style.position="absolute";
				image2.style.position="absolute";

				image3.style.display="none";
				image4.style.display="none";

				
				}
				else if(x>0 && x<containerWidth/2 && y> containerHeight/2 && y<containerHeight)
				{
				image3.style.width=containerWidth+"px";
				image3.style.height=containerHeight+"px";
				
				image1.style.position="absolute";
				image2.style.position="absolute";
				image3.style.position="absolute";

				image4.style.display="none";



				}
				else if(x>containerWidth/2 && x<containerWidth && y> containerHeight/2 && y<containerHeight)
				{
				image4.style.width=containerWidth+"px";
				image4.style.height=containerHeight+"px";

				image1.style.position="absolute";
				image2.style.position="absolute";
				image3.style.position="absolute";
				image4.style.position="absolute";

				}
				else
					{};


			/*end of  image expansion*/

	}


	}
function onUp(){
	dragging = false;

		image1.style.position="relative";
		image2.style.position="relative";
		image3.style.position="relative";
		image4.style.position="relative";


		image1.style.display="inherit";
		image2.style.display="inherit";
		image3.style.display="inherit";
		image4.style.display="inherit";

		image1.style.width=containerWidth/2+"px";
		image1.style.height=containerHeight/2+"px";
		image2.style.width=containerWidth/2+"px";
		image2.style.height=containerHeight/2+"px";
		image3.style.width=containerWidth/2+"px";
		image3.style.height=containerHeight/2+"px";
		image4.style.width=containerWidth/2+"px";
		image4.style.height=containerHeight/2+"px";

}




	//listeners
	imageCon.addEventListener("mousedown", onDown, "false");
	imageCon.addEventListener("mouseup", onUp, "false");


}
// variable for constructor

var myObj=new imageExpan(".image1",".image2",".image3",".image4");
myObj.setContainerDim(900,563);
myObj.welPrint();
})();