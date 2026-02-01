import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'SeekerTracker',
    },
    links: [
      {
        text: 'Website',
        url: 'https://seekertracker.com',
      },
    ],
  };
}
