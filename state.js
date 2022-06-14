// set state to an empty object
const state = {};
//
// Poll Data Object: {
//    question: '',
//    optionA: { name: 'optionA', count: 0 }, 
//    optionB: { name: 'optionB', count: 0 }, 
//    }
// 

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:

    state.poll = null;

    // {
    //     question: '',
    //     optionA: { name: 'optionA', count: 0 }, 
    //     optionB: { name: 'optionB', count: 0 }, 
    // };

    // state.pastGames = [];
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