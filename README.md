# asapp-chat
Simple chat frontend built using Reactjs, Redux and ImmutableJS.

# Future features
- Infinite scroll: Currently all chat messages are kept in DOM even when they are out of view. This is highly inefficient. We should render only DOM nodes that user is able to see.
- Message group by time: Many chat apps will group messages together by sending time rather than displaying an individual timestamp for each message.
- Allow sending HTML content (eg. images, links)
- Handle AJAX responses (eg. Show a message has successfully sent, Show a message that failed to send). 
- Show message has been read by user. This can be done either with clever use of DOM events, or set when message is retrieved from server using AJAX.

## How to use

Clone this repo, then:
```
npm install
npm start
```

The server will now be running at ```localhost:8080```. To run unit tests, use ```npm test```
