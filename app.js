const express = require('express');
const bodyParser = require('body-parser');
const PriorityQueue = require('./priorityQueue');
const Stack = require('./stack');
const { saveDispatchRecord, generateDailyLogs } = require('./fileHandler');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Data Structures
const priorityQueue = new PriorityQueue();
const dispatchStack = new Stack();

// Prepopulate the Priority Queue
priorityQueue.enqueue({ requestId: '001', type: 'Medical Emergency', priority: 3 });
priorityQueue.enqueue({ requestId: '002', type: 'Flood Rescue', priority: 2 });
priorityQueue.enqueue({ requestId: '003', type: 'Property Damage', priority: 1 });

// Routes

// Submit a new request
app.post('/request', (req, res) => {
    const { requestId, type, priority } = req.body;
    priorityQueue.enqueue({ requestId, type, priority, timestamp: new Date() });
    res.json({ message: 'Request added successfully', request: req.body });
});

// View current queue
app.get('/queue', (req, res) => {
    res.json({ queue: priorityQueue.queue });
});

// Dispatch a service
app.post('/dispatch', (req, res) => {
    const nextRequest = priorityQueue.dequeue();
    if (!nextRequest) {
        return res.status(400).json({ message: 'No requests in the queue' });
    }

    dispatchStack.push(nextRequest);

    // Save the dispatch record
    saveDispatchRecord('dispatchRecords.json', {
        ...nextRequest,
        dispatchTime: new Date(),
    });

    res.json({ message: 'Service dispatched', dispatch: nextRequest });
});

// Undo the last dispatch
app.post('/undo-dispatch', (req, res) => {
    const lastDispatch = dispatchStack.pop();
    if (!lastDispatch) {
        return res.status(400).json({ message: 'No dispatches to undo' });
    }

    priorityQueue.enqueue(lastDispatch);
    res.json({ message: 'Last dispatch reverted', reverted: lastDispatch });
});

// Generate daily logs
app.get('/daily-logs', async (req, res) => {
    const logs = dispatchStack.stack.map((dispatch, index) => ({
        requestId: dispatch.requestId,
        type: dispatch.type,
        priority: dispatch.priority,
        dispatchTime: dispatch.timestamp.toISOString(),
    }));

    const filePath = 'dailyLogs.csv';
    await generateDailyLogs(filePath, logs);

    res.download(filePath, 'dailyLogs.csv');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
