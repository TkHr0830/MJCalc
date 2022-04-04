let Men1 = document.getElementsByName("men1");

Men1.forEach(i => i.addEventListener("change",
	e => console.log(e.target.value)
	)
);
