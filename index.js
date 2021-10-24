const { Octokit } = require("octokit");
const core = require("@actions/core");
// nodejs12

const token = core.getInput("token");
const octokit = new Octokit({
  auth: token,
});

// octokit api create issue

octokit.rest.issues.create({
  owner: "cuixiaorui",
  repo: "teach-create-issues-action",
  title: "heiheihei 2 ",
  body: "hahaha",
});
