import type { Preview } from "@storybook/react";
import { StoryFn } from "@storybook/react";
import React from "react";
import "../src/app/globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: StoryFn) =>
      React.createElement(
        "div",
        {
          className: `${pretendard.variable} font-pretendard`,
        },
        React.createElement(Story)
      ),
  ],
};

export default preview;
