import { QueryClient, QueryClientProvider } from "react-query";

import { withServer } from "storybook-mirage";
import { makeServer } from "../src/miragejs/server";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const withReactQuery = (StoryFn) => {
  return (
    <QueryClientProvider client={client}>
      <StoryFn />
    </QueryClientProvider>
  );
};

export const globalDecorators = [withReactQuery, withServer(makeServer)];
