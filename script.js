//your JS code here. If required.
function increment()
{
    let counter = document.getElementById("counter");
    counter.innerHTML=Number(counter.textContent)+1;
	alert(counter.textContent);
}