'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Corgi Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Coming in at just a foot tall, the Pembroke Welsh Corgi is the smallest of the herding breeds.",
    "Beloved in England, Corgis have been part of the British Royal Family for over 70 years. Queen Elizabeth II has owned more than 30 Corgis since she was a young child, making the breed synonymous with the Royal Family.",
    "Corgis evolved into two types, the Cardigan and the Pembroke, which weren’t recognized as separate breeds until the 1930s.",
    "Sutter Brown, an adorable Pembroke, was named California’s First Dog in 2010 after his hooman, Jerry Brown, was elected governor.",
    "Don’t get confused by their stocky build! Corgis are one of the most athletic breeds, as they were originally herders. They’ve been known to be shockingly fast runners.",
    "While they make look different in stature, Corgis are closely related to Siberian Huskies. They are both in the Spitz family of dogs, characterized by their thick fur and pointed ears and muzzle.",
    "Corgi is Welsh for Dwarf Dog.",
    "There are 2 breeds of corgis: the Pembroke Welsh Corgi and the Cardigan Welsh Corgi.",
    "Pembroke corgis are often tailess",
    "The modern Corgi's origins can be traced back almost 1,000 years to Wales. Even further back, evidence suggests that Corgis are descended from spitz breeds brought by Vikings to what is now the United Kingdom, and may be related to the Swedish Vallhund and Norwegian Lundehund.",
    "Corgis were developed for the job of herding livestock. Even today, Corgis are sometimes still used on farms for herding purposes.",
    "The corgi is the 111th smartest dog breed.",
    "While Corgis make great house pets, they are known to get heavy if they aren’t regularly exercised."
    
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a corgi fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};