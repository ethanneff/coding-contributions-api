import axios, { AxiosRequestConfig } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse, Contributions } from '../../types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ApiResponse>,
) {
  try {
    const { username = 'ethanneff' } = request.query;
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `https://www.hackerrank.com/rest/hackers/${username}/submission_histories`,
      headers: { 'User-Agent': 'PostmanRuntime' },
    };
    const { data } = await axios(config);
    const contributions: Contributions = Object.keys(data).reduce(
      (total, item) => {
        total[item] = Number(data[item]);
        return total;
      },
      {} as Contributions,
    );
    response.status(200).json({ contributions });
  } catch (e) {
    const error = e instanceof Error ? e.message : 'unknown error';
    response.status(500).json({ error });
  }
}
