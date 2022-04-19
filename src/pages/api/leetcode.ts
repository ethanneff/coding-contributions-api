import axios, { AxiosRequestConfig } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '../../types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ApiResponse>,
) {
  try {
    const { username = 'ethanneff', year = null } = request.query;
    const config: AxiosRequestConfig = {
      method: 'post',
      url: 'https://leetcode.com/graphql',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        query: `query getUserProfile($username: String!, $year: Int) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          contributions {
            points
          }
          profile {
            reputation
            ranking
          }
          userCalendar(year: $year) {
            streak
            totalActiveDays
            dccBadges {
              timestamp
              badge {
                name
                icon
              }
            }
            submissionCalendar
            activeYears
          }
          submissionCalendar
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }`,
        variables: { username, year },
      }),
    };
    const {
      data: { data },
    } = await axios(config);
    response.status(200).json(data);
  } catch (e) {
    const error = e instanceof Error ? e.message : 'unknown error';
    response.status(500).json({ error });
  }
}
