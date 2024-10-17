import prompt from "prompt";

import { mainPrompt } from "./prompts/schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function Main() {
  prompt.get(mainPrompt, async (err, choose) => {
    console.log(choose.value);
    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });
}

Main();
