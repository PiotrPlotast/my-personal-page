// disclosure.js
const disclosures = document.querySelectorAll('.js-disclosure');

function toggleDisclosure() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
}

function init() {
    // early return if no disclosures present on page
    if (!disclosures.length) {
        return
    }

    // update state not JS has loaded
    disclosures.forEach(component => {
        component.dataset.state = 'ready';

        const disclosureButtons = component.querySelectorAll('.js-disclosure-btn');

        disclosureButtons.forEach(btn => {
            // initialise button attributes now JS has loaded
            btn.removeAttribute('title');
            btn.removeAttribute('disabled');

            // listen for clicks
            btn.addEventListener('click', toggleDisclosure);
        });
    });
}

init();