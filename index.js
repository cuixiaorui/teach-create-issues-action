// github  api
// octokit

// TODO auth
const octokit = new Octokit({ auth: `personal-access-token123` });

// octokit api create issue

octokit.rest.issues.create({
  owner: "cuixiaorui",
  repo: "hello-world",
  title: "Hello world from " + slug,
});
