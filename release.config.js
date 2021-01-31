module.exports = {
    branches: ['main'],
    "verifyConditions": ["@semantic-release/github"],
    "prepare": 
    [
        {
            "path": "@semantic-release/exec",
            "cmd": "set-version ${nextRelease.version}"
        }
    ],
    "publish": [
        "@semantic-release/github",
        {
            "path": "@semantic-release/exec",
            "cmd": "publish-package"
        }
    ],
}
