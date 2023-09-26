import { createNextRouteHandler } from 'uploadthing/next';

import { uploadRouter } from './core';

export const { GET, POST } = createNextRouteHandler({
  router: uploadRouter,
});
