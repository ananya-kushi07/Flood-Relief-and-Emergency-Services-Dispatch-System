const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const saveDispatchRecord = (filePath, record) => {
    const data = JSON.stringify(record, null, 2);
    fs.appendFileSync(filePath, `${data}\n`);
};

const generateDailyLogs = async (filePath, logs) => {
    const csvWriter = createCsvWriter({
        path: filePath,
        header: [
            { id: 'requestId', title: 'Request ID' },
            { id: 'type', title: 'Type' },
            { id: 'priority', title: 'Priority' },
            { id: 'dispatchTime', title: 'Dispatch Time' },
        ],
    });

    await csvWriter.writeRecords(logs);
};

module.exports = { saveDispatchRecord, generateDailyLogs };
