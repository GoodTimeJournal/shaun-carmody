class Tab {
    constructor(props) {
        this.element = props;
        this.tab = props.dataset.tab;
        this.review = document.querySelector(`.review[data-review='${this.tab}']`);
        this.element.addEventListener('click', e => this.display());
    }

    hide() {
        document.querySelector('.active').classList.toggle('active');
    }

    display() {
        this.hide();
        this.review.classList.toggle('active');
    }

} 

class Review {
    constructor(props) {
        this.element = props;
    }
}

document.querySelectorAll('.tab').forEach(el => new Tab(el));
document.querySelectorAll('.review').forEach(el => new Review(el));