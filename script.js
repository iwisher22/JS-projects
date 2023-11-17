const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		switch (e.target.id) {
			case "blue":
				body.style.backgroundColor = e.target.id;

				break;
			case "red":
				body.style.backgroundColor = e.target.id;

				break;
			case "yellow":
				body.style.backgroundColor = e.target.id;

				break;
			case "green":
				body.style.backgroundColor = e.target.id;

				break;

			default:
				break;
		}
	});
});
// 	button.addEventListener("click", function (e) {
// 		if (e.target.id === "blue") {
// 			body.style.backgroundColor = e.target.id;
// 		}
// 		if (e.target.id === "red") {
// 			body.style.backgroundColor = e.target.id;
// 		}
// 		if (e.target.id === "yellow") {
// 			body.style.backgroundColor = e.target.id;
// 		}
// 		if (e.target.id === "green") {
// 			body.style.backgroundColor = e.target.id;
// 		}
// 	});
// });
