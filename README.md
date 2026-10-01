# Pine extensions

A marketplace for [Pine](https://github.com/aurigax-ai/pine): extensions that are not built into the app.

## Use it

In Pine, open Settings → Extensions → Marketplaces, type `aurigax-ai/pine-extensions` and press Add.
Pick an extension and press Install. Pine asks you to approve it before it runs.

## What is here

| Extension | What it does | Needs |
|---|---|---|
| `trellis` | The Trellis web UI as a panel, card counts per workspace, notices when a card moves to review or blocked | the `trellis` CLI on `PATH` |
| `keeper` | The Keeper dashboard as a panel, a count of queries waiting for approval, approval notices | the `keeper` CLI on `PATH` |
| `model-runtime` | A local model-runtime as Pine's assistant: chat, prompt help, completions, model load and unload | a model-runtime listening on `$XDG_RUNTIME_DIR/model-runtime.sock` |

## Write your own

Extensions are built with the [Pine extension SDK](https://github.com/aurigax-ai/pine-extension-sdk),
which has a starter template and `pine-extension validate` to check a folder before you publish it.

## How it is built

`extensions/<id>/` is what Pine installs: the manifest and one bundled, unminified `main.js`.
`src/` holds the TypeScript each extension was built from (`src/extensions/<id>`), with the SDK
and contract types it imports (`src/extensions/sdk`, `src/shared`), at the same paths as in the
[Pine repository](https://github.com/aurigax-ai/pine). Change them there:
`pnpm publish:marketplace <this checkout>` rebuilds and copies both folders here.
`pine-marketplace.json` lists the folders Pine offers.
