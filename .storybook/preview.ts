import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import "antd/dist/reset.css";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "744px",
      height: "1024px",
    },
  },
  pc: {
    name: "PC",
    styles: {
      width: "1920px",
      height: "800px",
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: "pc",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
