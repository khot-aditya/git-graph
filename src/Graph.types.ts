export interface ContributionType {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  contributionsCollection: ContributionsCollection;
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: Week[];
}

export interface Week {
  contributionDays: ContributionDay[];
}

export interface ContributionDay {
  date: Date;
  contributionCount: number;
}
