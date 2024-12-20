//your JS code here. If required.
function increment()
{
    let counter = document.getElementById("counter");
	alert(counter.textContent);
    counter.innerHTML=Number(counter.textContent)+1;
	
}