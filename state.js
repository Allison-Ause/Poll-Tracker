// set state to an empty object
const state = {};
//
// Poll Data Object: {
//    question: '',
//    optionA: { name: 'optionA', count: 0 }, 
//    optionB: { name: 'optionB', count: 0 }, 
//    }
// 


export function initialize() {


    state.poll = null;

    // {
    //     question: '',
    //     optionA: { name: 'optionA', count: 0 }, 
    //     optionB: { name: 'optionB', count: 0 }, 
    // };

    state.pastPolls = [{
        question: '',
        optionA: { name: 'optionA', count: 0 }, 
        optionB: { name: 'optionB', count: 0 }, 
    }, {
        question: '',
        optionA: { name: 'optionA', count: 0 }, 
        optionB: { name: 'optionB', count: 0 }, 
    }];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
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