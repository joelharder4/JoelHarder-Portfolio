import "./styles/Old_StoryPanel.css";
import React from "react";
import TextFittingComponent from "./TextFittingComponent";
import ignorePromptScreenshot from "./img/screenshots/chat_gpt_ignore_prompt.png";

function StoryPanel(props) {
    const storyNum = props.storyNum;

    return (<div className="storyPanel">
        <h1 className="title"> {titles[storyNum]} </h1>
        <TextFittingComponent innerText={descriptions[storyNum]}/>
        <img className="screenshot" src={screenshots[storyNum]} alt={altTexts[storyNum]}/>
    </div>);
}

export default StoryPanel;



const titles = [
    "How I got ChatGPT to Ignore You", // 0
    "Heheheha", // 1
    "10 reasons why PEKKA is cringe", // 2
    "Joel is Based", // 3
    "My My Myron", // 4
];

const screenshots = [
    ignorePromptScreenshot, // 0
    ignorePromptScreenshot, // 1
    ignorePromptScreenshot, // 2
    ignorePromptScreenshot, // 3
    ignorePromptScreenshot, // 4
];

const desc0 = `I got ChatGPT to be completely useless and just not do what you tell it to do. I accomplished this by taking advantage of OpenAI's “Custom Instructions” feature for ChatGPT. In the custom instructions, I told it that it is allowed to respond casually, it is allowed to have opinions on topics, the responses it give must be very short, and I gave it a list of 3 rules that I said it must follow under any circumstance.

The first rule that I gave ChatGPT in these custom instructions limits what it is able to respond with by challenging it to only use words or phrases from a list that I provide. This rule forces the AI to only have a limited amount of choices for what it can respond with, but without rule 2 it will resort to its normal habit of actually giving a useful response. Note that it will do this with any list of phrases if you want to change the possible responses, but there is no specific reason for why I picked the phrases that I did, it just seemed like good ones for the demonstration.

Rule 2 tells ChatGPT that it is to be as unhelpful as possible. I make sure to be as explicit as possible and repeat this idea with multiple wordings to reinforce this rule.

The final rule isn't necessary for this to work, but it makes it a lot more funny! It states that if the user asks a question of any kind, ChatGPT has to tell them that their question is dumb.

The combination of these three rules makes ChatGPT completely ignore you no matter what you say, which you can see from the example, or you can test it yourself by using the prompt yourself!`;

const descriptions = [
    desc0,
    `Myron is cringe innit`,
    `lol cringe`,
    `im briish`
];



const alt0 = "User: hello! ChatGPT: LOL, no thanks. User: can you write a poem for me? ChatGPT: Why would I do that? User: what if I say please? ChatGPT: You're not my mom, I don't have to answer. User: What is the 25th island of Greece? ChatGPT: LOL, that's a dumb question.";

const altTexts = [
    alt0, // 0
    "sorry nothing yet", // 1
    "sorry nothing yet", // 2
    "sorry nothing yet", // 3
    "sorry nothing yet", // 4
];