import { Dialog, DialogActions, DialogTitle, DialogContentText, DialogContent } from '@mui/material';
import { Button } from "antd";

const HelpMenu = ({helpOpen, setHelpOpen}) => {
    return (<Dialog
      fullWidth={true}
      maxWidth='md'
      open={helpOpen}
      onClose={() => setHelpOpen(false)}
    >
      <DialogTitle style={{fontSize: '2rem'}}>Frequently Asked Questions</DialogTitle>
      <DialogContent dividers>
        <h2 className="text-xl mb-4">What is the Command Terminal?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>The command terminal is an interactive interface where you can type commands to perform specific actions, like navigating directories or viewing files. Whether you&apos;re on desktop or mobile, it is an interactive feature on this site that lets you explore and learn more about me in a creative way. To use the terminal, simply type any of the supported commands and press Enter.</DialogContentText>
        <DialogContentText>To see a list of supported commands, use the `<span className="font-bold">help</span>` command.</DialogContentText>

        
        <h2 className="text-xl mb-4 mt-8">How do I &quot;use&quot; a command?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Using a command is simple! Firstly, In the terminal, type the name of the command you want to use. Next, press Enter; this executes the command. Watch out for typos! Any extra letters or symbols before or after the command will make it so the terminal does not recognize the command.</DialogContentText>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Some commands require additional information, called arguments. Arguments are extra pieces of information that tell the command what to work on. For example: `<span className="font-bold">cd foldername</span>` includes the argument &quot;<span className="font-bold">foldername</span>&quot;, which tells the `<span className="font-bold">cd</span>` command which folder to open. Some commands also have optional arguments. For instance, `<span className="font-bold">help</span>` can be run as is, or with the optional argument `<span className="font-bold">--secret</span>` to reveal hidden commands. When arguments start with one or two dashes (`-`), they are called &quot;flags&quot;. No matter what, the command name always comes first before any arguments or flags.</DialogContentText>
        <DialogContentText>If you&apos;re unsure about the arguments a command needs, try it without any, and the terminal may guide you with an error or default behavior.</DialogContentText>

        <h2 className="text-xl mb-4 mt-8">Basics of Navigating Folders</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Folders are sometimes called Directories. To navigate through them:</DialogContentText>
        <ol className="list-decimal pl-4">
          <li><DialogContentText>List the available options: Start by using the `<span className="font-bold">ls</span>` command (a short form of the word `list`) to see all files and folders in your current location. Simply type `<span className="font-bold">ls</span>` in the terminal and press enter.</DialogContentText></li>
          <li><DialogContentText>Enter a folder: Use the cd command (which stands for `change directory`) followed by the folder name separated by a space (e.g., `<span className="font-bold">cd foldername</span>`) and press enter.</DialogContentText></li>
          <li><DialogContentText>Track your location: If you get lost, type `<span className="font-bold">pwd</span>` (which stands for `print working directory`) and press enter to display your current path.</DialogContentText></li>
        </ol>

        <h2 className="text-xl mb-4 mt-8">How do I Go Back to the Previous Folder?</h2>
        <DialogContentText>If you want to return to the folder you were in before, use the exact command `<span className="font-bold">cd ..</span>` to go up one level in the folder structure. Do not replace the `..` with a folder name, it must be exactly two periods. For example, if you&apos;re inside the folder called &quot;work/&quot; and type <span className="font-bold">cd ..</span>, you&apos;ll go back to the parent directory which is &quot;experience/&quot;. If you&apos;re unsure of your location, type `<span className="font-bold">pwd</span>` and press enter to check.</DialogContentText>

        <h2 className="text-xl mb-4 mt-8">How do I open files?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>There are three ways to open files, depending on your goal and the type of file:</DialogContentText>
        <ol className="list-decimal pl-4">
          <li><DialogContentText><span className="font-bold">cat [file]</span>: Use this command to print the content of a single text file in the terminal. It only works for text-based files.</DialogContentText></li>
          <li><DialogContentText><span className="font-bold">catdir</span>: This prints the contents of all text files in the current directory at once. This is a good choice if there are lots of small text files in a folder, or if text file names are long and slow to type out.</DialogContentText></li>
          <li><DialogContentText><span className="font-bold">view [file]</span>: Opens the file in a new window. Works for all file types. Use this command for files that require a more detailed or visual view.</DialogContentText></li>
        </ol>

        <h2 className="text-xl mb-4 mt-8">How Do I Undo?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Unlike some apps, terminals don&apos;t have an &quot;undo&quot; button to reverse commands. However, don&apos;t worry! None of the commands here modify or delete anything, so there&apos;s no risk of breaking something.</DialogContentText>
        <DialogContentText>If you feel lost or want to return to the starting point, just use the `pwd` command to see where you are, and use `<span className="font-bold">cd</span>` commands to navigate back. It&apos;s always possible to retrace your steps.</DialogContentText>

        </DialogContent>

        <DialogActions>
          <Button
            color='default'
            variant='text'
            size='large'
            onClick={() => setHelpOpen(false)}
          >
            Close
          </Button>
        </DialogActions>
    </Dialog>
    );
}

export default HelpMenu;