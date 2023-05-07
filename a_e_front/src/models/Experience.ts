export interface IExp {
  date: string;
  company: string;
  site: string;
  title: string;
  description: {
    desc: string;
    functional: string[];
    stack: string;
  };
  _id: string;
}
