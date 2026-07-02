I asked codex to build a TypeScript program that created a personalized greeting based on the users imput.
Codex solely created an `index.ts` file.
I used the command `bun run index.ts` to run my file.
Yes, Codex got it right the first time.
I did not need to ask Codex anything again.
The extra feature I added was colorizing the text outputs.
The part of TypeScript that I understand the best is the variable system.
I am still confused about what the double bar (`||`) is used for.


To get the program to keep greeting people until the user types quit, I added a feature that checked if the return output for the prompt `What is your name?` was `empty`. If it returned empty, the script would greet the user in a friendly manner and ask for their name again. While codex helped me implement the part of the script where it keeps asking for names until you type quit, I did the entirety of the coding for what happens whenever the user doesnt input anything.
