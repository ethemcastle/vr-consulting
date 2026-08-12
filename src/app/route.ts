import { vrConsultingHomeHtml } from "@/generated/vr-consulting-home";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(vrConsultingHomeHtml, {
    headers: {
      "cache-control": "no-store, max-age=0",
      "content-type": "text/html; charset=utf-8",
    },
  });
}
