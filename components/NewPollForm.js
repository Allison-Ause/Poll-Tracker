export default function createNewPollForm(root, handlers) {
    const handleNewPoll = handlers.handleNewPoll;

    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleNewPoll(formData.get('question'), formData.get('optionA'), formData.get('optionB'));
    
        form.reset();
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