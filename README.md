# Strict-Workflow-Beeminder
A Chrome extension that helps you stay focused by blocking sites during work timers and letting you browse during break timers. Now also logs work sessions automatically to beeminder.

## Setup
1. Clone the repository.
2. Edit background.js and replace the url "https://www.beeminder.com/api/v1/users/$USERNAME/goals/$GOALNAME/datapoints.json" with your username and desired goal (omit the $).
3. Replace "AUTH_TOKEN_HERE" with your authentication token. (To find your authentication token, log in to beeminder and point your web browser to https://www.beeminder.com/api/v1/auth_token.json)
4. Open Chrome and go to your extensions page (chrome://extensions).
5. Check the developer mode box if it isn't already checked.
6. Click 'load an unpacked extension' and select the folder that contains this repo.
7. Configure the main strict workflow settings to your liking!
8. Start a work session by clicking on the extension icon (a small red tomato).
9. Type an (optional) comment in the popup window and hit enter or save comment. When the work session is completed, your datapoint will automatically be logged to your beeminder goal.
