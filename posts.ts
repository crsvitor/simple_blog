import { DateTime } from 'luxon';

export interface Post {
  id: string;
  title: string;
  created: string;
}

export const Today:Post = {
  id: "1",
  title: "Today",
  created: DateTime.now().toISO()
}

export const ThisWeek:Post = {
  id: "2",
  title: "This Week",
  created: DateTime.now().minus({ days: 5 }).toISO()
}

export const ThisMonth:Post = {
  id: "3",
  title: "This Month",
  created: DateTime.now().minus({ weeks: 3 }).toISO()
}