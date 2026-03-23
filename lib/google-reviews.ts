export type GoogleReview = {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  date: string;
  rating: number;
  text: string;
  authorUrl?: string;
};

export const DEFAULT_GOOGLE_MAPS_REVIEW_URL =
  "https://maps.app.goo.gl/eL47MoMLPLseRLAZ7";

export const FALLBACK_GOOGLE_REVIEW_STATS = {
  rating: 4.8,
  userRatingsTotal: 2847,
};

export const FALLBACK_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "fallback-1",
    name: "Dyah ayu Fitri",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    verified: true,
    date: "2 ulasan",
    rating: 5,
    text: "Absolutely amazing experience! The burgers are perfectly cooked and the coffee is to die for. The ambiance is cozy and perfect for meetings or casual hangouts. Will definitely be back!",
  },
  {
    id: "fallback-2",
    name: "Permata Nadjir08",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    verified: true,
    date: "3 ulasan · 5 foto",
    rating: 5,
    text: "Best bakery in town! Their pastries are fresh every morning and the staff is incredibly friendly. The place is always clean and well-maintained. Highly recommend!",
  },
  {
    id: "fallback-3",
    name: "Mujiburrahman 99",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    verified: true,
    date: "4 ulasan · 1 foto",
    rating: 5,
    text: "Great food, great service, great atmosphere! The pizza is authentic Italian style and the pasta is homemade. Can't wait to try more items from their menu.",
  },
  {
    id: "fallback-4",
    name: "David Thompson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    verified: true,
    date: "2 weeks ago",
    rating: 5,
    text: "Perfect spot for breakfast meetings! The coffee is consistently excellent and their breakfast menu has great variety. Fast WiFi and comfortable seating too.",
  },
];
