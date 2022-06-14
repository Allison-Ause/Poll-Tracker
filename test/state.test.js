import state, {
    initialize,
    // import dispatch functions
    newPoll,
    count,
    uncount,
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

test('increases count for optionA and/or optionB', (expect) => {

    newPoll('why', 'yes', 'no');

    count('A');

    expect.deepEqual(state.poll, {
        question: 'why',
        optionA: { name: 'yes', count: 1 },
        optionB: { name: 'no', count: 0 },
    });

    count('A');
    count('B');

    expect.deepEqual(state.poll, {
        question: 'why',
        optionA: { name: 'yes', count: 2 },
        optionB: { name: 'no', count: 1 },
    });
});

test('decrements count for optionA and/or optionB', (expect) => {

    newPoll('why', 'yes', 'no',);

    uncount('A');

    expect.deepEqual(state.poll, {
        question: 'why',
        optionA: { name: 'yes', count: -1 },
        optionB: { name: 'no', count: 0 },
    });

    uncount('B');

    expect.deepEqual(state.poll, {
        question: 'why',
        optionA: { name: 'yes', count: -1 },
        optionB: { name: 'no', count: -1 },
    });
});
