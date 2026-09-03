document.getElementById('toggleBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

function fillInput(text) {
    document.getElementById('userInput').value = text;
    document.getElementById('userInput').focus();
}

document.getElementById('sendBtn').addEventListener('click', async function() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();

    if (!text) return;

    const log = document.getElementById('log');
    const sendBtn = document.getElementById('sendBtn');

    // Show user's message
    const userRow = document.createElement('div');
    userRow.className = 'msg-row user';

    const userBubble = document.createElement('div');
    userBubble.className = 'bubble user';
    userBubble.textContent = text;

    userRow.appendChild(userBubble);
    log.appendChild(userRow);

    input.value = '';
    sendBtn.disabled = true;

    // Create assistant message
    const aiRow = document.createElement('div');
    aiRow.className = 'msg-row ai';

    const aiLabel = document.createElement('p');
    aiLabel.className = 'label';
    aiLabel.textContent = 'Assistant';

    const aiBubble = document.createElement('div');
    aiBubble.className = 'bubble ai';
    aiBubble.textContent = 'Thinking...';

    aiRow.appendChild(aiLabel);
    aiRow.appendChild(aiBubble);
    log.appendChild(aiRow);

    log.scrollTop = log.scrollHeight;

    try {
        console.log('Sending message to Flask...');

        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3.2:latest',
                messages: [
                    {
                        role: 'user',
                        content: text
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        console.log('Connected to Flask');

        // Clear "Thinking..."
        aiBubble.textContent = '';

        // Read streamed response from Flask
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { value, done } = await reader.read();

            if (done) break;

            const chunk = decoder.decode(value, { stream: true });

            aiBubble.textContent += chunk;

            log.scrollTop = log.scrollHeight;
        }

        console.log('Assistant response complete');

    } catch (error) {
        console.error('Chat error:', error);

        aiBubble.textContent =
            'Sorry, I could not connect to the assistant. Please try again.';
    }

    sendBtn.disabled = false;
});

document.getElementById('userInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('sendBtn').click();
    }
});
