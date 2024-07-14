import '../src/index.css';
import type { Preview } from '@storybook/react';

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
