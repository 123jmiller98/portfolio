import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
    async fetch(event) {
        try {
            return await getAssetFromKV(event);
        } catch {
            return new Response("404 Not Found", { status: 404 });
        }
    }
};