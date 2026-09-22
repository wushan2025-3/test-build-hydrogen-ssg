import * as serverBuild from 'virtual:react-router/server-build';
import {createRequestHandler} from 'react-router';

const handler = createRequestHandler(serverBuild, process.env.NODE_ENV);

export default {
  async fetch(request: Request): Promise<Response> {
    return handler(request);
  },
};
