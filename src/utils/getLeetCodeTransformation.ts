import { ApiResponse } from '../types';

type Submission = {
  count: number;
  submissions: number;
  total: number;
};

type LeetCodeResponse = ApiResponse & {
  profile: {
    reputation: number;
    ranking: number;
    contributions: number;
    streak: number;
    activeDays: number;
  };
  submissions: {
    all: Submission;
    easy: Submission;
    medium: Submission;
    hard: Submission;
  };
};

export const getLeetCodeTransformation = (data: unknown): LeetCodeResponse => {
  const output: LeetCodeResponse = {
    contributions: {},
    profile: {
      reputation: 0,
      ranking: 0,
      contributions: 0,
      streak: 0,
      activeDays: 0,
    },
    submissions: {
      all: { count: 0, submissions: 0, total: 0 },
      easy: { count: 0, submissions: 0, total: 0 },
      medium: { count: 0, submissions: 0, total: 0 },
      hard: { count: 0, submissions: 0, total: 0 },
    },
  };

  // profile
  output.profile.reputation = data.matchedUser.profile.reputation;
  output.profile.ranking = data.matchedUser.profile.ranking;
  output.profile.contributions = data.matchedUser.contributions.points;
  output.profile.streak = data.matchedUser.userCalendar.streak;
  output.profile.activeDays = data.matchedUser.userCalendar.totalActiveDays;

  // submissions
  for (const item of data.allQuestionsCount) {
    output.submissions[item.difficulty.toLowerCase()].total = item.count;
  }
  for (const item of data.matchedUser.submitStats.totalSubmissionNum) {
    output.submissions[item.difficulty.toLowerCase()].count = item.count;
    output.submissions[item.difficulty.toLowerCase()].submissions =
      item.submissions;
  }

  // contributions
  const calendar = JSON.parse(data.matchedUser.userCalendar.submissionCalendar);
  for (const item of Object.keys(calendar)) {
    const date = new Date(Number(item) * 1000).toISOString().split('T')[0];
    output.contributions[date] = calendar[item];
  }

  return output;
};
