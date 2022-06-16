import OpinionBox from './OpinionBox.js';

export default function createPolls(root) {

    const container = root.querySelector('.polls-container');

    return (props) => {
        const polls = props.pastPolls;
        container.innerHTML = '';

        for (const poll of polls) {
            const opinionBox = OpinionBox(poll);
            container.append(opinionBox);
        }
    };
}