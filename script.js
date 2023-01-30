const faqs = [
    {
        "question": "What is Epoch and how is it pronounced",
        "answer": "Epoch is a two-day techno-cultural fest organized by GitHub GITAM. It is pronounced as Ee-poh-k."
    },
    {
        "question": "What does Epoch mean?",
        "answer": "Epoch has a very clever meaning! In Machine Learning, Epoch means the number of passes or iterations a training dataset takes around an algorithm. So, in 2023, Epoch experiences its first iteration-Epoch 1.0."
    },
    {
        "question": "Where and when is Epoch happening?",
        "answer": "Epoch is happening in February 2023 in GITAM Bengaluru."
    },
    {
        "question": "Tell me about the competitions in Epoch!",
        "answer": "We have 4 main events: Techscapades (technical treasure hunt), Product Videography, Gaming Contest,Tech Trivia "
    },
    {
        "question": "What are the cultural elements in Epoch?",
        "answer": "There will be arcade game fair, food stalls, dance shows, concerts, DJ, and a lot more."
    },
    {
        "question": "Who can attend Epoch?",
        "answer": "Finalists from the 4 main events from each campus will compete in-person on the GITAM Bengaluru campus. The cultural elements are open for all the GITAM Bengaluru students."
    },
    {
        "question": "Can anyone participate in the events?",
        "answer": "YES! Even if you are not from the School of Technology, you can participate in all the events we organize. However, follow the guidelines specified for each event."
    },
    {
        "question": "Can one team that won an event participate (and win) in another?",
        "answer": "You can absolutely participate in all the events we organize. But know that you CANNOT be a finalist in more than one event."
    },
    {
        "question": "What will happen to the finalists in the preliminary rounds?",
        "answer": "Finalist teams of one event from one campus will compete with the other teams from the other campuses that won the same event. For example, the finalists of Techscapades Hyderabad will compete with the finalists of Techscapades Vizag and Techscapades Bengaluru."
    },
    {
        "question": "What will the winners in the final round get?",
        "answer": "The winners in the final round will get a hefty prize money, and a lot of swag. All the finalists who come to Bengaluru will win something (fun swag, great experience, and core memories!)"
    }
]

function accordian(id, question, answer) {
    const accordian = `
    <div class="accordion-item " style="background-color: #8367BB;">
        <button class="accordion-button collapsed text-white fs-5" data-bs-toggle="collapse" data-bs-target="#collapse${id}" style="background-color: #8367BB;">
            ${question}
        </button>
        <div id="collapse${id}" class="accordion-collapse collapse" data-bs-parent="#accordionParent" >
            <div class="accordion-body text-white">
                ${answer}
            </div>
        </div>
    </div>
    `
    return accordian
}

const accordionParent = document.getElementById('accordionParent')
for (const key in faqs) {
    accordionParent.insertAdjacentHTML('beforeend', accordian(key, faqs[key].question, faqs[key].answer))
}
