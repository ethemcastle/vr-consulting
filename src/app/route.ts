import { vrConsultingHomeHtml } from "@/generated/vr-consulting-home";

export const dynamic = "force-static";

export async function GET() {
  return new Response(vrConsultingHomeHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
