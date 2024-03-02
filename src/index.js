const schedule = require('node-schedule');

class TaskSchedulerUltra{
  constructor() {
    this.jobs = [];
  }

  scheduleTask(taskName, cronExpression, taskFunction) {
    const job = schedule.scheduleJob(taskName, cronExpression, taskFunction);
    this.jobs.push({ taskName, job });
  }

  cancelTask(taskName) {
    const jobIndex = this.jobs.findIndex(job => job.taskName === taskName);
    if (jobIndex !== -1) {
      const canceledJob = this.jobs.splice(jobIndex, 1)[0];
      canceledJob.job.cancel();
      console.log(`Task "${taskName}" has been canceled.`);
    } else {
      console.log(`Task "${taskName}" not found.`);
    }
  }

  listTasks() {
    console.log('Scheduled Tasks:');
    this.jobs.forEach(job => console.log(`- ${job.taskName} (${job.job.nextInvocation()})`));
  }
}

module.exports = TaskScheduler;
