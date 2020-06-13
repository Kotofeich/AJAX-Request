let adress = new URL('http://cors-test.appspot.com/test');
let get = new XMLHttpRequest();
let post = new XMLHttpRequest();
let weird = new XMLHttpRequest();

get.open('GET', adress, true);
get.send();
post.open('POST', adress, true);
post.send();
weird.open('WEIRD', adress, true);
weird.send();
get.onload = function() {
  if(get.status === 200 && get.readyState === 4){
  	document.querySelector('.get').style.color = "green";
	document.querySelector('.get').style.fontStyle = "bold";
	document.querySelector('.get').textContent = "OK";
}};
get.onerror = function() { 
  	document.querySelector('.get').style.color = "red";
 	document.querySelector('.get').style.fontStyle = "bold";
    document.querySelector('.get').textContent = "Failed";
};
post.onload = function() {
  if(post.status === 200 && post.readyState === 4){
    document.querySelector('.post').style.color = "green";
	document.querySelector('.post').style.fontStyle = "bold";
	document.querySelector('.post').textContent = "OK";
  	}};
post.onerror = function() { 
	document.querySelector('.post').style.color = "red";
 	document.querySelector('.post').style.fontStyle = "bold";
    document.querySelector('.post').textContent = "Failed";
};
weird.onload = function() {
  if(get.status === 200 && weird.readyState === 4){
  	document.querySelector('.weird').style.color = "green";
  	document.querySelector('.weird').style.fontStyle = "bold";
	document.querySelector('.weird').textContent = "OK";
  }};
weird.onerror = function() {
  	document.querySelector('.weird').style.color = "red";
 	document.querySelector('.weird').style.fontStyle = "bold";
    document.querySelector('.weird').textContent = "Failed"; 
};