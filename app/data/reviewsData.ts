export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  favoriteItem: string;
  avatarBg: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Kavitha Ranganathan',
    location: 'Nungambakkam, Chennai',
    rating: 5,
    date: '2 days ago',
    comment: 'The Valrhona Molten Chocolate Dome is pure decadence. As someone who lives on KNK Road, this has completely redefined our evening coffee ritual. The staff is warm and the ambient lighting is perfection.',
    favoriteItem: '70% Valrhona Molten Chocolate Dome',
    avatarBg: 'bg-amber-800'
  },
  {
    id: 'rev-2',
    name: 'Arjun Swaminathan',
    location: 'Besant Nagar, Chennai',
    rating: 5,
    date: '1 week ago',
    comment: 'The Madras Molten Affogato is genius! Poured right in front of you on cold gelato with the Belgian chocolate rim. Melt By The Bay on a breezy morning after a beach run is heaven.',
    favoriteItem: 'The Madras Molten Affogato',
    avatarBg: 'bg-stone-800'
  },
  {
    id: 'rev-3',
    name: 'Divya & Sidharth',
    location: 'Alwarpet, Chennai',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best sourdough grilled melts in Tamil Nadu hands down. The cheese pull on the Truffle Mushroom Gruyère is unreal. You can taste the 48-hour fermentation in the bread.',
    favoriteItem: 'Truffle Mushroom & Aged Gruyère Melt',
    avatarBg: 'bg-amber-900'
  },
  {
    id: 'rev-4',
    name: 'Pradeep Chandran',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Yercaud Reserve pour-over blew me away. It is so rare to find cafes in Chennai treating high-altitude South Indian beans with this level of third-wave specialty roasting finesse.',
    favoriteItem: 'Yercaud Reserve Single-Origin Pour Over',
    avatarBg: 'bg-yellow-900'
  }
];
