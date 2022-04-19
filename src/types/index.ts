export type Contributions = {
  [key: string]: number;
};

export type ApiResponse =
  | {
      contributions: Contributions;
    }
  | { error: string };
