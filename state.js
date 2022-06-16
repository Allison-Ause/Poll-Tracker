
const state = {};

export function initialize() {


    state.poll = null;

    // filled state for reference
    // {
    //     question: '',
    //     optionA: { name: 'optionA', count: 0 }, 
    //     optionB: { name: 'optionB', count: 0 }, 
    // };

    state.pastPolls = [];
}

initialize();

export default state;

export function newPoll(question, optionAName, optionBName) {
    state.poll = {
        question,
        optionA: { name: optionAName, count: 0 },
        optionB: { name: optionBName, count: 0 }
    };
}

export function count(option) {
    if (option === 'A') {
        state.poll.optionA.count++;
    }
    if (option === 'B'){
        state.poll.optionB.count++;
    }
}

export function uncount(option) {
    if (option === 'A') {
        state.poll.optionA.count--;
    }
    if (option === 'B') {
        state.poll.optionB.count--;
    }
}

export function endPoll() {

    state.pastPolls.push(state.poll);
    state.poll = null;

}