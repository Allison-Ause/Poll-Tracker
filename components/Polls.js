import OpinionBox from './OpinionBox.js';

export default function createPolls(root) {
    // reference DOM
    const container = root.querySelector('.polls-container');
    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const polls = props.polls;
        
        container.innerHTML = '';

        for (const poll of polls) {
            const opinionBox = OpinionBox({ poll });
            container.append(opinionBox);
        }
    };
}