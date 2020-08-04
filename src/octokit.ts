import { GitHub } from "@actions/github"

if (!process.env.GITHUB_TOKEN) {
  throw new Error("Please include GITHUB_TOKEN in action yaml file")
}

const octokit = new GitHub(process.env.GITHUB_TOKEN as string)

export default octokit
