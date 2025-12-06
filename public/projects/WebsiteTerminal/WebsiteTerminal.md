This project features an interactive terminal interface embedded within my personal portfolio. It allows users to explore details about my background by navigating directories, reading text files, viewing images, and playing audio tracks using standard command-line syntax.

You can experience the live demo on the [about page](/about).

![A screenshot of the terminal](/projects/WebsiteTerminal/terminal_blank.png?raw=true "width=90")

## List of Supported Commands

```
help
clear
ls
cd [dir]
pwd
cat [file]
catdir
view [file]
play [file]
stop
loop [file]
8ball [question]
```

I created a help modal that is accessible through a floating question mark button because I realized that not all visitors are familiar with command-line interfaces. This modal walks users through the fundamental syntax and usage of commands. In order to make this button easier for non-technical users to find, I intend to improve its visual contrast and prominence in the future.

### 8ball Command

One of my personal favourite commands is `8ball`. It is named after the "magic 8-ball" toys that you shake and it gives a random answer to yes or no questions. You just have to type the command followed by a space, then you can put whatever you want following, to make your own yes or no question. It will respond with one of the predefined answers that I wrote, and I think it's usually pretty funny.

![A screenshot of the terminal](/projects/WebsiteTerminal/terminal_8ball.png?raw=true "width=60")


## How Does it Work?

A hidden input field is essential to the core interaction. Every time a user clicks anywhere in the terminal component, it shifts focus to this input using a React Ref. This eliminates the need for the user to focus on a particular text box and guarantees a smooth typing experience that is what you would intuitively expect from a terminal.

Component state is used to control command execution and history. The output of a command is appended to a cmdHistory state variable upon a successful command run. A re-render is triggered by this state update, and the updated output is shown directly beneath the previous command output, the the input is displayed again below.

![A screenshot of the terminal being used](/projects/WebsiteTerminal/terminal_example.png?raw=true "width=90")

### Folder and File Structure

The virtual file system is modeled using a single, nested JSON object. The system determines file types dynamically based on the data type of the value: objects ending in a forward slash (`/`) are treated as directories, strings represent text files, and JSX elements (such as `<img />` or `<source />`) represent images and audio files respectively.

For example, the data structure for the experience directory looks like this:
```
'experience/': {
    'education.txt': "Text in the file here",
    'work/': {
        'tulip-retail.txt': 'Text in the file here',
        'scotiabank.txt': 'Text in the file here',
    },
}
```

Similarly, the image of my dog, Ponyo, is rendered via a JSX element:
```
'ponyo.jpg': <img src='img/ponyo_silly.jpg' alt='A very silly picture of a very silly girl.'/>
```

### Additional Features

To enhance usability, I implemented tab completion for file and directory names (available on desktop). Additionally, users can cycle through their command history using the up and down arrow keys to repeat previous inputs. Currently, this history does not persist across sessions, and will be wiped out if you reload the page or start a new session.

## Secret Features

There are also some secret easter egg commands that aren't listed by default. These secret commands remain hidden unless the user runs the help with the `--secret` (or `-s`) flag.