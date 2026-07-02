const colors = {
  blue: "\x1b[34m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};

console.log(
  `${colors.blue}Welcome to this Bun TypeScript hello world program!${colors.reset}`,
);
console.log(`${colors.cyan}Type "quit" when you are done.${colors.reset}`);

while (true) {
  const name = prompt(`${colors.cyan}What is your name?${colors.reset}`);
  const displayName = name?.trim() || "empty";

  if (displayName.toLowerCase() === "quit") {
    console.log(`${colors.blue}Goodbye!${colors.reset}`);
    break;
  }

  if (displayName.toLowerCase() === "empty") {
    console.log(
      `${colors.green}Nice to meet you! I'd still very much like to know your name though!${colors.reset}`,
    );
  } else {
    console.log(
      `${colors.green}Hello, ${displayName}! Nice to meet you.${colors.reset}`,
    );
  }
}
