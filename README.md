# Coding Contributions API

A NextJS serverless API to get a user's Github, Hackerrank, and Leetcode contributions. Hosted on vercel.com. Faster than Heroku.

<img width="1136" alt="Screen Shot 2022-04-19 at 9 09 56 AM" src="https://user-images.githubusercontent.com/2933593/164051651-8bd63e33-b74f-448c-85aa-f29af47ed6fa.png">

<img width="1136" alt="Screen Shot 2022-04-19 at 9 09 53 AM" src="https://user-images.githubusercontent.com/2933593/164051646-83b038ee-c958-4df4-b392-5d3399c07244.png">


### Endpoint

[https://coding-contributions-api.vercel.app/api](https://coding-contributions-api.vercel.app/)

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
