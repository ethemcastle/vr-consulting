import { vrConsultingHomeHtml } from "@/generated/vr-consulting-home";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get("host") ?? url.host;
  const forwardedProto = request.headers.get("x-forwarded-proto");

  if (
    forwardedProto === "http" &&
    /(^|\.)vr-consulting\.al$/i.test(host)
  ) {
    url.protocol = "https:";
    url.host = host;

    return Response.redirect(url, 308);
  }

  return new Response(vrConsultingHomeHtml, {
    headers: {
      "cache-control": "no-store, max-age=0",
      "content-type": "text/html; charset=utf-8",
    },
  });
}
