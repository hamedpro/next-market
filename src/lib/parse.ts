import Parse from 'parse';

// Initialize Parse
Parse.initialize('myAppId', 'javascriptKey'); // This value should match the appId in your backend config
Parse.serverURL = 'http://localhost:1337/parse'; // Make sure this URL matches your backend server URL

export default Parse; 