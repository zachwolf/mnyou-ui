import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import { redirect } from "remix"
import { isDev } from './utils/env'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  console.log('hello world', request);
  
  if (!isDev) {
    const host = request.headers.get('host')
    const referer = request.headers.get('referer')

    if (typeof host !== 'string' || typeof referer !== 'string') {
      throw new Error('Unexpected `null`ish host, unable to continue')
    }
    
    const [protocol, route] = referer?.split(host)
    const isHttps = /^https\:\/\/$/.test(protocol)
    
    if (!isHttps) {
      redirect(`https://${host}${route}`)
    }
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
