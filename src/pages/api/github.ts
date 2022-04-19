import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse, Contributions } from '../../types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ApiResponse>,
) {
  try {
    const { username = 'ethanneff' } = request.query;
    const url = `https://github.com/${username}`;
    const { data } = await axios.get(url, { headers: { Accept: '*/*' } });
    const $ = cheerio.load(data);
    const contributions: Contributions = {};
    $('.ContributionCalendar-day').each((_, element) => {
      const item = $(element);
      const date = String(item.attr('data-date'));
      const count = Number(item.attr('data-count'));
      if (date in contributions) {
        contributions[date] += count;
      } else if (date) {
        contributions[date] = count;
      }
    });
    response.status(200).json({ contributions });
  } catch (e) {
    const error = e instanceof Error ? e.message : 'unknown error';
    response.status(500).json({ error });
  }
}
