function alertMessage(){
   alert("This website is under construction. Please do not proceed");
}
function menu(){
  if(window.innerWidth < 700)
  {
    document.getElementById("menu-icon").style.display='inline';
    document.getElementById("primary-nav-links").style.display='none';
		document.getElementById("primary-nav").style.padding='10px 25px 10px 25px';
		/*var prim_nav_elements = document.getElementsByClassName("primary-nav");
		var i;
		for(i=0;i<prim_nav_elements.length;i++)
		{
			prim_nav_elements[i].paddingTop='10px';
			prim_nav_elements[i].paddingRight='25px';
			prim_nav_elements[i].paddingBottom='10px';
			prim_nav_elements[i].paddingLeft='25px';
		}*/
  }
}
function HamburgerMenu(){
  if(document.getElementById("primary-nav-links-mobile").style.display=='none')
	{
		document.getElementById("primary-nav-links-mobile").style.display='block';
		document.getElementById("menu-icon").innerHTML='<img src="/assets/HamburgerMenu-VKCS-Close-1.svg" alt="Hamburger Menu Icon">'
	}
  else
  {
    document.getElementById("primary-nav-links-mobile").style.display='none';
		document.getElementById("menu-icon").innerHTML='<img src="/assets/HamburgerMenu-VKCS-2.svg" alt="Hamburger Menu Icon">'
  }
}
function secnavpages(){
	if(window.loaction.indexOf("#")<0)
	window.loaction+="#";
}
function secnavdrop(){
	if(document.getElementById("secnav").style.display=='none')
	{
		document.getElementById("secnav").style.display='block';
		document.getElementById("secnavdrop").innerHTML='Close Menu<br>';
	}
	else
	{
		document.getElementById("secnav").style.display='none';
		document.getElementById("secnavdrop").innerHTML='OOP Menu<br>';
	}
}