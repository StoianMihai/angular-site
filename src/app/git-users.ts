export interface GitUsers {
    "total_count": number,
    "incomplete_results": boolean,
    "items": Array <
      {
        "login": string,
        "id": number,
        "node_id": string,
        "avatar_url": string,
        "gravatar_id": string,
        "url": string,
        "html_url": string,
        "followers_url": string,
        "subscriptions_url": string,
        "organizations_url": string,
        "repos_url": string,
        "received_events_url": string,
        "type": string,
        "score": number
      }
    >
}