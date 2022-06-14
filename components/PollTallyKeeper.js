export default function createPollTallyKeeper(root) {
    // reference DOM
    const [questionDisplay, optionADisplay, optionBDisplay] = root.querySelectorAll('span');


    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const poll = props.poll;

        if (poll) {
            root.classList.remove('hidden');

            questionDisplay.textContent = poll.question;
            optionADisplay.textContent = poll.optionA.name;
            optionBDisplay.textContent = poll.optionB.name;
        }
        else {
            root.classList.add('hidden');
        }
    };
}