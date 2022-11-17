mdc.ripple.MDCRipple.attachTo(document.querySelector('.btnripple'));

function buttonAction(action) {
	if (action == 'email') { location.href = 'mailto:hello@blockarchitech.com' } else if (action == 'mainsite') { location.href = 'https://hello.blockarchitech.com' }
}
function breakpage() {
	document.documentElement.innerHTML = '';
}