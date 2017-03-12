export class Vote {
    constructor(public count:number) {

    }

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        this.count--;
    }

    voteCount() {
        return this.count;
    }

    toString():string {
        return `count(${this.count})`;
    }
}