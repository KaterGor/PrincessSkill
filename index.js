const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.6fff2f55-7303-4ca8-9a0e-2c43bf51e255';


exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID // APP_ID is your skill id which can be found in the Amazon developer console where you create the skill.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'My queen, what would you like to know?');
    },
    'handleQuestion' : function() {
        this.response.shouldEndSession(false);
        this.response.speak('You, my queen!');        
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent' : function() {
        this.emit(':tell', 'Bye bye! And do not forget that you are the best!');
    },
    'AMAZON.HelpIntent' : function() {
        this.emit(':tell', 'Now you can ask me a question.');
    }
};