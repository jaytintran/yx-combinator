type StartupTypeCard = {
  title: string;
  description: string;
  _id: number;
  author: { name: string; _id: number; image: string };
  views: number;
  category: string;
  image: string;
  _createdAt: Date;
};

export type { StartupTypeCard };
