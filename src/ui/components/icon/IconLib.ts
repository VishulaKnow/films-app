/* eslint-disable @typescript-eslint/no-explicit-any */
import { library } from "@fortawesome/fontawesome-svg-core";
import * as fa from "@fortawesome/free-solid-svg-icons";

export function registerIcons() {
    const allIcons: any[] = [];
    const obj: any = { ...fa };
    Object.keys(obj).forEach((faProp) => {
        if (faProp.startsWith("fa")) {
            allIcons.push(obj[faProp]);
        }
    });
    library.add(...allIcons);
}
