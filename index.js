const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.6fff2f55-7303-4ca8-9a0e-2c43bf51e255';

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.resources = translations;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', this.t('WELCOME'));
    },
    'handleQuestion': function () {
        this.response.shouldEndSession(false);
        this.response.speak(this.t('RESPONSE'));
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t['BYE']);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', this.t['HELP']);
    }
};

const translations = {
    'en': {
        'translation': {
            'WELCOME': 'My queen, what would you like to know?',
            'RESPONSE': 'You, my queen!',
            'BYE': 'Bye bye! And do not forget that you are the best!',
            'HELP': 'Now you can ask me a question.'
        }
    },
    'de': {
        'translation': {
            'WELCOME': 'Was wünschen Sie zu wissen, eure Hoheit, ?',
            'RESPONSE': 'Natärlich sie, eure Hoheit!',
            'BYE': 'Auf Wiedersehen! Und vergessen Sie nicht, Sie sind die Beste und Schönste!',
            'HELP': 'SIe können mich alles fragen!.'
        }
    }
};