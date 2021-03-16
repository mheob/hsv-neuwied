export type Match = {
  id: string;
  league: string;
  day: string;
  dateTime: string;
  home: { logo: string; name: string };
  away: { logo: string; name: string };
  result?: string;
};

export type NearestMatch = {
  date: string;
  time: string;
} & Match;
