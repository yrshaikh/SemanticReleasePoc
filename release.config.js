module.exports = {
    branches: ['main'],
    prepare: [{
        path: "@semantic-release/exec",
        cmd: "echo prepare"
    }],
    publish: [
        "@semantic-release/github", {
            path: "@semantic-release/exec",
            cmd: "echo publish
        }
    ]
}
