# Pine extensions

A marketplace for [Pine](https://github.com/mtch3n/pine): extensions that are not built into the app.

## Use it

In Pine, open Settings → Extensions → Marketplaces, type `mtch3n/pine-extensions` and press Add.
Pick an extension and press Install. Pine asks you to approve it before it runs.

## What is here

| Extension | What it does | Needs |
|---|---|---|
| `trellis` | The Trellis web UI as a panel, card counts per workspace, notices when a card moves to review or blocked | the `trellis` CLI on `PATH` |
| `keeper` | The Keeper dashboard as a panel, a count of queries waiting for approval, approval notices | the `keeper` CLI on `PATH` |
| `model-runtime` | A local model-runtime as Pine's assistant: chat, prompt help, completions, model load and unload | a model-runtime listening on `$XDG_RUNTIME_DIR/model-runtime.sock` |

## How it is built

The files under `extensions/` are build output. The sources live in the Pine repository
(`src/extensions/<id>`); `pnpm publish:marketplace <this checkout>` there rebuilds and copies them
here. `pine-marketplace.json` lists the folders Pine offers.
