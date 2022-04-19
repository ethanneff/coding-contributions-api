# Coding Contributions API

A NextJS serverless API to get a user's Github, Hackerrank, and Leetcode contributions. Hosted on vercel.com. Faster than Heroku.

### Endpoint

https://coding-contributions-api.vercel.app/api

### Example Request

```sh
curl https://coding-contributions-api.vercel.app/api/github?username=ethanneff
curl https://coding-contributions-api.vercel.app/api/leetcode?username=ethanneff
curl https://coding-contributions-api.vercel.app/api/hackerrank?username=ethanneff
```

### Example Response

```json
{
  "2018-12-23": 0,
  "2018-12-24": 5,
  "2018-12-25": 2,
  "2018-12-26": 10,
  "2018-12-27": 3,
  "2018-12-28": 24,
  "2018-12-29": 5,
  "2018-12-30": 0,
  "2018-12-31": 11,
  "2019-01-01": 8
}
```

### Develop

```sh
yarn dev
open http://localhost:4444
```

### Contribute

```sh
yarn lint
yarn test
```

### Build

```sh
yarn build
yarn start
```

### Deploy

Automatically on merge to master https://vercel.com/ethanneff/coding-contributions-api
