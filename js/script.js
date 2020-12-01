let list = document.querySelector('ul');
let li = list.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', () => {
		li[i].classList.toggle('crossOut');
	});
}
