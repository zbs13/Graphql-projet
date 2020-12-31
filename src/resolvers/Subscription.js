const { subscribeToNewMessage } = require('./Subscriptions/subscriptionMessage')

const Subscription = {
    newMessage: {
        subscribe: subscribeToNewMessage
    }
    
};

module.exports = {
    Subscription
};