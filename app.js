
import createPollDisplay from './components/PollDisplay.js';
import createNewPollForm from './components/NewPollForm.js';
import createPolls from './components/Polls.js';
import createPollTallyKeeper from './components/PollTallyKeeper.js';

import state, { newPoll, count, uncount, endPoll } from './state.js';

const PollDisplay = createPollDisplay(document.querySelector('#poll-display'));

const NewPollForm = createNewPollForm(document.querySelector('#new-poll-form'), {
    handleNewPoll: (question, optionAName, optionBName) => {
        newPoll(question, optionAName, optionBName);
        display();
    }
});

const PollTallyKeeper = createPollTallyKeeper(document.querySelector('#poll-tally-keeper'), {
    handleCount: (option) => {
        count(option);
        display();
    },

    handleUncount: (option) => {
        uncount(option);
        display();
    },

    handleEndPoll: () => {
        endPoll();
        display();
    }
});

const Polls = createPolls(document.querySelector('#past-polls'));


function display() {

    PollDisplay({ poll: state.poll });
    NewPollForm({ poll: state.poll });
    PollTallyKeeper({ poll: state.poll });
    Polls({ pastPolls: state.pastPolls });

}


display();
