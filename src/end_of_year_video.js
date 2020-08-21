'use strict'

const slackAction = require("./slack_action");

const PROMPT_TO_RESPONSES = {
    "nice view!": "Yeah - Maine was awesome!",
    "btw darby, what’s your favorite food?": "Data :stuck_out_tongue:",
    "darby... :man-facepalming:": "Sorry, wrong file!",
    "darby, i heard you are graduating today!": "Yes. And can I tell you a secret?",
    "sure.": "I am going to miss all my classmates a lot.",
    "thank you, darby!": "Wait...",
    "what is it?": "This can't end yet..."
}

const PROMPT_TO_VIDEOS = {
    "hey darby, how did it all start?": ["Let me show you.", "https://i.ibb.co/6tN7TL9/D1.png"],
    "seriously, what actual food do you like?": ["Here:", "https://i.ibb.co/gRQcJzq/D2.png"],
    "yummy... darby what else did you do all day other than eat?": [":tada:", "https://i.ibb.co/PMc79SW/D3.png"],
    "it looks like your days weren’t sparse at all...": ["Yes! I was very busy. Class, homework, dates, friends...", "https://i.ibb.co/hC4h5Lb/D4.png"],
    "darby... :man-facepalming:": ["This should be better", "https://i.ibb.co/zQpsHn2/D5.png"],
    "?": ["Without a special performance brought to you by the MBAn class of 2020!!!", "https://i.ibb.co/c3HWJjT/D6.png"]
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

