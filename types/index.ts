export type FileWithPath = File & {
  path?: string;
};

type StatusCode =
  | "bad_request" // 400
  | "unauthorized" // 401
  | "forbidden" // 403
  | "not_found" // 404
  | "conflict" // 409
  | "rate_limit_exceeded" // 429
  | "internal_server_error"; // 500

export type RestashErrorResponse = {
  error: {
    code: StatusCode;
    message: string;
  };
  timestamp: string;
};
