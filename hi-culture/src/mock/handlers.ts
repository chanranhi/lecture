import { http, HttpResponse, passthrough, delay } from 'msw';

export const handlers = [
  http.get('https://api.example.com/test',async () => {
    return HttpResponse.json({
      message: 'Hello, world! I am chanran!',
    });
  }),
  http.get('https://api.example.com/:id',async ({ request, params, cookies }) => {
    const url = new URL(request.url); // 요청 url
    const searchParams = url.searchParams; // 요청 쿼리 파라미터
    const { id } = params; // 요청 매개변수
    const { token } = cookies; // 요청 쿠키
    /* 요청 본문 */
    const plaintextBody = await request.text();
    const jsonBody = await request.json();
    const arrayBufferBody = await request.arrayBuffer();

    /** 
     * new Response(JSON.stringify({ id: 'abc-123' }), {
     *   headers: {
     *     'Content-Type': 'application/json',
     *   },
     * })
     * => HttpResponse.json({ id: 'abc-123' })
    */
   try {
    await delay(500);
    if (searchParams.get('passthrough') !== null) {
      return passthrough();
    }
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    });
   } catch (error) {
    console.error(error);
    return HttpResponse.error();
   }
  }),
];