/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [

    {
        "What is ASP dot net?": [
            "A set of dot net classes used to create Web-based, client-side (Web Form) and server-side (Web Service) applications.",
            "A signal that is generated when an unplanned or unexpected event occurs.",
            "A function or method containing program statements that are executed in response to an event.",
            "The parent class of a derived class."
        ]
    },
    {
        "What is a base class?": [
            "The parent class of a derived class.",
            "A feature that allows an application to query its own metadata.",
            "A function or method containing program statements that are executed in response to an event.",
            "A signal that is generated when an unplanned or unexpected event occurs."
        ]
    },
    {
        "What is C sharp?": [
            "An object-oriented and type-safe programming language supported by Microsoft for use with the dot net Framework.",
            "A dot net technology that allows objects residing in different application domains to communicate.",
            "An application hosted on a Web server that provides information and services to other network applications using the HTTP and XML protocols.",
            "A full-featured, Interactive Development Environment (IDE) created by Microsoft for the development of dot net applications."
        ]
    },
    {
        "What is a collection?": [
            "A class used to logically organize a group of identical types using a single identifier.",
            "A dot net technology that allows objects residing in different application domains to communicate.",
            "An application hosted on a Web server that provides information and services to other network applications using the HTTP and XML protocols.",
            "A function defined within a class."
        ]
    },
    {
        "What is an exception?": [
            "A signal that is generated when an unplanned or unexpected event occurs",
            "A set of dot net classes used to create Web-based, client-side (Web Form) and server-side (Web Service) applications",
            "The parent class of a derived class",
            "A function defined within a class."
        ]
    },
    {
        "What is an event handler?": [
            "A function or method containing program statements that are executed in response to an event",
            "An area of memory reserved for use by the CLR for a running programming",
            "A description of the structure of an XML document. Schemas are written in XSD and support namespaces and data types",
            "A CLR language feature that allows the value of a single member variable to be modified using getter and setter methods defined in a class or structure"
        ]
    },
    {
        "What is garbage collection?": [
            "The process of implicitly reclaiming unused memory by the CLR",
            "A logical grouping of the names (i.e., identifiers) used within a program",
            "A description of the structure of an XML document. Schemas are written in XSD and support namespaces and data types",
            "A programming infrastructure created by Microsoft for building, deploying, and running applications and services that use dot net technologies, such as desktop applications and Web services"
        ]
    },
    {
        "What is a heap?": [
            "An area of memory reserved for use by the CLR for a running programming",
            "The names that programmers choose for namespaces, types, type members, and variables",
            "A full-featured, Interactive Development Environment (IDE) created by Microsoft for the development of dot net applications",
            "A class used to logically organize a group of identical types using a single identifier"
        ]
    },
    {
        "What is an interface?": [
            "The set of properties, methods, indexers, and events exposed by an object that allow other objects to access its data and functionality",
            "The names that programmers choose for namespaces, types, type members, and variables",
            "The parent class of a derived class",
            "A class used to logically organize a group of identical types using a single identifier"
        ]
    },
    {
        "What is an identifier?": [
            "The names that programmers choose for namespaces, types, type members, and variables",
            "A logical grouping of the names (i.e., identifiers) used within a program",
            "A signal that is generated when an unplanned or unexpected event occurs",
            "An XML file with the  dot config extension that contains option settings for an application or Web site. Common configuration files include Machine dot config and Web dot config"
        ]
    },
    {
        "What is a keyword?": [
            "Names that have been reserved for special use in a programming language such as namespace, class, static, and while",
            "The names that programmers choose for namespaces, types, type members, and variables",
            "The set of properties, methods, indexers, and events exposed by an object that allow other objects to access its data and functionality",
            "A class used to logically organize a group of identical types using a single identifier"
        ]
    },
    {
        "What is localization?": [
            "The practice of designing and developing software that will properly used all of the conventions defined for a specific locale",
            "A logical grouping of the names (i.e., identifiers) used within a program",
            "The process or method for configuring controls on a form or Web page to fetch data from or write data to a data source such as a database, XML file, and so on",
            "The process of implicitly reclaiming unused memory by the CLR"
        ]
    },
    {
        "What is a method?": [
            "A function defined within a class",
            "The instance of a class that is unique and self-describing. A class defines an object, and an object is the functional, realization of the class",
            "The set of properties, methods, indexers, and events exposed by an object that allow other objects to access its data and functionality",
            "A feature that allows an application to query its own metadata"
        ]
    },
    {
        "What is a namespace?": [
            "A logical grouping of the names (i.e., identifiers) used within a program",
            "The instance of a class that is unique and self-describing. A class defines an object, and an object is the functional, realization of the class",
            "The set of properties, methods, indexers, and events exposed by an object that allow other objects to access its data and functionality",
            "A function defined within a class"
        ]
    },
    {
        "What is the dot net framework?": [
            "A programming infrastructure created by Microsoft for building, deploying, and running applications and services that use dot net technologies, such as desktop applications and Web services",
            "Microsoft's enterprise-scale relational database and member of the dot net Enterprise Server product family",
            "A full-featured, Interactive Development Environment (IDE) created by Microsoft for the development of dot net applications",
            "A set of dot net classes used to create Web-based, client-side (Web Form) and server-side (Web Service) applications"
        ]
    },
    {
        "What is an object?": [
            "The instance of a class that is unique and self-describing",
            "The names that programmers choose for namespaces, types, type members, and variables",
            "A class used to logically organize a group of identical types using a single identifier",
            "A function or method containing program statements that are executed in response to an event"
        ]
    },
    {
        "What is a property?": [
            "A CLR language feature that allows the value of a single member variable to be modified using getter and setter methods defined in a class or structure",
            "The instance of a class that is unique and self-describing",
            "A class used to logically organize a group of identical types using a single identifier",
            "A logical grouping of the names (i.e., identifiers) used within a program"
        ]
    },
    {
        "What is a overloading?": [
            "Using a single identifier to refer to multiple methods that differ by their parameters and/or return type",
            "The process of discovering and verifying the identity of a principal by examining the user's credentials against some authority",
            "The process of implicitly reclaiming unused memory by the CLR",
            "The practice of designing and developing software that will properly used all of the conventions defined for a specific locale"
        ]
    },
    {
        "What is a reflection?": [
            "A feature that allows an application to query its own metadata",
            "Using a single identifier to refer to multiple methods that differ by their parameters and/or return type",
            "A dot net technology that allows objects residing in different application domains to communicate",
            "The practice of designing and developing software that will properly used all of the conventions defined for a specific locale"
        ]
    },
    {
        "What is a SQL Server?": [
            "Microsoft's enterprise-scale relational database and member of the dot net Enterprise Server product family",
            "A full-featured, Interactive Development Environment (IDE) created by Microsoft for the development of dot net applications",
            "An object-oriented and type-safe programming language supported by Microsoft for use with the dot net Framework",
            "A set of dot net classes used to create Web-based, client-side (Web Form) and server-side (Web Service) applications"
        ]
    },
    {
        "What is Visual Studio?": [
            "A full-featured, Interactive Development Environment (IDE) created by Microsoft for the development of dot net applications",
            "Microsoft's enterprise-scale relational database and member of the dot net Enterprise Server product family",
            "An object-oriented and type-safe programming language supported by Microsoft for use with the dot net Framework",
            "A set of dot net classes used to create Web-based, client-side (Web Form) and server-side (Web Service) applications"
        ]
    },
    {
        "What is a web service?": [
            "An application hosted on a Web server that provides information and services to other network applications using the HTTP and XML protocols",
            "A set of dot net classes used to create Web-based, client-side (Web Form) and server-side (Web Service) applications",
            "A dot net technology that allows objects residing in different application domains to communicate",
            "A class used to logically organize a group of identical types using a single identifier"
        ]
    },
    {
        "What is an XML schema?": [
            "A description of the structure of an XML document. Schemas are written in XSD and support namespaces and data types",
            "An XML file with the  dot config extension that contains option settings for an application or Web site. Common configuration files include Machine dot config and Web dot config",
            "A reference type that encapsulates data (constants and fields) and behavior (methods and properties), and can contain nested types",
            "The instance of a class that is unique and self-describing"
        ]
    },
    {
        "What is authentication?": [
            "The process of discovering and verifying the identity of a principal by examining the user's credentials against some authority",
            "The process or method for configuring controls on a form or Web page to fetch data from or write data to a data source such as a database, XML file, and so on",
            "The process of implicitly reclaiming unused memory by the CLR",
            "A feature that allows an application to query its own metadata"
        ]
    },
    {
        "What is a class?": [
            "A reference type that encapsulates data (constants and fields) and behavior (methods and properties), and can contain nested types",
            "The parent class of a derived class",
            "An area of memory reserved for use by the CLR for a running programming",
            "The set of properties, methods, indexers, and events exposed by an object that allow other objects to access its data and functionality"
        ]
    },
    {
        "What is a configuration file?": [
            "An XML file with the  dot config extension that contains option settings for an application or Web site",
            "A description of the structure of an XML document",
            "The set of properties, methods, indexers, and events exposed by an object that allow other objects to access its data and functionality",
            "An area of memory reserved for use by the CLR for a running programming"
        ]
    },
    {
        "What is data binding?": [
            "The process or method for configuring controls on a form or Web page to fetch data from or write data to a data source such as a database, XML file, and so on",
            "The process of discovering and verifying the identity of a principal by examining the user's credentials against some authority",
            "The practice of designing and developing software that will properly used all of the conventions defined for a specific locale",
            "A logical grouping of the names (i.e., identifiers) used within a program"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Welcome to the Unofficial Microsoft dot net quiz. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

