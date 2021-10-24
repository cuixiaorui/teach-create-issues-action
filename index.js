const { Octokit } = require("octokit");
// nodejs12

// TODO auth
const octokit = new Octokit({
  auth: `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`,
});

// octokit api create issue

octokit.rest.issues.create({
  owner: "cuixiaorui",
  repo: "teach-create-issues-action",
  title: "heiheihei 2 ",
  body:"hahaha"
});
