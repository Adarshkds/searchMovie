function callSearch() {
    const input = document.querySelector('input');
    const items = document.querySelectorAll('.item');

    input.addEventListener('keyup', (e) => {
        e.preventDefault();

        const key = e.target.value.toLowerCase();
        const validInputRegex = /^[a-z0-9 ]+$/;
        console.log(key);

        if (validInputRegex.test(key)) {
            items.forEach(item => {
                if (item.lastChild.innerHTML.toLowerCase().startsWith(key)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        }
        else {
            items.forEach(item => {
                item.classList.remove('hide');
            });
        }
    })
}






