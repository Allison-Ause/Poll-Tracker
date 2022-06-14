export default function createNewPollForm(root, handlers) {
    const handleNewPoll = handlers.handleNewPoll;

    // reference DOM

    const form = root.querySelector('form');

    // event listeners
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleNewPoll(formData.get('question'), formData.get('optionA'), formData.get('optionB'));
    
        
    });

    return (props) => {
        const poll = props.poll;

        if (!poll) {
            root.classList.remove('hidden');
            return;
        }
        root.classList.add('hidden');
    };
}