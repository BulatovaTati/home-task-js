const CounterObject = function ({rootSelector, counterValue = 0, step = 1,} = {}) {
    this.value = counterValue;
    this.step = step;

    this.refs = this.getRefs(rootSelector);
    this.initialEvents();
}

CounterObject.prototype.getRefs = function(rootSelector) {
    const refs = {};
    
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');
    return refs;
}

CounterObject.prototype.increment = function() { this.value += this.step };
CounterObject.prototype.decrement = function() { this.value -= this.step };

CounterObject.prototype.initialEvents = function() {

    this.refs.incrementBtn.addEventListener('click', () => {

        this.increment();
        this.updateCounterValue();
    });

    this.refs.decrementBtn.addEventListener('click', () => {

        this.decrement();
        this.updateCounterValue();
    });
}

CounterObject.prototype.updateCounterValue = function() {
    this.refs.value.textContent = this.value;
}


const counter = new CounterObject({ rootSelector: '#counter', step: 1 });
