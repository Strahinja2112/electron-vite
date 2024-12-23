import { Meta, StoryObj } from "@storybook/react";

import React from "react";
import ToggleTheme from "../components/toggle-theme";

const meta: Meta<typeof ToggleTheme> = {
  component: ToggleTheme,
};

export default meta;
type Story = StoryObj<typeof ToggleTheme>;

export const Default: Story = {
  render: () => <ToggleTheme />,
};
