import { createMocks } from 'node-mocks-http';
import { GET } from '../route';

import nextServer from 'next/server';

jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: jest.fn().mockImplementation(() => ({
    json: jest.fn(),
  })),
}));

xdescribe('Test search GET Endpoint', () => {
  it('should get products', async () => {
    const jsonMock = jest.fn();
    jest.spyOn(nextServer, 'NextResponse').mockReturnValue({
      json: jsonMock,
    } as any);

    const { req } = createMocks({
      method: 'GET',
      params: {
        q: 'iphone',
        sort: 'title',
      },
      query: {},
    });

    const response = GET(req as any);

    // expect(response?.status).toBe(200);
  });
});
