import state, {
    initialize,
    // import dispatch functions
    newPoll,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('the newPoll function creates poll from inputs', (expect) => {
    // what is the initial expected state?
    expect.equal(state.poll, null);
    // use the action
    newPoll('why', 'yes', 'no');
    // what should the state be now?


    // remove this line when starting your test
    expect.deepEqual(state.poll, {
        question: 'why',
        optionA: { name: 'yes', count: 0 },
        optionB: { name: 'no', count: 0 },

    });
});
