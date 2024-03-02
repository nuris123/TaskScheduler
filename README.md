\# Task Scheduler

A simple Node.js package for task scheduling using the \`node-schedule\` library.

## Installation

Before using the package, make sure to install the required dependency:

\`\`\`bash
npm install node-schedule
\`\`\`

## Usage

Create an instance of the \`TaskScheduler\` class and use its methods to schedule, cancel, and list tasks.

\`\`\`javascript
const TaskScheduler = require('task-scheduler');

const taskScheduler = new TaskScheduler();

// Schedule a task to run every minute
taskScheduler.scheduleTask('exampleTask', '*/1 * * * *', () => {
  console.log('Running exampleTask at', new Date());
});

// List scheduled tasks
taskScheduler.listTasks();

// Cancel a task
setTimeout(() => {
  taskScheduler.cancelTask('exampleTask');
  taskScheduler.listTasks();
}, 5000); // Cancel the task after 5 seconds
\`\`\`

Adjust the cron expression and task logic according to your specific use case.

## API

### \`scheduleTask(taskName, cronExpression, taskFunction)\`

Schedule a task with a given name, cron expression, and task function.

### \`cancelTask(taskName)\`

Cancel a scheduled task by providing its name.

### \`listTasks()\`

List all the currently scheduled tasks.

## License

This package is licensed under the MIT License - see the \[LICENSE\](LICENSE) file for details.
