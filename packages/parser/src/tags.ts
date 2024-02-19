import type { Tag } from ".";

export const tags: Tag[] = [
  {
    type: "global",
    name: "option",
    description: "Get the value of a defined option.",
    url: "https://docs.atlas.bot/tags/global#optionname",
    aliases: [],
    requirements: [],
    expensive: false,
    arguments: [
      {
        name: "name",
        description: "The name of the option to get.",
        required: true,
        spread: false,
      },
    ],
    examples: [
      {
        note: "For this example, we'll assume the user ran the command as `/inspect input:example text user:@Sylver#1058`",
        code: `{option;input} // "example text"
{option;user} // "111372124383428608"
{user.username;{option;user}} // "Sylver"
`,
      },
      {
        note: "And for this example, we'll assume the user ran the command as `/inspect input:example text`",
        code: `{option;input} // "example text"
{option;user} // "", because the user didn't provide a user option"
`,
      },
    ],
  },
];
