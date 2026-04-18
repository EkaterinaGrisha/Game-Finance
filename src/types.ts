export type View = 'selection' | 'game';

export interface Monster {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
  tagIcon: 'bolt' | 'water_drop' | 'favorite' | 'eco';
  primaryColor: string;
  secondaryColor: string;
}

export interface GameState {
  currentStep: number;
  coins: number;
  energy: number;
  level: number;
  selectedMonsterId: string | null;
}

export const MONSTERS: Monster[] = [
  {
    id: 'sparky',
    name: 'Sparky',
    description: 'Fast as lightning and always full of energy! Sparky leaves a trail of golden sparks.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnQHb_U9KyUAqEmGqsM3dDtviuZ_nNAt3g_lIVbNH-fu4trzWplIajSsQtOTcQ-giJ5vgkpTgxpnh_DBRCLkBgma9iS-_oXCMVL5aSDDCwVZ70sRL1DuEDrcRaqZyuFKwzBNOMOGSKtiMZDe_2OrtOT8yth-65LBXAhZdIB0bUvdpnP70SpSC1GmwJofYyh-UJbzNYgVCu1njLT-WMx8lI4lnA8O1p3blVhaszraqkOoTWDoxTNU0EfeMSg9jEO-6I3cbbOLttSOg',
    tag: 'SPEEDY',
    tagIcon: 'bolt',
    primaryColor: '#a8275a',
    secondaryColor: '#ff709f'
  },
  {
    id: 'gloop',
    name: 'Gloop',
    description: "The squishiest friend you'll ever meet. Gloop can bounce over hurdles with ease!",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnxlTXo5GQGetpdUQdeoVsOnsa1p9VupRZ797-cIYylnJEL6VVbmfNZdwZ9XK8tdGCzsgdxWUWwngI0AjDlQw1O1yaeGDylps0eRETWtTgxSx25Ru6fO2wPzIuf7d3pqoGs8ZsXVJ8h28AV_p50i2bACenjH31njeIhbk8g0_8j5bRCD22AAF0EykzRuqvvxA2NIM1S49rbTc2_yCZsGsL77QIqiYVQ2lv6E6YC40IC7fQ_edg6VVEeibEpUN3_qG_Q40AD80aCkI',
    tag: 'BOUNCY',
    tagIcon: 'water_drop',
    primaryColor: '#006384',
    secondaryColor: '#97daff'
  },
  {
    id: 'fuzzball',
    name: 'Fuzzball',
    description: '90% fluff, 10% monster, 100% adorable. Makes everyone around feel happy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMczsCzrdeGIx_p4ktS-wnsjJtudNAZoYz1yuFNNcXqMvgOM47x6trQLAo43cE2J06NgANi-kEJZmEntddwVR7XpHarw1tqpZHZ373oIVB1_W8DftsRJaBbO2dedxZzzDOk3DLCXi3ZsWamfe2S8bTHa0rEzM_2pwmGtoRNKI7Dd8Dj3S-7H33IYrNYXzdV6hJiNV6Yqbc0UJlxCElElOA2F4c3KMLaY02Hl1uthMkVwno4EC4VoznSqfHh5G9NiG07T7VVYqkc0s',
    tag: 'CUDDLY',
    tagIcon: 'favorite',
    primaryColor: '#a8275a',
    secondaryColor: '#ff709f'
  },
  {
    id: 'berry',
    name: 'Berry',
    description: 'A forest dweller who loves Star Coins. Berry has a knack for finding hidden paths.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtVM3Otx7q15y8yDhX4_D-hHFuzBMfOdZx9aEJOuCgnL2G_zdAuXz2NeXTXkZfgre4zZZ3BgnN_WYwvk1RKRKke24G4JNfObT6hhh1e87ALW9Ovyo3glLs0v5Pusn6SB450pNWL3XsoGo-YOE1sdX1Ee5xwvg1LBMQytZosfhhASXAXUEJuWfHbm9Y-BZeC_S3GugXdlRd8hxH6QhV4sJxlBmsZDM4_wtGt3mqsfRS-6elPGRTVEJ76Ddv2aUMYCQgnOY4yPV0IN0',
    tag: 'NATURE',
    tagIcon: 'eco',
    primaryColor: '#825000',
    secondaryColor: '#f7a01e'
  }
];
