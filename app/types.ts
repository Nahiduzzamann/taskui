export type CardData = {
  id: string;
  title: string;
  oldPrice?: string;
  newPrice: string;
  image: string;
};

export type Upccoming = {
  title: string;
  upcomingCourse: boolean;
  data: CardData[]
};
