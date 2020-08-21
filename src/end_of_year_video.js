'use strict'

const slackAction = require("./slack_action");

const PROMPT_TO_RESPONSES = {
    "Nice view!": "Yeah - Maine was awesome!",
    "Btw Darby, what's your favorite food?": "Data :stuck_out_tongue:",
    "It looks like your days weren't sparse at all...": "Yes! I was very busy. Class, homework, dates, friends...",
    "Darby... :man-facepalming:": "Sorry, wrong file!",
    "Darby, I heard you are graduating today!": "Yes. And can I tell you a secret?",
    "Sure.": "I am going to miss all my classmates a lot.",
    "Thank you, Darby!": "Wait...",
    "What is it?": "This can't end yet...",
    "?": "Without a special performance brought to you by the MBAn class of 2020!!!"
}

const PROMPT_TO_VIDEOS = {
    "Hey darby, how did it all start?": ["Let me show you.", "https://i.ibb.co/6tN7TL9/D1.png"],
    "Seriously, what actual food do you like?": ["Here:", "https://i.ibb.co/gRQcJzq/D2.png"],
    "Yummy... darby what else did you do all day other than eat?": [":tada:", "https://i.ibb.co/PMc79SW/D3.png"],
    "It looks like your days weren’t sparse at all...": ["Look at my friends", "https://i.ibb.co/hC4h5Lb/D4.png"],
    "Darby... :man-facepalming:": ["This should be better", "https://i.ibb.co/zQpsHn2/D5.png"],
    "?": ["I will miss you", "https://i.ibb.co/c3HWJjT/D6.png"]
}

function respondToEndOfYearVideo(text, channel) {
    const cleanedText = text.replace(/\s/g, ' ').toLowerCase()

    if (cleanedText in PROMPT_TO_RESPONSES) {
        slackAction.sendMessage(PROMPT_TO_RESPONSES[cleanedText], channel, false)
    }

    if (cleanedText in PROMPT_TO_VIDEOS) {
        slackAction.sendImage(
            PROMPT_TO_VIDEOS[cleanedText][1],
            channel,
            PROMPT_TO_VIDEOS[cleanedText][0]
        )
    }
}

module.exports = {
    respondToEndOfYearVideo: respondToEndOfYearVideo,
};

