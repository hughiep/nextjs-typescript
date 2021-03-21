export const GET_POSTS = `
  query getPosts {
    pages {
      nodes {
        title
        uri
        isFrontPage
      }
    }
  }
`;
