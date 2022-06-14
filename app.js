// import utilities


// import component creators
import createPollDisplay from './components/PollDisplay.js';
import createNewPollForm from './components/NewPollForm.js';
//import createPolls from './components/Polls.js';
import createPollTallyKeeper from './components/PollTallyKeeper.js';

// import state and dispatch functions

import state, { newPoll } from './state.js';

// Create each component: 
// - pass in the root element via querySelector
const PollDisplay = createPollDisplay(document.querySelector('#poll-display'));
const NewPollForm = createNewPollForm(document.querySelector('#new-poll-form'), {
    handleNewPoll: (question, optionAName, optionBName) => {
        newPoll(question, optionAName, optionBName);
        display();
    }
});

const PollTallyKeeper = createPollTallyKeeper(document.querySelector('#poll-tally-keeper'));



// - pass any needed handler functions as properties of an actions object 


// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs

    PollDisplay({ poll: state.poll });
    NewPollForm({ poll: state.poll });
    PollTallyKeeper({ poll: state.poll });

}

// Call display on page load
display();
