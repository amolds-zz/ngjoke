import {Vote} from './vote.model'

export class Joke {
    constructor(private setup:string, private punchline:string, 
        private lols?:Vote, private groans?:Vote, private source?:string) {

    }

    groanCount() {
        if (this.groans) {
            return this.groans.count;
        }
        return null;
    }

    addGroan() {
        if (this.groans) {
            this.groans.incrementCount;
        } else {
            this.groans = new Vote(1);
        }
    }

    lolCount() {
        if (this.lols) {
            return this.lols.count;
        }
        return null;
    }

    addLol() {
        if (this.lols) {
            this.lols.incrementCount;
        } else {
            this.lols = new Vote(1);
        }
    }

    toString() {
        return `setup='${this.setup}' punchline='${this.punchline}' lols=${this.lols} groans=${this.groans}`;
    }
}