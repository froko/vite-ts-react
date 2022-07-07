import { ComponentMeta, ComponentStory } from '@storybook/react';

import App from './App';

export default {
  component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const WithName = Template.bind({});
WithName.args = {
  name: 'World'
};
