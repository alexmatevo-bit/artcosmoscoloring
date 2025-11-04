import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    contentSources: [
        {
            module: '@stackbit/cms-contentful',
            name: 'contentful',
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
            managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
        }
    ],
});
