// scripts/commit-msg-check.js
const fs = require('fs');
const msgPath = process.argv[2];
const commitMessage = fs.readFileSync(msgPath, 'utf8');
const taskRegex = /^task-\d+/;

if (!taskRegex.test(commitMessage)) {
  console.error('Commit message should start with a task ID like "task-1"');
  process.exit(1);
}
