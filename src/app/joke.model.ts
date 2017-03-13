import {Vote} from './vote.model'

//type Jokes: Array<Joke>();

export class Joke {
    constructor(public setup:string, public punchline:string, 
        private lols?:Vote, private groans?:Vote, private source?:string) {

    }

    public static getJokes: Array<Joke> = [
        new Joke('Why did the skeleton not cross the road', 'It did not have the guts!!!', new Vote(3), new Vote(2)),
        new Joke('Why did the chicken cross the road', 'To get to the other side'),
        new Joke('When is a door not a door?', 'When it is a tomato', new Vote(0), new Vote(12)),
        new Joke('How many (javascript) developers does it take to make a joke?', 'Answer is [undefined]]', new Vote(12345), new Vote(0))
    ];

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