const counter = document.querySelector(".counter-number");
async function updateCounter(){
	let response = await fetch();
	let data = await response.json("https://yfi525iwfuvxkzwxxnopbybexi0hulez.lambda-url.us-east-1.on.aws/");
	counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
