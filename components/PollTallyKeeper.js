export default function createPollTallyKeeper(root, dispatch) {
    
    const handleCount = dispatch.handleCount;
    const handleUncount = dispatch.handleUncount;

    const [questionDisplay, optionADisplay, optionBDisplay] = root.querySelectorAll('span');
    const [countA, uncountA, countB, uncountB, endPoll] = root.querySelectorAll('button');

    // event listeners
    countA.addEventListener('click', () => {
        handleCount('A');
    });

    uncountA.addEventListener('click', () => {
        handleUncount('A');
    });

    countB.addEventListener('click', () => {
        handleCount('B');
    });

    uncountB.addEventListener('click', () => {
        handleUncount('B');
    });

    // endPoll.addEventListener('click' () => {

    // });


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