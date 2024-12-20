//your JS code here. If required.
function increment()
{
    let counter = document.getElementById("counter");
	alert(Number(counter.textContent));
    counter.innerHTML=Number(counter.textContent)+1;
	
}