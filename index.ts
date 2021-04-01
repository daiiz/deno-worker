// https://deno.com/deploy/docs/hello-world
addEventListener("fetch", (event) => {
  const response = new Response("Hello World!!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
})
