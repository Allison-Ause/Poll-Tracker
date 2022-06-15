import OpinionBox from './OpinionBox.js';

export default function createPollDisplay(root) {
    // reference DOM


    // event listeners

    // should return its component render function
    // return ({ data }) => {
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
            const opinionBox = OpinionBox({ poll }); // should be returning poll object
            root.append(opinionBox);
        }

    };
}

