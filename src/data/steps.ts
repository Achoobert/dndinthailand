export type GuideStep = {
  slug: string;
  nav: string;
  title: string;
  description: string;
};

export const steps: GuideStep[] = [
  {
    slug: '',
    nav: 'The scene',
    title: 'Playing D&D in Thailand',
    description:
      'How the Thailand tabletop scene works for locals, expats, and travelers looking for a game.',
  },
  {
    slug: 'groups',
    nav: 'Free groups',
    title: 'Find a free group',
    description:
      'Facebook group finders for free Dungeons & Dragons games across Thailand.',
  },
  {
    slug: 'cafe',
    nav: 'Game Tree Cafe',
    title: 'Play in Chiang Mai',
    description:
      'In-person games hosted at Game Tree Cafe on Suthep Road, Chiang Mai.',
  },
  {
    slug: 'book',
    nav: 'Schedule a game',
    title: 'Book a seat',
    description:
      'Open times to schedule a hosted game with GM Isaac “Achoobert” at Game Tree Cafe.',
  },
];

export function hrefFor(slug: string): string {
  return slug === '' ? '/' : `/${slug}/`;
}

export function indexOfSlug(slug: string): number {
  const i = steps.findIndex((s) => s.slug === slug);
  return i === -1 ? 0 : i;
}
