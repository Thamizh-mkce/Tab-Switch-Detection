# Tab Switching Detector

This is a simple web application that detects when a user switches between browser tabs and updates the displayed message accordingly.

## Features
- Detects when the user switches away from the current browser tab.
- Updates the displayed message and color when the tab visibility changes.

## Files
- `index.html`: The main HTML file that structures the application.
- `styles.css`: The CSS file that styles the application.
- `script.js`: The JavaScript file that handles the tab visibility detection.

## Usage
1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. The page will display a message indicating whether you are viewing the tab or not.
4. Switch to a different tab or minimize the browser, and the message will change to indicate that the tab is no longer active.
5. Return to the tab to see the message update again.

## How It Works
- The application uses the `visibilitychange` event listener to detect when the document’s visibility state changes.
- When the document is hidden (e.g., when switching to another tab), the message changes to "You have switched to another tab." and the text color changes to red.
- When the document is visible again, the message changes back to "You are currently viewing this tab." with the text color green.

## Browser Support
This application works in modern browsers that support the `visibilitychange` event, including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## License
This project is licensed under the MIT License.
