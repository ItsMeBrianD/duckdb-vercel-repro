import type { ServerLoadEvent } from "@sveltejs/kit";
import type { ServerLoad } from "@sveltejs/kit";
import { query } from "./db.server";

export const load: ServerLoad = ({}: ServerLoadEvent): ReturnType<ServerLoad> => {
    return {
        queryData: query("SELECT 1")
    }
}
