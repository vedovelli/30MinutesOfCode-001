import { QueryClient, QueryClientProvider } from "react-query";

import { withServer } from "storybook-mirage";
import { makeServer } from "../src/miragejs/server";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // important, otherwise requests from one story might affect another story
      cacheTime: 0
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

/**
 * In case you want to be able to define queryOptions per story.
 * 
 * Your story would look like:
 * 
 * MyStory.parameters = {
 *   reactQueryOptions: {
 *     defaultOptions: { ... }
 *   }
 * }
 *  */ 
// const defaultQueryOptions = {
//   defaultOptions: {
//     queries: {
//       retry: false,
//     },
//   },
// };

// const withReactQuery = (StoryFn, { parameters: { reactQueryOptions }}) => {
//   const queryClient = new QueryClient(reactQueryOptions ?? defaultQueryOptions)
//   return (
//     <QueryClientProvider client={queryClient}>
//       <StoryFn />
//     </QueryClientProvider>
//   );
// };

export const globalDecorators = [withReactQuery, withServer(makeServer)]