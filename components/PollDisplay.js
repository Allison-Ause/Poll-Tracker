import OpinionBox from './OpinionBox.js';

export default function createPollDisplay(root) {

    return (props) => {
        const poll = props.poll;

        if (poll) {
            root.classList.remove('hidden');
        }
        else {
            root.classList.add('hidden');
        }
        root.innerHTML = '';

        if (poll) {
            const opinionBox = OpinionBox(poll); 
            root.append(opinionBox);
        }

    };
}

