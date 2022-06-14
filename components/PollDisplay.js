export default function createPollDisplay(root) {
    // reference DOM


    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        const poll = props.poll;

        if (poll) {
            root.classList.remove('hidden');
            return;
        }
        root.classList.add('hidden');
        
    };
}