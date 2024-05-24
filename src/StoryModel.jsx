

class StoryModel {
    // integer
    // example: 0
    storyNum;

    // string
    title = '';

    // string
    body = '';

    // string
    // example: "November 4, 2023"
    date = '';

    // string
    // example: "follow these rules: ..."
    prompt = null;

    // boolean
    hasPrompt = false;


    constructor(storyNum, title, body, date, prompt = null) {
        this.storyNum = storyNum;
        this.title = title;
        this.body = body;
        this.date = date;
        
        if (prompt) {
            this.prompt = prompt;
            this.hasPrompt = true;
        } else {
            this.hasPrompt = false;
        }
    }
}


export default StoryModel;
