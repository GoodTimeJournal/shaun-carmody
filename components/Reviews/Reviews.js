class Tab {
    constructor(props) {
        this.element = props;
        this.tab = props.dataset.tab;
        this.review = document.querySelector(`.review[data-review='${this.tab}']`);
        this.element.addEventListener('click', () => this.display());
    }

    hide() {
        document.querySelector('.review-active').classList.toggle('review-active');
        document.querySelector('.tab-active').classList.toggle('tab-active');
    }

    display() {
        this.hide();
        this.review.classList.toggle('review-active');
        this.element.classList.toggle('tab-active');
    }
}

let i = 0;

const count = (array) => {
    if (i >= array.length) i = 0;
    array[i].click();
    i ++;
}

class Reviews {
    constructor(props) {
        this.element = props;
        this.reviews = Array.from(document.querySelectorAll('.review'));
        this.tab = Array.from(document.querySelectorAll('.tab'));
        this.setInterval();
    }

    setInterval() {
        setInterval(count, 5000, this.tab);
    }
}

document.querySelectorAll('.tab').forEach(el => new Tab(el));

let reviews = document.querySelector('.reviews');
reviews = new Reviews (reviews);