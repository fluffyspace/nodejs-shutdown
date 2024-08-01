## What is it ##

It's a simple program which runs as web server and listens for GET network request `/shutdown` to shut down the computer on which it is running. It's also possible to cancel started shutdown. Has no authentication and autorization, it's very simple to easily shut down a PC over a network, either from your phone or another PC. It's not recommended to have port on which the web server is running open to public for obvious reasons.

## How to use ##

Use provided `server.exe`. Feel free to run project with Node.js's command `node server.js` (first do `npm i`) or compile it to .exe yourself (I recommend package pkg).

Connect to IP and port on which web server is running and append following commands to that URL:  
  
`/shutdown` starts a shutdown for 60 seconds  
`/cancel` cancels started shutdown
