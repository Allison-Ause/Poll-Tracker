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
    
    state.poll = {
        question: '',
        optionA: { name: 'optionA', count: 0 }, 
        optionB: { name: 'optionB', count: 0 }, 
    };

    // state.pastGames = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state