"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp(target, name, { get: all2[name], enumerable: true });
  };

  // node_modules/.pnpm/@aurigax-ai+pine-extension-sdk@0.5.5_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils@5_1ce77778bc56217765c7c49bcf4558dc/node_modules/@aurigax-ai/pine-extension-sdk/dist/chunk-FA6PUJIY.js
  var EXTENSION_LOCALE_FILE_MAX_BYTES = 256 * 1024;
  var EXTENSION_BASE_LOCALE = "en";
  function matchLocale(locale, available) {
    if (!locale) return void 0;
    const subtags = locale.toLowerCase().split("-");
    for (let length = subtags.length; length > 0; length--) {
      const wanted = subtags.slice(0, length).join("-");
      const exact = available.find((tag) => tag.toLowerCase() === wanted);
      if (exact) return exact;
    }
    return available.find((tag) => tag.toLowerCase().split("-")[0] === subtags[0]);
  }
  function formatMessage(template, vars = {}) {
    return template.replace(
      /\{([A-Za-z0-9_]+)\}/g,
      (placeholder, name) => Object.hasOwn(vars, name) ? String(vars[name]) : placeholder
    );
  }
  function messageIn(catalog, key) {
    return catalog && Object.hasOwn(catalog, key) ? catalog[key] : void 0;
  }
  function translatorFor(catalogs, locale) {
    const tag = matchLocale(locale, Object.keys(catalogs));
    const own2 = tag ? catalogs[tag] : void 0;
    const base = Object.hasOwn(catalogs, EXTENSION_BASE_LOCALE) ? catalogs[EXTENSION_BASE_LOCALE] : void 0;
    return (key, vars) => formatMessage(messageIn(own2, key) ?? messageIn(base, key) ?? key, vars);
  }

  // node_modules/.pnpm/@aurigax-ai+pine-extension-sdk@0.5.5_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils@5_1ce77778bc56217765c7c49bcf4558dc/node_modules/@aurigax-ai/pine-extension-sdk/dist/chunk-3EQOKSAZ.js
  var params = new URLSearchParams(location.search);
  var secret = params.get("t") ?? "";
  var context = {
    workDir: params.get("workDir") ?? "",
    workspaceId: params.get("workspaceId") ?? "",
    locale: params.get("locale") ?? "en"
  };
  async function call(command, args) {
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "content-type": "application/json", "x-pine-panel": secret },
        body: JSON.stringify({ command, args: args ?? {}, context })
      });
      return await res.json();
    } catch (err) {
      return {
        ok: false,
        error: "unreachable",
        message: err instanceof Error ? err.message : String(err)
      };
    }
  }
  function onChange(cb) {
    const events = new EventSource(`/events?t=${encodeURIComponent(secret)}`);
    events.onmessage = () => cb();
    window.addEventListener("focus", cb);
  }
  function panelTranslator(catalogs) {
    return translatorFor(catalogs, context.locale);
  }
  function icon(svg) {
    const el2 = new DOMParser().parseFromString(svg, "image/svg+xml").documentElement;
    el2.setAttribute("width", "1em");
    el2.setAttribute("height", "1em");
    el2.setAttribute("aria-hidden", "true");
    return el2;
  }
  function h(tag, attrs = {}, ...children) {
    const el2 = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (typeof value === "function") el2.addEventListener(key.slice(2).toLowerCase(), value);
      else if (value === true) el2.setAttribute(key, "");
      else if (value !== false) el2.setAttribute(key, value);
    }
    for (const child of children) {
      if (child === null || child === void 0 || child === false) continue;
      el2.append(child);
    }
    return el2;
  }
  function errorText(res) {
    if (res.ok) return "";
    return res.message ? `${res.error}: ${res.message}` : res.error;
  }

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/arrow-clockwise.svg
  var arrow_clockwise_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/></svg>';

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/caret-down.svg
  var caret_down_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/lock-simple.svg
  var lock_simple_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"/></svg>';

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/plus.svg
  var plus_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/></svg>';

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/robot.svg
  var robot_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"/></svg>';

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/user-circle.svg
  var user_circle_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"/></svg>';

  // node_modules/.pnpm/@phosphor-icons+core@2.1.1/node_modules/@phosphor-icons/core/assets/regular/x.svg
  var x_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>';

  // src/extensions/trellis/board.ts
  var DONE_COLUMN_LIMIT = 30;
  var ACTOR_ID_SHOWN = 6;
  function claimState(card, actor, nowMs) {
    if (!card.claimedBy) return "none";
    if (card.claimUntil !== void 0 && card.claimUntil <= nowMs) return "none";
    return card.claimedBy === actor ? "mine" : "other";
  }
  function actorName(actor) {
    const cut = actor.indexOf(":");
    if (cut < 0) return actor;
    const kind = actor.slice(0, cut);
    const id = actor.slice(cut + 1);
    const long = /^[0-9a-f]{12,}$/i.test(id);
    return `${kind} ${long ? id.slice(0, ACTOR_ID_SHOWN) : id}`;
  }
  function matches(card, query) {
    if (!query) return true;
    const haystack = [card.ref, card.title, card.priority, ...card.labels].join("\n").toLowerCase();
    return query.toLowerCase().split(/\s+/).filter(Boolean).every((word) => haystack.includes(word));
  }
  function shownColumn(column, query) {
    const found = column.cards.filter((card) => matches(card, query));
    const ordered = column.done ? [...found].sort((a, b) => b.updatedAt - a.updatedAt) : found;
    const cards = column.done ? ordered.slice(0, DONE_COLUMN_LIMIT) : ordered;
    return {
      name: column.name,
      done: column.done,
      total: column.cards.length,
      cards,
      hidden: ordered.length - cards.length
    };
  }
  function shownColumns(board, query) {
    return board.columns.map((column) => shownColumn(column, query.trim()));
  }
  function findCard(board, ref) {
    for (const column of board.columns) {
      const card = column.cards.find((c) => c.ref === ref);
      if (card) return card;
    }
    return null;
  }
  function moveCard(board, ref, to) {
    const card = findCard(board, ref);
    if (!card || card.column === to || !board.columns.some((c) => c.name === to)) return board;
    const moved = { ...card, column: to };
    return {
      ...board,
      columns: board.columns.map((column) => {
        const rest = column.cards.filter((c) => c.ref !== ref);
        return { ...column, cards: column.name === to ? [...rest, moved] : rest };
      })
    };
  }
  function threadItems(thread) {
    const items = [
      ...thread.comments.map((comment) => ({
        kind: "comment",
        at: comment.createdAt,
        comment
      })),
      ...thread.activity.filter((a) => a.action !== "labeled").map((activity) => ({ kind: "activity", at: activity.at, activity }))
    ];
    return items.sort((a, b) => a.at - b.at);
  }
  function entryDir(slug) {
    const cut = slug.lastIndexOf("/");
    return cut < 0 ? "" : slug.slice(0, cut);
  }
  function groupEntries(entries2, query) {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const groups = /* @__PURE__ */ new Map();
    for (const entry of entries2) {
      const haystack = [entry.slug, entry.title, entry.summary, entry.template, ...entry.tags].join("\n").toLowerCase();
      if (!words.every((word) => haystack.includes(word))) continue;
      const dir = entryDir(entry.slug);
      groups.set(dir, [...groups.get(dir) ?? [], entry]);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([dir, list2]) => ({
      dir,
      entries: [...list2].sort((a, b) => a.title.localeCompare(b.title))
    }));
  }

  // src/extensions/trellis/locales/en.json
  var en_default = {
    messages: {
      "chip.open": "{open} open",
      "chip.openClaimed": "{open} open \xB7 {claimed} claimed",
      notInstalled: "Trellis is not installed or not on PATH. Install it from https://github.com/mtch3n/trellis and restart the extension.",
      noDir: "No working directory is known for this pane yet.",
      initTitle: "Initialize Trellis project",
      initMessage: "Run `trellis init` in {dir}?",
      initDetail: "This writes a .trellis marker in that directory and creates a project named after it if none exists.",
      initConfirm: "Initialize",
      cancel: "Cancel",
      initCancelled: "Cancelled; nothing was changed.",
      initDone: "Trellis project {key} is set up in {dir}",
      initDoneNoKey: "Trellis is set up in {dir}",
      reviewTitle: "Trellis: ready for your review",
      blockedTitle: "Trellis: a card is blocked",
      cardUsage: "Give a card id, for example: pine trellis card SHOP-12",
      invalidRef: '"{raw}" is not a card id like SHOP-12',
      cardOpened: "Opened {ref}",
      noProject: "no trellis project",
      statusFailed: "Trellis could not read this project's board. Run `trellis doctor` in a terminal to see why.",
      "panel.tab.board": "Board",
      "panel.tab.vault": "Vault",
      "panel.refresh": "Refresh",
      "panel.loading": "Loading\u2026",
      "panel.project": "Project",
      "panel.board": "Board",
      "panel.newCard": "New card",
      "panel.filterCards": "Filter cards",
      "panel.filterEntries": "Filter entries",
      "panel.column.count": "{count} cards",
      "panel.column.more": "{count} more not shown",
      "panel.column.empty": "No cards",
      "panel.column.noMatch": "No cards match",
      "panel.you": "you",
      "panel.claim.mine": "Claimed by you",
      "panel.claim.other": "Claimed by {actor}",
      "panel.claim.none": "Not claimed",
      "panel.claim.until": "until {time}",
      "panel.priority.urgent": "Urgent",
      "panel.priority.high": "High",
      "panel.priority.normal": "Normal",
      "panel.priority.low": "Low",
      "panel.card.close": "Close card",
      "panel.card.column": "Column",
      "panel.card.priority": "Priority",
      "panel.card.labels": "Labels",
      "panel.card.claim": "Claim",
      "panel.card.relations": "Related cards",
      "panel.card.noBody": "No description",
      "panel.card.updated": "Updated {time}",
      "panel.card.doneMark": "done",
      "panel.action.claim": "Claim",
      "panel.action.renew": "Renew claim",
      "panel.action.release": "Release",
      "panel.thread.title": "Comments and activity",
      "panel.thread.none": "Nothing here yet",
      "panel.thread.unavailable": "Comments are read from the Trellis daemon, and it is not running. Start it with `trellis daemon start`; you can still add a comment.",
      "panel.comment.placeholder": "Write a comment",
      "panel.comment.send": "Comment",
      "panel.comment.hint": "{keys} to send",
      "panel.activity.created": "{actor} created this card",
      "panel.activity.moved": "{actor} moved this from {old} to {new}",
      "panel.activity.claimed": "{actor} claimed this",
      "panel.activity.released": "{actor} released the claim",
      "panel.activity.renewed": "{actor} renewed the claim",
      "panel.activity.edited": "{actor} edited this card",
      "panel.activity.other": "{actor}: {action}",
      "panel.rel.blocked_by": "Blocked by",
      "panel.rel.blocks": "Blocks",
      "panel.rel.resolved_by": "Resolved by",
      "panel.rel.resolves": "Resolves",
      "panel.rel.duplicate_of": "Duplicate of",
      "panel.rel.duplicated_by": "Duplicated by",
      "panel.rel.relates_to": "Related to",
      "panel.new.heading": "New card",
      "panel.new.title": "Title",
      "panel.new.body": "Description (Markdown)",
      "panel.new.column": "Column",
      "panel.new.priority": "Priority",
      "panel.new.create": "Create card",
      "panel.new.cancel": "Cancel",
      "panel.vault.empty": "This project's vault has no entries",
      "panel.vault.noMatch": "No entries match",
      "panel.vault.pick": "Pick an entry to read it",
      "panel.vault.private": "Private",
      "panel.vault.sources": "Sources",
      "panel.vault.top": "Top level",
      "panel.vault.close": "Close entry",
      "panel.vault.entries": "Vault entries",
      "panel.empty.noProject": "No Trellis project for this folder",
      "panel.empty.noProjectHint": "This workspace's folder has no .trellis marker. Pick a project above, or set one up for this folder.",
      "panel.empty.noProjects": "Trellis has no projects yet",
      "panel.empty.init": "Set up a project here",
      "panel.unavailable": "Trellis is unavailable",
      "task.heading": "Work on Trellis card {ref}: {title}",
      "task.bodyCut": "(The description is cut here; read all of it with `trellis card show`.)",
      "task.how": 'Follow the {skill} skill to work on it. Without that skill: read the card with `trellis card show {ref}`, claim it with `trellis card claim {ref}`, comment your progress with `trellis card comment {ref} --body "\u2026"`, and {last}',
      "task.line": "Work on Trellis card {ref} ({title}) with the {skill} skill. Without that skill: read it with `trellis card show {ref}`, claim it with `trellis card claim {ref}`, comment your progress with `trellis card comment {ref} --body \u2026`, and {last}",
      "task.lastReview": "when you are done move it to review with `trellis card move {ref} {column}`.",
      "task.lastReviewAny": "when you are done move it to the column where it waits for review.",
      "task.chip": "Trellis card {ref}: {title}",
      "task.noWorkspace": "Open the board from a workspace to hand a card to an agent.",
      "task.none": "No agent is working on this card.",
      "task.gone": "The agent's pane is closed.",
      "panel.work.button": "Work on this",
      "panel.work.menu": "Hand this card to an agent",
      "panel.work.send": "Send to a running agent",
      "panel.work.start": "Start a new agent",
      "panel.work.startAgent": "Start {agent}",
      "panel.work.noAgents": "No agent can be started from here.",
      "panel.work.notSent": "Not sent; no agent got the card.",
      "panel.task.started": "{agent} is working on this",
      "panel.task.sent": "An agent is working on this",
      "panel.task.show": "Show the agent's pane"
    }
  };

  // src/extensions/trellis/locales/zh-Hant.json
  var zh_Hant_default = {
    manifest: {
      description: "\u4F60\u7684 Trellis \u770B\u677F\u8207\u77E5\u8B58\u5EAB\u9762\u677F\uFF1A\u5361\u7247\u3001\u8A8D\u9818\u3001\u7559\u8A00\u8207\u689D\u76EE\uFF0C\u4E26\u5728\u5176\u4ED6\u5730\u65B9\u8B8A\u66F4\u6642\u5373\u6642\u66F4\u65B0\uFF1B\u5F9E\u770B\u677F\u628A\u5361\u7247\u4EA4\u7D66\u4EE3\u7406\u7A0B\u5F0F\uFF08\u50B3\u9001\u7D66\u57F7\u884C\u4E2D\u7684\u4EE3\u7406\u7A0B\u5F0F\u6216\u555F\u52D5\u65B0\u7684\uFF09\uFF0C\u4E26\u770B\u5230\u662F\u54EA\u500B\u4EE3\u7406\u7A0B\u5F0F\u5728\u8655\u7406\uFF1B\u9644\u5E36\u4E00\u500B\u6559\u9019\u4E9B\u4EE3\u7406\u7A0B\u5F0F\u5361\u7247\u6307\u4EE4\u7684\u6280\u80FD\uFF1B\u6BCF\u500B\u5DE5\u4F5C\u5340\u672A\u5B8C\u6210\u8207\u5DF2\u8A8D\u9818\u7684\u5361\u7247\u6578\uFF0C\u4EE5\u53CA\u4EE3\u7406\u7A0B\u5F0F\u628A\u5361\u7247\u79FB\u5230\u5BE9\u95B1\u6216\u963B\u64CB\u6642\u53EF\u958B\u555F\u8A72\u5361\u7247\u7684\u901A\u77E5\u3002",
      "commands.open.title": "Trellis\uFF1A\u958B\u555F\u770B\u677F",
      "commands.card.title": "Trellis\uFF1A\u958B\u555F\u5361\u7247",
      "commands.card.argument": "\u5361\u7247\u7DE8\u865F\uFF0C\u4F8B\u5982 SHOP-12",
      "commands.vault.title": "Trellis\uFF1A\u958B\u555F\u77E5\u8B58\u5EAB",
      "commands.init.title": "Trellis\uFF1A\u5728\u9019\u88E1\u521D\u59CB\u5316\u5C08\u6848",
      "workspaceChips.cards.title": "Trellis \u5361\u7247",
      "settings.notifyReview.title": "\u5BE9\u95B1\u6642\u901A\u77E5",
      "settings.notifyReview.description": "\u4EE3\u7406\u7A0B\u5F0F\u628A\u5361\u7247\u79FB\u5230\u5BE9\u95B1\u6B04\u6642\u767C\u51FA\u901A\u77E5",
      "settings.notifyBlocked.title": "\u963B\u64CB\u6642\u901A\u77E5",
      "settings.notifyBlocked.description": "\u4EE3\u7406\u7A0B\u5F0F\u628A\u5361\u7247\u79FB\u5230\u963B\u64CB\u6B04\u6642\u767C\u51FA\u901A\u77E5",
      "settings.refreshSeconds.title": "\u5361\u7247\u6578\u91CF\u91CD\u65B0\u6574\u7406",
      "settings.refreshSeconds.description": "\u6BCF\u6B21\u91CD\u65B0\u6574\u7406\u5361\u7247\u6578\u91CF\u7684\u9593\u9694\u6642\u9593",
      "paneChips.task.title": "Trellis \u4EFB\u52D9"
    },
    messages: {
      "chip.open": "{open} \u5F35\u672A\u5B8C\u6210",
      "chip.openClaimed": "{open} \u5F35\u672A\u5B8C\u6210 \xB7 {claimed} \u5F35\u5DF2\u8A8D\u9818",
      notInstalled: "\u5C1A\u672A\u5B89\u88DD Trellis\uFF0C\u6216\u5B83\u4E0D\u5728 PATH \u4E2D\u3002\u8ACB\u5F9E https://github.com/mtch3n/trellis \u5B89\u88DD\u5F8C\u91CD\u65B0\u555F\u52D5\u6B64\u64F4\u5145\u529F\u80FD\u3002",
      noDir: "\u5C1A\u4E0D\u77E5\u9053\u6B64\u7A97\u683C\u7684\u5DE5\u4F5C\u76EE\u9304\u3002",
      initTitle: "\u521D\u59CB\u5316 Trellis \u5C08\u6848",
      initMessage: "\u8981\u5728 {dir} \u57F7\u884C `trellis init` \u55CE\uFF1F",
      initDetail: "\u9019\u6703\u5728\u8A72\u76EE\u9304\u5BEB\u5165 .trellis \u6A19\u8A18\uFF0C\u82E5\u5C1A\u7121\u5C08\u6848\uFF0C\u6703\u4EE5\u76EE\u9304\u540D\u7A31\u5EFA\u7ACB\u4E00\u500B\u3002",
      initConfirm: "\u521D\u59CB\u5316",
      cancel: "\u53D6\u6D88",
      initCancelled: "\u5DF2\u53D6\u6D88\uFF0C\u6C92\u6709\u4EFB\u4F55\u8B8A\u66F4\u3002",
      initDone: "\u5DF2\u5728 {dir} \u8A2D\u5B9A Trellis \u5C08\u6848 {key}",
      initDoneNoKey: "\u5DF2\u5728 {dir} \u8A2D\u5B9A Trellis",
      reviewTitle: "Trellis\uFF1A\u7B49\u5F85\u4F60\u5BE9\u95B1",
      blockedTitle: "Trellis\uFF1A\u6709\u5361\u7247\u88AB\u963B\u64CB",
      cardUsage: "\u8ACB\u63D0\u4F9B\u5361\u7247\u7DE8\u865F\uFF0C\u4F8B\u5982\uFF1Apine trellis card SHOP-12",
      invalidRef: "\u300C{raw}\u300D\u4E0D\u662F\u50CF SHOP-12 \u9019\u6A23\u7684\u5361\u7247\u7DE8\u865F",
      cardOpened: "\u5DF2\u958B\u555F {ref}",
      noProject: "\u6C92\u6709 trellis \u5C08\u6848",
      statusFailed: "Trellis \u7121\u6CD5\u8B80\u53D6\u6B64\u5C08\u6848\u7684\u770B\u677F\u3002\u8ACB\u5728\u7D42\u7AEF\u6A5F\u57F7\u884C `trellis doctor` \u67E5\u770B\u539F\u56E0\u3002",
      "panel.tab.board": "\u770B\u677F",
      "panel.tab.vault": "\u77E5\u8B58\u5EAB",
      "panel.refresh": "\u91CD\u65B0\u6574\u7406",
      "panel.loading": "\u8F09\u5165\u4E2D\u2026",
      "panel.project": "\u5C08\u6848",
      "panel.board": "\u770B\u677F",
      "panel.newCard": "\u65B0\u589E\u5361\u7247",
      "panel.filterCards": "\u7BE9\u9078\u5361\u7247",
      "panel.filterEntries": "\u7BE9\u9078\u689D\u76EE",
      "panel.column.count": "{count} \u5F35\u5361\u7247",
      "panel.column.more": "\u53E6\u6709 {count} \u5F35\u672A\u986F\u793A",
      "panel.column.empty": "\u6C92\u6709\u5361\u7247",
      "panel.column.noMatch": "\u6C92\u6709\u7B26\u5408\u7684\u5361\u7247",
      "panel.you": "\u4F60",
      "panel.claim.mine": "\u7531\u4F60\u8A8D\u9818",
      "panel.claim.other": "\u7531 {actor} \u8A8D\u9818",
      "panel.claim.none": "\u5C1A\u672A\u8A8D\u9818",
      "panel.claim.until": "\u81F3 {time}",
      "panel.priority.urgent": "\u7DCA\u6025",
      "panel.priority.high": "\u9AD8",
      "panel.priority.normal": "\u4E00\u822C",
      "panel.priority.low": "\u4F4E",
      "panel.card.close": "\u95DC\u9589\u5361\u7247",
      "panel.card.column": "\u6B04\u4F4D",
      "panel.card.priority": "\u512A\u5148\u9806\u5E8F",
      "panel.card.labels": "\u6A19\u7C64",
      "panel.card.claim": "\u8A8D\u9818",
      "panel.card.relations": "\u76F8\u95DC\u5361\u7247",
      "panel.card.noBody": "\u6C92\u6709\u8AAA\u660E",
      "panel.card.updated": "\u66F4\u65B0\u65BC {time}",
      "panel.card.doneMark": "\u5DF2\u5B8C\u6210",
      "panel.action.claim": "\u8A8D\u9818",
      "panel.action.renew": "\u5EF6\u9577\u8A8D\u9818",
      "panel.action.release": "\u91CB\u51FA",
      "panel.thread.title": "\u7559\u8A00\u8207\u52D5\u614B",
      "panel.thread.none": "\u76EE\u524D\u6C92\u6709\u5167\u5BB9",
      "panel.thread.unavailable": "\u7559\u8A00\u662F\u5F9E Trellis \u5E38\u99D0\u7A0B\u5F0F\u8B80\u53D6\u7684\uFF0C\u4F46\u5B83\u6C92\u6709\u5728\u57F7\u884C\u3002\u8ACB\u7528 `trellis daemon start` \u555F\u52D5\uFF1B\u4F60\u4ECD\u7136\u53EF\u4EE5\u65B0\u589E\u7559\u8A00\u3002",
      "panel.comment.placeholder": "\u5BEB\u4E0B\u7559\u8A00",
      "panel.comment.send": "\u7559\u8A00",
      "panel.comment.hint": "{keys} \u9001\u51FA",
      "panel.activity.created": "{actor} \u5EFA\u7ACB\u4E86\u9019\u5F35\u5361\u7247",
      "panel.activity.moved": "{actor} \u5C07\u5B83\u5F9E {old} \u79FB\u5230 {new}",
      "panel.activity.claimed": "{actor} \u8A8D\u9818\u4E86\u5B83",
      "panel.activity.released": "{actor} \u91CB\u51FA\u4E86\u8A8D\u9818",
      "panel.activity.renewed": "{actor} \u5EF6\u9577\u4E86\u8A8D\u9818",
      "panel.activity.edited": "{actor} \u7DE8\u8F2F\u4E86\u9019\u5F35\u5361\u7247",
      "panel.activity.other": "{actor}\uFF1A{action}",
      "panel.rel.blocked_by": "\u88AB\u963B\u64CB\u65BC",
      "panel.rel.blocks": "\u963B\u64CB",
      "panel.rel.resolved_by": "\u7531\u6B64\u89E3\u6C7A",
      "panel.rel.resolves": "\u89E3\u6C7A",
      "panel.rel.duplicate_of": "\u91CD\u8907\u65BC",
      "panel.rel.duplicated_by": "\u88AB\u91CD\u8907",
      "panel.rel.relates_to": "\u76F8\u95DC",
      "panel.new.heading": "\u65B0\u589E\u5361\u7247",
      "panel.new.title": "\u6A19\u984C",
      "panel.new.body": "\u8AAA\u660E\uFF08Markdown\uFF09",
      "panel.new.column": "\u6B04\u4F4D",
      "panel.new.priority": "\u512A\u5148\u9806\u5E8F",
      "panel.new.create": "\u5EFA\u7ACB\u5361\u7247",
      "panel.new.cancel": "\u53D6\u6D88",
      "panel.vault.empty": "\u6B64\u5C08\u6848\u7684\u77E5\u8B58\u5EAB\u6C92\u6709\u689D\u76EE",
      "panel.vault.noMatch": "\u6C92\u6709\u7B26\u5408\u7684\u689D\u76EE",
      "panel.vault.pick": "\u9078\u64C7\u689D\u76EE\u5373\u53EF\u95B1\u8B80",
      "panel.vault.private": "\u79C1\u4EBA",
      "panel.vault.sources": "\u4F86\u6E90",
      "panel.vault.top": "\u6700\u4E0A\u5C64",
      "panel.vault.close": "\u95DC\u9589\u689D\u76EE",
      "panel.vault.entries": "\u77E5\u8B58\u5EAB\u689D\u76EE",
      "panel.empty.noProject": "\u6B64\u8CC7\u6599\u593E\u6C92\u6709 Trellis \u5C08\u6848",
      "panel.empty.noProjectHint": "\u6B64\u5DE5\u4F5C\u5340\u7684\u8CC7\u6599\u593E\u6C92\u6709 .trellis \u6A19\u8A18\u3002\u8ACB\u5728\u4E0A\u65B9\u9078\u64C7\u5C08\u6848\uFF0C\u6216\u70BA\u6B64\u8CC7\u6599\u593E\u5EFA\u7ACB\u4E00\u500B\u3002",
      "panel.empty.noProjects": "Trellis \u5C1A\u7121\u4EFB\u4F55\u5C08\u6848",
      "panel.empty.init": "\u5728\u9019\u88E1\u5EFA\u7ACB\u5C08\u6848",
      "panel.unavailable": "Trellis \u7121\u6CD5\u4F7F\u7528",
      "task.heading": "\u8655\u7406 Trellis \u5361\u7247 {ref}\uFF1A{title}",
      "task.bodyCut": "\uFF08\u8AAA\u660E\u5728\u6B64\u622A\u65B7\uFF1B\u7528 `trellis card show` \u8B80\u53D6\u5B8C\u6574\u5167\u5BB9\u3002\uFF09",
      "task.how": '\u8ACB\u4F9D\u7167 {skill} \u6280\u80FD\u8655\u7406\u9019\u5F35\u5361\u7247\u3002\u82E5\u6C92\u6709\u8A72\u6280\u80FD\uFF1A\u7528 `trellis card show {ref}` \u8B80\u53D6\u5361\u7247\uFF0C\u7528 `trellis card claim {ref}` \u8A8D\u9818\uFF0C\u7528 `trellis card comment {ref} --body "\u2026"` \u56DE\u5831\u9032\u5EA6\uFF0C\u4E26\u4E14{last}',
      "task.line": "\u7528 {skill} \u6280\u80FD\u8655\u7406 Trellis \u5361\u7247 {ref}\uFF08{title}\uFF09\u3002\u82E5\u6C92\u6709\u8A72\u6280\u80FD\uFF1A\u7528 `trellis card show {ref}` \u8B80\u53D6\uFF0C\u7528 `trellis card claim {ref}` \u8A8D\u9818\uFF0C\u7528 `trellis card comment {ref} --body \u2026` \u56DE\u5831\u9032\u5EA6\uFF0C\u4E26\u4E14{last}",
      "task.lastReview": "\u5B8C\u6210\u5F8C\u7528 `trellis card move {ref} {column}` \u79FB\u5230\u5BE9\u95B1\u3002",
      "task.lastReviewAny": "\u5B8C\u6210\u5F8C\u79FB\u5230\u7B49\u5F85\u5BE9\u95B1\u7684\u6B04\u4F4D\u3002",
      "task.chip": "Trellis \u5361\u7247 {ref}\uFF1A{title}",
      "task.noWorkspace": "\u8ACB\u5F9E\u5DE5\u4F5C\u5340\u958B\u555F\u770B\u677F\uFF0C\u624D\u80FD\u628A\u5361\u7247\u4EA4\u7D66\u4EE3\u7406\u7A0B\u5F0F\u3002",
      "task.none": "\u6C92\u6709\u4EE3\u7406\u7A0B\u5F0F\u5728\u8655\u7406\u9019\u5F35\u5361\u7247\u3002",
      "task.gone": "\u4EE3\u7406\u7A0B\u5F0F\u7684\u7A97\u683C\u5DF2\u95DC\u9589\u3002",
      "panel.work.button": "\u8655\u7406\u9019\u5F35\u5361\u7247",
      "panel.work.menu": "\u628A\u9019\u5F35\u5361\u7247\u4EA4\u7D66\u4EE3\u7406\u7A0B\u5F0F",
      "panel.work.send": "\u50B3\u9001\u7D66\u57F7\u884C\u4E2D\u7684\u4EE3\u7406\u7A0B\u5F0F",
      "panel.work.start": "\u555F\u52D5\u65B0\u7684\u4EE3\u7406\u7A0B\u5F0F",
      "panel.work.startAgent": "\u555F\u52D5 {agent}",
      "panel.work.noAgents": "\u9019\u88E1\u7121\u6CD5\u555F\u52D5\u4EE3\u7406\u7A0B\u5F0F\u3002",
      "panel.work.notSent": "\u672A\u50B3\u9001\uFF1B\u6C92\u6709\u4EE3\u7406\u7A0B\u5F0F\u6536\u5230\u9019\u5F35\u5361\u7247\u3002",
      "panel.task.started": "{agent} \u6B63\u5728\u8655\u7406",
      "panel.task.sent": "\u6709\u4EE3\u7406\u7A0B\u5F0F\u6B63\u5728\u8655\u7406",
      "panel.task.show": "\u986F\u793A\u4EE3\u7406\u7A0B\u5F0F\u7684\u7A97\u683C"
    }
  };

  // node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js
  var emptyOptions = {};
  function toString(value, options) {
    const settings = options || emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
    return one(value, includeImageAlt, includeHtml);
  }
  function one(value, includeImageAlt, includeHtml) {
    if (node(value)) {
      if ("value" in value) {
        return value.type === "html" && !includeHtml ? "" : value.value;
      }
      if (includeImageAlt && "alt" in value && value.alt) {
        return value.alt;
      }
      if ("children" in value) {
        return all(value.children, includeImageAlt, includeHtml);
      }
    }
    if (Array.isArray(value)) {
      return all(value, includeImageAlt, includeHtml);
    }
    return "";
  }
  function all(values, includeImageAlt, includeHtml) {
    const result = [];
    let index2 = -1;
    while (++index2 < values.length) {
      result[index2] = one(values[index2], includeImageAlt, includeHtml);
    }
    return result.join("");
  }
  function node(value) {
    return Boolean(value && typeof value === "object");
  }

  // node_modules/.pnpm/decode-named-character-reference@1.3.0/node_modules/decode-named-character-reference/index.dom.js
  var element = document.createElement("i");
  function decodeNamedCharacterReference(value) {
    const characterReference2 = "&" + value + ";";
    element.innerHTML = characterReference2;
    const character = element.textContent;
    if (character.charCodeAt(character.length - 1) === 59 && value !== "semi") {
      return false;
    }
    return character === characterReference2 ? false : character;
  }

  // node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/index.js
  function splice(list2, start, remove, items) {
    const end = list2.length;
    let chunkStart = 0;
    let parameters;
    if (start < 0) {
      start = -start > end ? 0 : end + start;
    } else {
      start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    if (items.length < 1e4) {
      parameters = Array.from(items);
      parameters.unshift(start, remove);
      list2.splice(...parameters);
    } else {
      if (remove) list2.splice(start, remove);
      while (chunkStart < items.length) {
        parameters = items.slice(chunkStart, chunkStart + 1e4);
        parameters.unshift(start, 0);
        list2.splice(...parameters);
        chunkStart += 1e4;
        start += 1e4;
      }
    }
  }
  function push(list2, items) {
    if (list2.length > 0) {
      splice(list2, list2.length, 0, items);
      return list2;
    }
    return items;
  }

  // node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js
  var hasOwnProperty = {}.hasOwnProperty;
  function combineExtensions(extensions) {
    const all2 = {};
    let index2 = -1;
    while (++index2 < extensions.length) {
      syntaxExtension(all2, extensions[index2]);
    }
    return all2;
  }
  function syntaxExtension(all2, extension2) {
    let hook;
    for (hook in extension2) {
      const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
      const left = maybe || (all2[hook] = {});
      const right = extension2[hook];
      let code2;
      if (right) {
        for (code2 in right) {
          if (!hasOwnProperty.call(left, code2)) left[code2] = [];
          const value = right[code2];
          constructs(
            // @ts-expect-error Looks like a list.
            left[code2],
            Array.isArray(value) ? value : value ? [value] : []
          );
        }
      }
    }
  }
  function constructs(existing, list2) {
    let index2 = -1;
    const before = [];
    while (++index2 < list2.length) {
      ;
      (list2[index2].add === "after" ? existing : before).push(list2[index2]);
    }
    splice(existing, 0, 0, before);
  }

  // node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/index.js
  function decodeNumericCharacterReference(value, base) {
    const code2 = Number.parseInt(value, base);
    if (
      // C0 except for HT, LF, FF, CR, space.
      code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || // Control character (DEL) of C0, and C1 controls.
      code2 > 126 && code2 < 160 || // Lone high surrogates and low surrogates.
      code2 > 55295 && code2 < 57344 || // Noncharacters.
      code2 > 64975 && code2 < 65008 || /* eslint-disable no-bitwise */
      (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || /* eslint-enable no-bitwise */
      // Out of range
      code2 > 1114111
    ) {
      return "\uFFFD";
    }
    return String.fromCodePoint(code2);
  }

  // node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/index.js
  function normalizeIdentifier(value) {
    return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }

  // node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/index.js
  var asciiAlpha = regexCheck(/[A-Za-z]/);
  var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
  var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
  function asciiControl(code2) {
    return (
      // Special whitespace codes (which have negative values), C0 and Control
      // character DEL
      code2 !== null && (code2 < 32 || code2 === 127)
    );
  }
  var asciiDigit = regexCheck(/\d/);
  var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
  var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
  function markdownLineEnding(code2) {
    return code2 !== null && code2 < -2;
  }
  function markdownLineEndingOrSpace(code2) {
    return code2 !== null && (code2 < 0 || code2 === 32);
  }
  function markdownSpace(code2) {
    return code2 === -2 || code2 === -1 || code2 === 32;
  }
  var unicodePunctuation = regexCheck(new RegExp("\\p{P}|\\p{S}", "u"));
  var unicodeWhitespace = regexCheck(/\s/);
  function regexCheck(regex) {
    return check;
    function check(code2) {
      return code2 !== null && code2 > -1 && regex.test(String.fromCharCode(code2));
    }
  }

  // node_modules/.pnpm/micromark-factory-space@2.1.0/node_modules/micromark-factory-space/index.js
  function factorySpace(effects, ok3, type, max) {
    const limit = max ? max - 1 : Infinity;
    let size = 0;
    return start;
    function start(code2) {
      if (markdownSpace(code2)) {
        effects.enter(type);
        return prefix(code2);
      }
      return ok3(code2);
    }
    function prefix(code2) {
      if (markdownSpace(code2) && size++ < limit) {
        effects.consume(code2);
        return prefix;
      }
      effects.exit(type);
      return ok3(code2);
    }
  }
  function factorySpaceMinMax(effects, ok3, nok, type, min, max) {
    let size = 0;
    return start;
    function start(code2) {
      if (max > 0 && markdownSpace(code2)) {
        effects.enter(type);
        return prefix(code2);
      }
      return after(code2);
    }
    function prefix(code2) {
      if (markdownSpace(code2) && size < max) {
        effects.consume(code2);
        size++;
        return prefix;
      }
      effects.exit(type);
      return after(code2);
    }
    function after(code2) {
      return size >= min ? ok3(code2) : nok(code2);
    }
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/initialize/content.js
  var content = {
    tokenize: initializeContent
  };
  function initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    let previous3;
    return contentStart;
    function afterContentStartConstruct(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, contentStart, "linePrefix");
    }
    function paragraphInitial(code2) {
      effects.enter("paragraph");
      return lineStart(code2);
    }
    function lineStart(code2) {
      const token = effects.enter("chunkText", {
        contentType: "text",
        previous: previous3
      });
      if (previous3) {
        previous3.next = token;
      }
      previous3 = token;
      return data(code2);
    }
    function data(code2) {
      if (code2 === null) {
        effects.exit("chunkText");
        effects.exit("paragraph");
        effects.consume(code2);
        return;
      }
      if (markdownLineEnding(code2)) {
        effects.consume(code2);
        effects.exit("chunkText");
        return lineStart;
      }
      effects.consume(code2);
      return data;
    }
  }

  // node_modules/.pnpm/micromark-util-edit-map@1.0.0/node_modules/micromark-util-edit-map/index.js
  var EditMap = class {
    /**
     * Create a new edit map.
     *
     * @returns
     *   New instance.
     */
    constructor() {
      this.index = /* @__PURE__ */ new Map();
      this.map = [];
    }
    /**
     * Create an edit: a remove and/or add at a certain place.
     *
     * @param {number} index
     *   Index at which to apply the edit.
     * @param {number} remove
     *   Count of items to remove at the index.
     * @param {Array<Event>} add
     *   Items to add at the index.
     * @returns {undefined}
     *   Nothing.
     */
    add(index2, remove, add) {
      addImplementation(this, index2, remove, add, false);
    }
    /**
     * Create an edit: but insert `add` before existing additions, instead of
     * after them.
     *
     * @param {number} index
     *   Index at which to apply the edit.
     * @param {number} remove
     *   Count of items to remove at the index.
     * @param {Array<Event>} add
     *   Items to add at the index.
     * @returns {undefined}
     *   Nothing.
     */
    addBefore(index2, remove, add) {
      addImplementation(this, index2, remove, add, true);
    }
    /**
     * Done, change the events.
     *
     * @param {Array<Event>} events
     *   List of events to apply the edits to.
     * @returns {undefined}
     *   Nothing.
     */
    consume(events) {
      this.map.sort(function(a, b) {
        return a[0] - b[0];
      });
      if (this.map.length === 0) {
        return;
      }
      let index2 = this.map.length;
      const vecs = [];
      while (index2 > 0) {
        index2 -= 1;
        vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]), this.map[index2][2]);
        events.length = this.map[index2][0];
      }
      vecs.push(events.slice());
      events.length = 0;
      let slice = vecs.pop();
      while (slice) {
        for (const element2 of slice) {
          events.push(element2);
        }
        slice = vecs.pop();
      }
      this.map.length = 0;
      this.index.clear();
    }
  };
  function addImplementation(editMap, at, remove, add, before) {
    if (remove === 0 && add.length === 0) {
      return;
    }
    const existing = editMap.index.get(at);
    if (existing) {
      existing[1] += remove;
      if (before) {
        add.push(...existing[2]);
        existing[2] = add;
      } else {
        existing[2].push(...add);
      }
      return;
    }
    const change = [at, remove, add];
    editMap.map.push(change);
    editMap.index.set(at, change);
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/initialize/document.js
  var document2 = {
    tokenize: initializeDocument
  };
  var containerConstruct = {
    tokenize: tokenizeContainer
  };
  function initializeDocument(effects) {
    const self = this;
    const stack = [];
    let continued = 0;
    let childFlow;
    let childToken;
    let lineStartOffset;
    return start;
    function start(code2) {
      if (continued < stack.length) {
        const item = stack[continued];
        self.containerState = item[1];
        return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code2);
      }
      return checkNewContainers(code2);
    }
    function documentContinue(code2) {
      continued++;
      if (self.containerState._closeFlow) {
        self.containerState._closeFlow = void 0;
        if (childFlow) {
          closeFlow();
        }
        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        let point3;
        while (indexBeforeFlow--) {
          if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
        }
        exitContainers(continued);
        let index2 = indexBeforeExits;
        while (index2 < self.events.length) {
          self.events[index2][1].end = {
            ...point3
          };
          index2++;
        }
        const editMap = new EditMap();
        editMap.add(indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
        editMap.add(indexBeforeExits, index2 - indexBeforeExits, []);
        editMap.consume(self.events);
        return checkNewContainers(code2);
      }
      return start(code2);
    }
    function checkNewContainers(code2) {
      if (continued === stack.length) {
        if (!childFlow) {
          return documentContinued(code2);
        }
        if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
          return flowStart(code2);
        }
        self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
      }
      self.containerState = {};
      return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code2);
    }
    function thereIsANewContainer(code2) {
      if (childFlow) {
        closeFlow();
      }
      exitContainers(continued);
      return documentContinued(code2);
    }
    function thereIsNoNewContainer(code2) {
      self.parser.lazy[self.now().line] = continued !== stack.length;
      lineStartOffset = self.now().offset;
      return flowStart(code2);
    }
    function documentContinued(code2) {
      self.containerState = {};
      return effects.attempt(containerConstruct, containerContinue, flowStart)(code2);
    }
    function containerContinue(code2) {
      continued++;
      stack.push([self.currentConstruct, self.containerState]);
      return documentContinued(code2);
    }
    function flowStart(code2) {
      if (code2 === null) {
        if (childFlow) {
          closeFlow();
        }
        exitContainers(0);
        effects.consume(code2);
        return;
      }
      childFlow = childFlow || self.parser.flow(self.now());
      effects.enter("chunkFlow", {
        _tokenizer: childFlow,
        contentType: "flow",
        previous: childToken
      });
      return flowContinue(code2);
    }
    function flowContinue(code2) {
      if (code2 === null) {
        writeToChild(effects.exit("chunkFlow"), true);
        exitContainers(0);
        effects.consume(code2);
        return;
      }
      if (markdownLineEnding(code2)) {
        effects.consume(code2);
        writeToChild(effects.exit("chunkFlow"));
        continued = 0;
        self.interrupt = void 0;
        return start;
      }
      effects.consume(code2);
      return flowContinue;
    }
    function writeToChild(token, endOfFile) {
      const stream = self.sliceStream(token);
      if (endOfFile) {
        stream.push(null);
      }
      token.previous = childToken;
      if (childToken) {
        childToken.next = token;
      }
      childToken = token;
      childFlow.defineSkip(token.start);
      childFlow.write(stream);
      if (self.parser.lazy[token.start.line]) {
        let index2 = childFlow.events.length;
        while (index2--) {
          if (
            // The token starts before the line ending…
            childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
            (!childFlow.events[index2][1].end || // …or ends after it.
            childFlow.events[index2][1].end.offset > lineStartOffset)
          ) {
            return;
          }
        }
        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        let seen;
        let point3;
        while (indexBeforeFlow--) {
          if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
            if (seen) {
              point3 = self.events[indexBeforeFlow][1].end;
              break;
            }
            seen = true;
          }
        }
        exitContainers(continued);
        index2 = indexBeforeExits;
        while (index2 < self.events.length) {
          self.events[index2][1].end = {
            ...point3
          };
          index2++;
        }
        const editMap = new EditMap();
        editMap.add(indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
        editMap.add(indexBeforeExits, index2 - indexBeforeExits, []);
        editMap.consume(self.events);
      }
    }
    function exitContainers(size) {
      let index2 = stack.length;
      while (index2-- > size) {
        const entry = stack[index2];
        self.containerState = entry[1];
        entry[0].exit.call(self, effects);
      }
      stack.length = size;
    }
    function closeFlow() {
      childFlow.write([null]);
      childToken = void 0;
      childFlow = void 0;
      self.containerState._closeFlow = void 0;
    }
  }
  function tokenizeContainer(effects, ok3, nok) {
    return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok3, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }

  // node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/index.js
  function classifyCharacter(code2) {
    if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      return 1;
    }
    if (unicodePunctuation(code2)) {
      return 2;
    }
  }

  // node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js
  function resolveAll(constructs2, events, context2) {
    const called = [];
    let index2 = -1;
    while (++index2 < constructs2.length) {
      const resolve = constructs2[index2].resolveAll;
      if (resolve && !called.includes(resolve)) {
        events = resolve(events, context2);
        called.push(resolve);
      }
    }
    return events;
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/attention.js
  var attention = {
    name: "attention",
    resolveAll: resolveAllAttention,
    tokenize: tokenizeAttention
  };
  function resolveAllAttention(events, context2) {
    let index2 = -1;
    let nextEvents;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
          context2.sliceSerialize(events[open][1]).charCodeAt(0) === context2.sliceSerialize(events[index2][1]).charCodeAt(0)) {
            if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
              continue;
            }
            const use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
            const start = {
              ...events[open][1].end
            };
            const end = {
              ...events[index2][1].start
            };
            movePoint(start, -use);
            movePoint(end, use);
            const openingSequence = {
              type: use > 1 ? "strongSequence" : "emphasisSequence",
              start,
              end: {
                ...events[open][1].end
              }
            };
            const closingSequence = {
              type: use > 1 ? "strongSequence" : "emphasisSequence",
              start: {
                ...events[index2][1].start
              },
              end
            };
            const text4 = {
              type: use > 1 ? "strongText" : "emphasisText",
              start: {
                ...events[open][1].end
              },
              end: {
                ...events[index2][1].start
              }
            };
            const group = {
              type: use > 1 ? "strong" : "emphasis",
              start: {
                ...openingSequence.start
              },
              end: {
                ...closingSequence.end
              }
            };
            events[open][1].end = {
              ...openingSequence.start
            };
            events[index2][1].start = {
              ...closingSequence.end
            };
            nextEvents = [];
            if (events[open][1].end.offset - events[open][1].start.offset) {
              nextEvents = push(nextEvents, [["enter", events[open][1], context2], ["exit", events[open][1], context2]]);
            }
            nextEvents = push(nextEvents, [["enter", group, context2], ["enter", openingSequence, context2], ["exit", openingSequence, context2], ["enter", text4, context2]]);
            nextEvents = push(nextEvents, resolveAll(context2.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context2));
            nextEvents = push(nextEvents, [["exit", text4, context2], ["enter", closingSequence, context2], ["exit", closingSequence, context2], ["exit", group, context2]]);
            let offset = 0;
            if (events[index2][1].end.offset - events[index2][1].start.offset) {
              offset = 2;
              nextEvents = push(nextEvents, [["enter", events[index2][1], context2], ["exit", events[index2][1], context2]]);
            }
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - offset - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "attentionSequence") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeAttention(effects, ok3) {
    const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
    const previous3 = this.previous;
    const before = classifyCharacter(previous3);
    let marker;
    return start;
    function start(code2) {
      marker = code2;
      effects.enter("attentionSequence");
      return inside(code2);
    }
    function inside(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        return inside;
      }
      const token = effects.exit("attentionSequence");
      const after = classifyCharacter(code2);
      const open = !after || after === 2 && before || attentionMarkers2.includes(code2) && code2 !== 42 && code2 !== 95;
      const close = !before || before === 2 && after || attentionMarkers2.includes(previous3) && previous3 !== 42 && previous3 !== 95;
      token._open = Boolean(marker === 42 ? open : open && (before || !close));
      token._close = Boolean(marker === 42 ? close : close && (after || !open));
      return ok3(code2);
    }
  }
  function movePoint(point3, offset) {
    point3.column += offset;
    point3.offset += offset;
    point3._bufferIndex += offset;
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/autolink.js
  var autolink = {
    name: "autolink",
    tokenize: tokenizeAutolink
  };
  function tokenizeAutolink(effects, ok3, nok) {
    let size = 0;
    return start;
    function start(code2) {
      effects.enter("autolink");
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.enter("autolinkProtocol");
      return open;
    }
    function open(code2) {
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return schemeOrEmailAtext;
      }
      if (code2 === 64) {
        return nok(code2);
      }
      return emailAtext(code2);
    }
    function schemeOrEmailAtext(code2) {
      if (code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) {
        size = 1;
        return schemeInsideOrEmailAtext(code2);
      }
      return emailAtext(code2);
    }
    function schemeInsideOrEmailAtext(code2) {
      if (code2 === 58) {
        effects.consume(code2);
        size = 0;
        return urlInside;
      }
      if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
        effects.consume(code2);
        return schemeInsideOrEmailAtext;
      }
      size = 0;
      return emailAtext(code2);
    }
    function urlInside(code2) {
      if (code2 === 62) {
        effects.exit("autolinkProtocol");
        effects.enter("autolinkMarker");
        effects.consume(code2);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok3;
      }
      if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
        return nok(code2);
      }
      effects.consume(code2);
      return urlInside;
    }
    function emailAtext(code2) {
      if (code2 === 64) {
        effects.consume(code2);
        return emailAtSignOrDot;
      }
      if (asciiAtext(code2)) {
        effects.consume(code2);
        return emailAtext;
      }
      return nok(code2);
    }
    function emailAtSignOrDot(code2) {
      return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
    }
    function emailLabel(code2) {
      if (code2 === 46) {
        effects.consume(code2);
        size = 0;
        return emailAtSignOrDot;
      }
      if (code2 === 62) {
        effects.exit("autolinkProtocol").type = "autolinkEmail";
        effects.enter("autolinkMarker");
        effects.consume(code2);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok3;
      }
      return emailValue(code2);
    }
    function emailValue(code2) {
      if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
        const next = code2 === 45 ? emailValue : emailLabel;
        effects.consume(code2);
        return next;
      }
      return nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/blank-line.js
  var blankLine = {
    partial: true,
    tokenize: tokenizeBlankLine
  };
  function tokenizeBlankLine(effects, ok3, nok) {
    return start;
    function start(code2) {
      return markdownSpace(code2) ? factorySpace(effects, after, "linePrefix")(code2) : after(code2);
    }
    function after(code2) {
      return code2 === null || markdownLineEnding(code2) ? ok3(code2) : nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/block-quote.js
  var blockQuote = {
    continuation: {
      tokenize: tokenizeBlockQuoteContinuation
    },
    exit,
    name: "blockQuote",
    tokenize: tokenizeBlockQuoteStart
  };
  function tokenizeBlockQuoteStart(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code2) {
      if (code2 === 62) {
        const state = self.containerState;
        if (!state.open) {
          effects.enter("blockQuote", {
            _container: true
          });
          state.open = true;
        }
        effects.enter("blockQuotePrefix");
        effects.enter("blockQuoteMarker");
        effects.consume(code2);
        effects.exit("blockQuoteMarker");
        return after;
      }
      return nok(code2);
    }
    function after(code2) {
      if (markdownSpace(code2)) {
        effects.enter("blockQuotePrefixWhitespace");
        effects.consume(code2);
        effects.exit("blockQuotePrefixWhitespace");
        effects.exit("blockQuotePrefix");
        return ok3;
      }
      effects.exit("blockQuotePrefix");
      return ok3(code2);
    }
  }
  function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
    const self = this;
    return contStart;
    function contStart(code2) {
      if (markdownSpace(code2)) {
        return factorySpace(effects, contBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
      }
      return contBefore(code2);
    }
    function contBefore(code2) {
      return effects.attempt(blockQuote, ok3, nok)(code2);
    }
  }
  function exit(effects) {
    effects.exit("blockQuote");
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/character-escape.js
  var characterEscape = {
    name: "characterEscape",
    tokenize: tokenizeCharacterEscape
  };
  function tokenizeCharacterEscape(effects, ok3, nok) {
    return start;
    function start(code2) {
      effects.enter("characterEscape");
      effects.enter("escapeMarker");
      effects.consume(code2);
      effects.exit("escapeMarker");
      return inside;
    }
    function inside(code2) {
      if (asciiPunctuation(code2)) {
        effects.enter("characterEscapeValue");
        effects.consume(code2);
        effects.exit("characterEscapeValue");
        effects.exit("characterEscape");
        return ok3;
      }
      return nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/character-reference.js
  var characterReference = {
    name: "characterReference",
    tokenize: tokenizeCharacterReference
  };
  function tokenizeCharacterReference(effects, ok3, nok) {
    const self = this;
    let size = 0;
    let max;
    let test;
    return start;
    function start(code2) {
      effects.enter("characterReference");
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      return open;
    }
    function open(code2) {
      if (code2 === 35) {
        effects.enter("characterReferenceMarkerNumeric");
        effects.consume(code2);
        effects.exit("characterReferenceMarkerNumeric");
        return numeric;
      }
      effects.enter("characterReferenceValue");
      max = 31;
      test = asciiAlphanumeric;
      return value(code2);
    }
    function numeric(code2) {
      if (code2 === 88 || code2 === 120) {
        effects.enter("characterReferenceMarkerHexadecimal");
        effects.consume(code2);
        effects.exit("characterReferenceMarkerHexadecimal");
        effects.enter("characterReferenceValue");
        max = 6;
        test = asciiHexDigit;
        return value;
      }
      effects.enter("characterReferenceValue");
      max = 7;
      test = asciiDigit;
      return value(code2);
    }
    function value(code2) {
      if (code2 === 59 && size) {
        const token = effects.exit("characterReferenceValue");
        if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
          return nok(code2);
        }
        effects.enter("characterReferenceMarker");
        effects.consume(code2);
        effects.exit("characterReferenceMarker");
        effects.exit("characterReference");
        return ok3;
      }
      if (test(code2) && size++ < max) {
        effects.consume(code2);
        return value;
      }
      return nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/partial-non-lazy-continuation.js
  var nonLazyContinuation = {
    partial: true,
    tokenize: tokenizeNonLazyContinuation
  };
  function tokenizeNonLazyContinuation(effects, ok3, nok) {
    const self = this;
    return start;
    function start(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return after;
    }
    function after(code2) {
      return self.parser.lazy[self.now().line] ? nok(code2) : ok3(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/code-fenced.js
  var codeFenced = {
    concrete: true,
    name: "codeFenced",
    tokenize: tokenizeCodeFenced
  };
  function tokenizeCodeFenced(effects, ok3, nok) {
    const self = this;
    const closeStart = {
      partial: true,
      tokenize: tokenizeCloseStart
    };
    let initialPrefix = 0;
    let sizeOpen = 0;
    let marker;
    return start;
    function start(code2) {
      return beforeSequenceOpen(code2);
    }
    function beforeSequenceOpen(code2) {
      const tail = self.events[self.events.length - 1];
      initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
      marker = code2;
      effects.enter("codeFenced");
      effects.enter("codeFencedFence");
      effects.enter("codeFencedFenceSequence");
      return sequenceOpen(code2);
    }
    function sequenceOpen(code2) {
      if (code2 === marker) {
        sizeOpen++;
        effects.consume(code2);
        return sequenceOpen;
      }
      if (sizeOpen < 3) {
        return nok(code2);
      }
      effects.exit("codeFencedFenceSequence");
      return markdownSpace(code2) ? factorySpace(effects, infoBefore, "whitespace")(code2) : infoBefore(code2);
    }
    function infoBefore(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok3(code2) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code2);
      }
      effects.enter("codeFencedFenceInfo");
      effects.enter("chunkString", {
        contentType: "string"
      });
      return info(code2);
    }
    function info(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceInfo");
        return infoBefore(code2);
      }
      if (markdownSpace(code2)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceInfo");
        return factorySpace(effects, metaBefore, "whitespace")(code2);
      }
      if (code2 === 96 && code2 === marker) {
        return nok(code2);
      }
      effects.consume(code2);
      return info;
    }
    function metaBefore(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return infoBefore(code2);
      }
      effects.enter("codeFencedFenceMeta");
      effects.enter("chunkString", {
        contentType: "string"
      });
      return meta(code2);
    }
    function meta(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceMeta");
        return infoBefore(code2);
      }
      if (code2 === 96 && code2 === marker) {
        return nok(code2);
      }
      effects.consume(code2);
      return meta;
    }
    function atNonLazyBreak(code2) {
      return effects.attempt(closeStart, after, contentBefore)(code2);
    }
    function contentBefore(code2) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return contentStart;
    }
    function contentStart(code2) {
      return initialPrefix > 0 && markdownSpace(code2) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code2) : beforeContentChunk(code2);
    }
    function beforeContentChunk(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code2);
      }
      effects.enter("codeFlowValue");
      return contentChunk(code2);
    }
    function contentChunk(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("codeFlowValue");
        return beforeContentChunk(code2);
      }
      effects.consume(code2);
      return contentChunk;
    }
    function after(code2) {
      effects.exit("codeFenced");
      return ok3(code2);
    }
    function tokenizeCloseStart(effects2, ok4, nok2) {
      let size = 0;
      return startBefore;
      function startBefore(code2) {
        effects2.enter("lineEnding");
        effects2.consume(code2);
        effects2.exit("lineEnding");
        return start2;
      }
      function start2(code2) {
        effects2.enter("codeFencedFence");
        return markdownSpace(code2) ? factorySpace(effects2, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2) : beforeSequenceClose(code2);
      }
      function beforeSequenceClose(code2) {
        if (code2 === marker) {
          effects2.enter("codeFencedFenceSequence");
          return sequenceClose(code2);
        }
        return nok2(code2);
      }
      function sequenceClose(code2) {
        if (code2 === marker) {
          size++;
          effects2.consume(code2);
          return sequenceClose;
        }
        if (size >= sizeOpen) {
          effects2.exit("codeFencedFenceSequence");
          return markdownSpace(code2) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code2) : sequenceCloseAfter(code2);
        }
        return nok2(code2);
      }
      function sequenceCloseAfter(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects2.exit("codeFencedFence");
          return ok4(code2);
        }
        return nok2(code2);
      }
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/code-indented.js
  var codeIndented = {
    name: "codeIndented",
    tokenize: tokenizeCodeIndented
  };
  var furtherStart = {
    partial: true,
    tokenize: tokenizeFurtherStart
  };
  function tokenizeCodeIndented(effects, ok3, nok) {
    return start;
    function start(code2) {
      effects.enter("codeIndented");
      return factorySpaceMinMax(effects, atBreak, nok, "linePrefix", 4, 4)(code2);
    }
    function atBreak(code2) {
      if (code2 === null) {
        return after(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.attempt(furtherStart, atBreak, after)(code2);
      }
      effects.enter("codeFlowValue");
      return inside(code2);
    }
    function inside(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("codeFlowValue");
        return atBreak(code2);
      }
      effects.consume(code2);
      return inside;
    }
    function after(code2) {
      effects.exit("codeIndented");
      return ok3(code2);
    }
  }
  function tokenizeFurtherStart(effects, ok3, nok) {
    const self = this;
    return furtherStart2;
    function furtherStart2(code2) {
      if (self.parser.lazy[self.now().line]) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return furtherStart2;
      }
      return factorySpaceMinMax(effects, ok3, onNotEnoughPrefix, "linePrefix", 4, 4)(code2);
    }
    function onNotEnoughPrefix(code2) {
      return markdownLineEnding(code2) ? furtherStart2(code2) : nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/code-text.js
  var codeText = {
    name: "codeText",
    previous,
    resolve: resolveCodeText,
    tokenize: tokenizeCodeText
  };
  function resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    let index2;
    let enter;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
      index2 = headEnterIndex;
      while (++index2 < tailExitIndex) {
        if (events[index2][1].type === "codeTextData") {
          events[headEnterIndex][1].type = "codeTextPadding";
          events[tailExitIndex][1].type = "codeTextPadding";
          headEnterIndex += 2;
          tailExitIndex -= 2;
          break;
        }
      }
    }
    index2 = headEnterIndex - 1;
    tailExitIndex++;
    while (++index2 <= tailExitIndex) {
      if (enter === void 0) {
        if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
          enter = index2;
        }
      } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
        events[enter][1].type = "codeTextData";
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          tailExitIndex -= index2 - enter - 2;
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return events;
  }
  function previous(code2) {
    return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function tokenizeCodeText(effects, ok3, nok) {
    const self = this;
    let sizeOpen = 0;
    let size;
    let token;
    return start;
    function start(code2) {
      effects.enter("codeText");
      effects.enter("codeTextSequence");
      return sequenceOpen(code2);
    }
    function sequenceOpen(code2) {
      if (code2 === 96) {
        effects.consume(code2);
        sizeOpen++;
        return sequenceOpen;
      }
      effects.exit("codeTextSequence");
      return between(code2);
    }
    function between(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 32) {
        effects.enter("space");
        effects.consume(code2);
        effects.exit("space");
        return between;
      }
      if (code2 === 96) {
        token = effects.enter("codeTextSequence");
        size = 0;
        return sequenceClose(code2);
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return between;
      }
      effects.enter("codeTextData");
      return data(code2);
    }
    function data(code2) {
      if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
        effects.exit("codeTextData");
        return between(code2);
      }
      effects.consume(code2);
      return data;
    }
    function sequenceClose(code2) {
      if (code2 === 96) {
        effects.consume(code2);
        size++;
        return sequenceClose;
      }
      if (size === sizeOpen) {
        effects.exit("codeTextSequence");
        effects.exit("codeText");
        return ok3(code2);
      }
      token.type = "codeTextData";
      return data(code2);
    }
  }

  // node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/lib/splice-buffer.js
  var SpliceBuffer = class {
    /**
     * @param {ReadonlyArray<T> | null | undefined} [initial]
     *   Initial items (optional).
     * @returns
     *   Splice buffer.
     */
    constructor(initial) {
      this.left = initial ? [...initial] : [];
      this.right = [];
    }
    /**
     * Array access;
     * does not move the cursor.
     *
     * @param {number} index
     *   Index.
     * @return {T}
     *   Item.
     */
    get(index2) {
      if (index2 < 0 || index2 >= this.left.length + this.right.length) {
        throw new RangeError("Cannot access index `" + index2 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      }
      if (index2 < this.left.length) return this.left[index2];
      return this.right[this.right.length - index2 + this.left.length - 1];
    }
    /**
     * The length of the splice buffer, one greater than the largest index in the
     * array.
     */
    get length() {
      return this.left.length + this.right.length;
    }
    /**
     * Remove and return `list[0]`;
     * moves the cursor to `0`.
     *
     * @returns {T | undefined}
     *   Item, optional.
     */
    shift() {
      this.setCursor(0);
      return this.right.pop();
    }
    /**
     * Slice the buffer to get an array;
     * does not move the cursor.
     *
     * @param {number} start
     *   Start.
     * @param {number | null | undefined} [end]
     *   End (optional).
     * @returns {Array<T>}
     *   Array of items.
     */
    slice(start, end) {
      const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
      if (stop < this.left.length) {
        return this.left.slice(start, stop);
      }
      if (start > this.left.length) {
        return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
      }
      return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
    }
    /**
     * Mimics the behavior of Array.prototype.splice() except for the change of
     * interface necessary to avoid segfaults when patching in very large arrays.
     *
     * This operation moves cursor is moved to `start` and results in the cursor
     * placed after any inserted items.
     *
     * @param {number} start
     *   Start;
     *   zero-based index at which to start changing the array;
     *   negative numbers count backwards from the end of the array and values
     *   that are out-of bounds are clamped to the appropriate end of the array.
     * @param {number | null | undefined} [deleteCount=0]
     *   Delete count (default: `0`);
     *   maximum number of elements to delete, starting from start.
     * @param {Array<T> | null | undefined} [items=[]]
     *   Items to include in place of the deleted items (default: `[]`).
     * @return {Array<T>}
     *   Any removed items.
     */
    splice(start, deleteCount, items) {
      const count = deleteCount || 0;
      this.setCursor(Math.trunc(start));
      const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
      if (items) chunkedPush(this.left, items);
      return removed.reverse();
    }
    /**
     * Remove and return the highest-numbered item in the array, so
     * `list[list.length - 1]`;
     * Moves the cursor to `length`.
     *
     * @returns {T | undefined}
     *   Item, optional.
     */
    pop() {
      this.setCursor(Number.POSITIVE_INFINITY);
      return this.left.pop();
    }
    /**
     * Inserts a single item to the high-numbered side of the array;
     * moves the cursor to `length`.
     *
     * @param {T} item
     *   Item.
     * @returns {undefined}
     *   Nothing.
     */
    push(item) {
      this.setCursor(Number.POSITIVE_INFINITY);
      this.left.push(item);
    }
    /**
     * Inserts many items to the high-numbered side of the array.
     * Moves the cursor to `length`.
     *
     * @param {Array<T>} items
     *   Items.
     * @returns {undefined}
     *   Nothing.
     */
    pushMany(items) {
      this.setCursor(Number.POSITIVE_INFINITY);
      chunkedPush(this.left, items);
    }
    /**
     * Inserts a single item to the low-numbered side of the array;
     * Moves the cursor to `0`.
     *
     * @param {T} item
     *   Item.
     * @returns {undefined}
     *   Nothing.
     */
    unshift(item) {
      this.setCursor(0);
      this.right.push(item);
    }
    /**
     * Inserts many items to the low-numbered side of the array;
     * moves the cursor to `0`.
     *
     * @param {Array<T>} items
     *   Items.
     * @returns {undefined}
     *   Nothing.
     */
    unshiftMany(items) {
      this.setCursor(0);
      chunkedPush(this.right, items.reverse());
    }
    /**
     * Move the cursor to a specific position in the array. Requires
     * time proportional to the distance moved.
     *
     * If `n < 0`, the cursor will end up at the beginning.
     * If `n > length`, the cursor will end up at the end.
     *
     * @param {number} n
     *   Position.
     * @return {undefined}
     *   Nothing.
     */
    setCursor(n) {
      if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
      if (n < this.left.length) {
        const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
        chunkedPush(this.right, removed.reverse());
      } else {
        const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        chunkedPush(this.left, removed.reverse());
      }
    }
  };
  function chunkedPush(list2, right) {
    let chunkStart = 0;
    if (right.length < 1e4) {
      list2.push(...right);
    } else {
      while (chunkStart < right.length) {
        list2.push(...right.slice(chunkStart, chunkStart + 1e4));
        chunkStart += 1e4;
      }
    }
  }

  // node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/index.js
  function subtokenize(eventsArray) {
    const jumps = {};
    let index2 = -1;
    let event;
    let lineIndex;
    let otherIndex;
    let otherEvent;
    let parameters;
    let subevents;
    let more;
    const events = new SpliceBuffer(eventsArray);
    while (++index2 < events.length) {
      while (index2 in jumps) {
        index2 = jumps[index2];
      }
      event = events.get(index2);
      if (index2 && event[1].type === "chunkFlow" && events.get(index2 - 1)[1].type === "listItemPrefix") {
        subevents = event[1]._tokenizer.events;
        otherIndex = 0;
        if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
          otherIndex += 2;
        }
        if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
          while (++otherIndex < subevents.length) {
            if (subevents[otherIndex][1].type === "content") {
              break;
            }
            if (subevents[otherIndex][1].type === "chunkText") {
              subevents[otherIndex][1]._isInFirstContentOfListItem = true;
              otherIndex++;
            }
          }
        }
      }
      if (event[0] === "enter") {
        if (event[1].contentType) {
          Object.assign(jumps, subcontent(events, index2));
          index2 = jumps[index2];
          more = true;
        }
      } else if (event[1]._container) {
        otherIndex = index2;
        lineIndex = void 0;
        while (otherIndex--) {
          otherEvent = events.get(otherIndex);
          if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
            if (otherEvent[0] === "enter") {
              if (lineIndex) {
                events.get(lineIndex)[1].type = "lineEndingBlank";
              }
              otherEvent[1].type = "lineEnding";
              lineIndex = otherIndex;
            }
          } else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") {
          } else {
            break;
          }
        }
        if (lineIndex) {
          event[1].end = {
            ...events.get(lineIndex)[1].start
          };
          parameters = events.slice(lineIndex, index2);
          parameters.unshift(event);
          events.splice(lineIndex, index2 - lineIndex + 1, parameters);
        }
      }
    }
    splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
    return !more;
  }
  function subcontent(events, eventIndex) {
    const token = events.get(eventIndex)[1];
    const context2 = events.get(eventIndex)[2];
    let startPosition = eventIndex - 1;
    const startPositions = [];
    let tokenizer = token._tokenizer;
    if (!tokenizer) {
      tokenizer = context2.parser[token.contentType](token.start);
      if (token._contentTypeTextTrailing) {
        tokenizer._contentTypeTextTrailing = true;
      }
    }
    const childEvents = tokenizer.events;
    const jumps = [];
    const gaps = {};
    let stream;
    let previous3;
    let index2 = -1;
    let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [start];
    while (current) {
      while (events.get(++startPosition)[1] !== current) {
      }
      startPositions.push(startPosition);
      if (!current._tokenizer) {
        stream = context2.sliceStream(current);
        if (!current.next) {
          stream.push(null);
        }
        if (previous3) {
          tokenizer.defineSkip(current.start);
        }
        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = true;
        }
        tokenizer.write(stream);
        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = void 0;
        }
      }
      previous3 = current;
      current = current.next;
    }
    current = token;
    while (++index2 < childEvents.length) {
      if (
        // Find a void token that includes a break.
        childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
      ) {
        start = index2 + 1;
        breaks.push(start);
        current._tokenizer = void 0;
        current.previous = void 0;
        current = current.next;
      }
    }
    tokenizer.events = [];
    if (current) {
      current._tokenizer = void 0;
      current.previous = void 0;
    } else {
      breaks.pop();
    }
    index2 = breaks.length;
    while (index2--) {
      const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
      const start2 = startPositions.pop();
      jumps.push([start2, start2 + slice.length - 1]);
      events.splice(start2, 2, slice);
    }
    jumps.reverse();
    index2 = -1;
    while (++index2 < jumps.length) {
      gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
      adjust += jumps[index2][1] - jumps[index2][0] - 1;
    }
    return gaps;
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/content.js
  var content2 = {
    resolve: resolveContent,
    tokenize: tokenizeContent
  };
  var continuationConstruct = {
    partial: true,
    tokenize: tokenizeContinuation
  };
  function resolveContent(events) {
    subtokenize(events);
    return events;
  }
  function tokenizeContent(effects, ok3) {
    let previous3;
    return chunkStart;
    function chunkStart(code2) {
      effects.enter("content");
      previous3 = effects.enter("chunkContent", {
        contentType: "content"
      });
      return chunkInside(code2);
    }
    function chunkInside(code2) {
      if (code2 === null) {
        return contentEnd(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.check(continuationConstruct, contentContinue, contentEnd)(code2);
      }
      effects.consume(code2);
      return chunkInside;
    }
    function contentEnd(code2) {
      effects.exit("chunkContent");
      effects.exit("content");
      return ok3(code2);
    }
    function contentContinue(code2) {
      effects.consume(code2);
      effects.exit("chunkContent");
      previous3.next = effects.enter("chunkContent", {
        contentType: "content",
        previous: previous3
      });
      previous3 = previous3.next;
      return chunkInside;
    }
  }
  function tokenizeContinuation(effects, ok3, nok) {
    const self = this;
    return startLookahead;
    function startLookahead(code2) {
      effects.exit("chunkContent");
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, prefixed, "linePrefix");
    }
    function prefixed(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return nok(code2);
      }
      const tail = self.events[self.events.length - 1];
      if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
        return ok3(code2);
      }
      return effects.interrupt(self.parser.constructs.flow, nok, ok3)(code2);
    }
  }

  // node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/index.js
  function factoryDestination(effects, ok3, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    function start(code2) {
      if (code2 === 60) {
        effects.enter(type);
        effects.enter(literalType);
        effects.enter(literalMarkerType);
        effects.consume(code2);
        effects.exit(literalMarkerType);
        return enclosedBefore;
      }
      if (code2 === null || code2 === 32 || code2 === 41 || asciiControl(code2)) {
        return nok(code2);
      }
      effects.enter(type);
      effects.enter(rawType);
      effects.enter(stringType);
      effects.enter("chunkString", {
        contentType: "string"
      });
      return raw(code2);
    }
    function enclosedBefore(code2) {
      if (code2 === 62) {
        effects.enter(literalMarkerType);
        effects.consume(code2);
        effects.exit(literalMarkerType);
        effects.exit(literalType);
        effects.exit(type);
        return ok3;
      }
      effects.enter(stringType);
      effects.enter("chunkString", {
        contentType: "string"
      });
      return enclosed(code2);
    }
    function enclosed(code2) {
      if (code2 === 62) {
        effects.exit("chunkString");
        effects.exit(stringType);
        return enclosedBefore(code2);
      }
      if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
        return nok(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? enclosedEscape : enclosed;
    }
    function enclosedEscape(code2) {
      if (code2 === 60 || code2 === 62 || code2 === 92) {
        effects.consume(code2);
        return enclosed;
      }
      return enclosed(code2);
    }
    function raw(code2) {
      if (!balance && (code2 === null || code2 === 41 || markdownLineEndingOrSpace(code2))) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok3(code2);
      }
      if (balance < limit && code2 === 40) {
        effects.consume(code2);
        balance++;
        return raw;
      }
      if (code2 === 41) {
        effects.consume(code2);
        balance--;
        return raw;
      }
      if (code2 === null || code2 === 32 || code2 === 40 || asciiControl(code2)) {
        return nok(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? rawEscape : raw;
    }
    function rawEscape(code2) {
      if (code2 === 40 || code2 === 41 || code2 === 92) {
        effects.consume(code2);
        return raw;
      }
      return raw(code2);
    }
  }

  // node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/index.js
  function factoryLabel(effects, ok3, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    let seen;
    return start;
    function start(code2) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.enter(stringType);
      return atBreak;
    }
    function atBreak(code2) {
      if (size > 999 || code2 === null || code2 === 91 || code2 === 93 && !seen || // To do: remove in the future once we’ve switched from
      // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
      // which doesn’t need this.
      // Hidden footnotes hook.
      /* c8 ignore next 3 */
      code2 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) {
        return nok(code2);
      }
      if (code2 === 93) {
        effects.exit(stringType);
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        effects.exit(type);
        return ok3;
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return atBreak;
      }
      effects.enter("chunkString", {
        contentType: "string"
      });
      return labelInside(code2);
    }
    function labelInside(code2) {
      if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
        effects.exit("chunkString");
        return atBreak(code2);
      }
      effects.consume(code2);
      if (!seen) seen = !markdownSpace(code2);
      return code2 === 92 ? labelEscape : labelInside;
    }
    function labelEscape(code2) {
      if (code2 === 91 || code2 === 92 || code2 === 93) {
        effects.consume(code2);
        size++;
        return labelInside;
      }
      return labelInside(code2);
    }
  }

  // node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/index.js
  function factoryTitle(effects, ok3, nok, type, markerType, stringType) {
    let marker;
    return start;
    function start(code2) {
      if (code2 === 34 || code2 === 39 || code2 === 40) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        marker = code2 === 40 ? 41 : code2;
        return begin;
      }
      return nok(code2);
    }
    function begin(code2) {
      if (code2 === marker) {
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        effects.exit(type);
        return ok3;
      }
      effects.enter(stringType);
      return atBreak(code2);
    }
    function atBreak(code2) {
      if (code2 === marker) {
        effects.exit(stringType);
        return begin(marker);
      }
      if (code2 === null) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(effects, atBreak, "linePrefix");
      }
      effects.enter("chunkString", {
        contentType: "string"
      });
      return inside(code2);
    }
    function inside(code2) {
      if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
        effects.exit("chunkString");
        return atBreak(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? escape : inside;
    }
    function escape(code2) {
      if (code2 === marker || code2 === 92) {
        effects.consume(code2);
        return inside;
      }
      return inside(code2);
    }
  }

  // node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/index.js
  function factoryWhitespace(effects, ok3) {
    let seen;
    return start;
    function start(code2) {
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        seen = true;
        return start;
      }
      if (markdownSpace(code2)) {
        return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code2);
      }
      return ok3(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/definition.js
  var definition = {
    name: "definition",
    tokenize: tokenizeDefinition
  };
  var titleBefore = {
    partial: true,
    tokenize: tokenizeTitleBefore
  };
  function tokenizeDefinition(effects, ok3, nok) {
    const self = this;
    let identifier;
    return start;
    function start(code2) {
      effects.enter("definition");
      return before(code2);
    }
    function before(code2) {
      return factoryLabel.call(
        self,
        effects,
        labelAfter,
        // Note: we don’t need to reset the way `markdown-rs` does.
        nok,
        "definitionLabel",
        "definitionLabelMarker",
        "definitionLabelString"
      )(code2);
    }
    function labelAfter(code2) {
      identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
      if (code2 === 58) {
        effects.enter("definitionMarker");
        effects.consume(code2);
        effects.exit("definitionMarker");
        return markerAfter;
      }
      return nok(code2);
    }
    function markerAfter(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, destinationBefore)(code2) : destinationBefore(code2);
    }
    function destinationBefore(code2) {
      return factoryDestination(
        effects,
        destinationAfter,
        // Note: we don’t need to reset the way `markdown-rs` does.
        nok,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString"
      )(code2);
    }
    function destinationAfter(code2) {
      return effects.attempt(titleBefore, after, after)(code2);
    }
    function after(code2) {
      return markdownSpace(code2) ? factorySpace(effects, afterWhitespace, "whitespace")(code2) : afterWhitespace(code2);
    }
    function afterWhitespace(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("definition");
        self.parser.defined.push(identifier);
        return ok3(code2);
      }
      return nok(code2);
    }
  }
  function tokenizeTitleBefore(effects, ok3, nok) {
    return titleBefore2;
    function titleBefore2(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, beforeMarker)(code2) : nok(code2);
    }
    function beforeMarker(code2) {
      return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code2);
    }
    function titleAfter(code2) {
      return markdownSpace(code2) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code2) : titleAfterOptionalWhitespace(code2);
    }
    function titleAfterOptionalWhitespace(code2) {
      return code2 === null || markdownLineEnding(code2) ? ok3(code2) : nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
  var hardBreakEscape = {
    name: "hardBreakEscape",
    tokenize: tokenizeHardBreakEscape
  };
  function tokenizeHardBreakEscape(effects, ok3, nok) {
    return start;
    function start(code2) {
      effects.enter("hardBreakEscape");
      effects.consume(code2);
      return after;
    }
    function after(code2) {
      if (markdownLineEnding(code2)) {
        effects.exit("hardBreakEscape");
        return ok3(code2);
      }
      return nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/heading-atx.js
  var headingAtx = {
    name: "headingAtx",
    resolve: resolveHeadingAtx,
    tokenize: tokenizeHeadingAtx
  };
  function resolveHeadingAtx(events, context2) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    if (events[contentStart][1].type === "whitespace") {
      contentStart += 2;
    }
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
      contentEnd -= 2;
    }
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
      contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    }
    if (contentEnd > contentStart) {
      const content3 = {
        type: "atxHeadingText",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end
      };
      const text4 = {
        type: "chunkText",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end,
        contentType: "text"
      };
      splice(events, contentStart, contentEnd - contentStart + 1, [["enter", content3, context2], ["enter", text4, context2], ["exit", text4, context2], ["exit", content3, context2]]);
    }
    return events;
  }
  function tokenizeHeadingAtx(effects, ok3, nok) {
    let size = 0;
    return start;
    function start(code2) {
      effects.enter("atxHeading");
      return before(code2);
    }
    function before(code2) {
      effects.enter("atxHeadingSequence");
      return sequenceOpen(code2);
    }
    function sequenceOpen(code2) {
      if (code2 === 35 && size++ < 6) {
        effects.consume(code2);
        return sequenceOpen;
      }
      if (code2 === null || markdownLineEndingOrSpace(code2)) {
        effects.exit("atxHeadingSequence");
        return atBreak(code2);
      }
      return nok(code2);
    }
    function atBreak(code2) {
      if (code2 === 35) {
        effects.enter("atxHeadingSequence");
        return sequenceFurther(code2);
      }
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("atxHeading");
        return ok3(code2);
      }
      if (markdownSpace(code2)) {
        return factorySpace(effects, atBreak, "whitespace")(code2);
      }
      effects.enter("atxHeadingText");
      return data(code2);
    }
    function sequenceFurther(code2) {
      if (code2 === 35) {
        effects.consume(code2);
        return sequenceFurther;
      }
      effects.exit("atxHeadingSequence");
      return atBreak(code2);
    }
    function data(code2) {
      if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
        effects.exit("atxHeadingText");
        return atBreak(code2);
      }
      effects.consume(code2);
      return data;
    }
  }

  // node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js
  var htmlBlockNames = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ];
  var htmlRawNames = ["pre", "script", "style", "textarea"];

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/html-flow.js
  var htmlFlow = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: resolveToHtmlFlow,
    tokenize: tokenizeHtmlFlow
  };
  var blankLineBefore = {
    partial: true,
    tokenize: tokenizeBlankLineBefore
  };
  function resolveToHtmlFlow(events) {
    let index2 = events.length;
    while (index2--) {
      if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
        break;
      }
    }
    if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
      events[index2][1].start = events[index2 - 2][1].start;
      events[index2 + 1][1].start = events[index2 - 2][1].start;
      events.splice(index2 - 2, 2);
    }
    return events;
  }
  function tokenizeHtmlFlow(effects, ok3, nok) {
    const self = this;
    let marker;
    let closingTag;
    let buffer;
    let index2;
    let markerB;
    return start;
    function start(code2) {
      return before(code2);
    }
    function before(code2) {
      effects.enter("htmlFlow");
      effects.enter("htmlFlowData");
      effects.consume(code2);
      return open;
    }
    function open(code2) {
      if (code2 === 33) {
        effects.consume(code2);
        return declarationOpen;
      }
      if (code2 === 47) {
        effects.consume(code2);
        closingTag = true;
        return tagCloseStart;
      }
      if (code2 === 63) {
        effects.consume(code2);
        marker = 3;
        return self.interrupt ? ok3 : continuationDeclarationInside;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        buffer = String.fromCharCode(code2);
        return tagName;
      }
      return nok(code2);
    }
    function declarationOpen(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        marker = 2;
        return commentOpenInside;
      }
      if (code2 === 91) {
        effects.consume(code2);
        marker = 5;
        index2 = 0;
        return cdataOpenInside;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        marker = 4;
        return self.interrupt ? ok3 : continuationDeclarationInside;
      }
      return nok(code2);
    }
    function commentOpenInside(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return self.interrupt ? ok3 : continuationDeclarationInside;
      }
      return nok(code2);
    }
    function cdataOpenInside(code2) {
      const value = "CDATA[";
      if (code2 === value.charCodeAt(index2++)) {
        effects.consume(code2);
        if (index2 === value.length) {
          return self.interrupt ? ok3 : continuation;
        }
        return cdataOpenInside;
      }
      return nok(code2);
    }
    function tagCloseStart(code2) {
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        buffer = String.fromCharCode(code2);
        return tagName;
      }
      return nok(code2);
    }
    function tagName(code2) {
      if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
        const slash = code2 === 47;
        const name = buffer.toLowerCase();
        if (!slash && !closingTag && htmlRawNames.includes(name)) {
          marker = 1;
          return self.interrupt ? ok3(code2) : continuation(code2);
        }
        if (htmlBlockNames.includes(buffer.toLowerCase())) {
          marker = 6;
          if (slash) {
            effects.consume(code2);
            return basicSelfClosing;
          }
          return self.interrupt ? ok3(code2) : continuation(code2);
        }
        marker = 7;
        return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code2) : closingTag ? completeClosingTagAfter(code2) : completeAttributeNameBefore(code2);
      }
      if (code2 === 45 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        buffer += String.fromCharCode(code2);
        return tagName;
      }
      return nok(code2);
    }
    function basicSelfClosing(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        return self.interrupt ? ok3 : continuation;
      }
      return nok(code2);
    }
    function completeClosingTagAfter(code2) {
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeClosingTagAfter;
      }
      return completeEnd(code2);
    }
    function completeAttributeNameBefore(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        return completeEnd;
      }
      if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
        effects.consume(code2);
        return completeAttributeName;
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAttributeNameBefore;
      }
      return completeEnd(code2);
    }
    function completeAttributeName(code2) {
      if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return completeAttributeName;
      }
      return completeAttributeNameAfter(code2);
    }
    function completeAttributeNameAfter(code2) {
      if (code2 === 61) {
        effects.consume(code2);
        return completeAttributeValueBefore;
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAttributeNameAfter;
      }
      return completeAttributeNameBefore(code2);
    }
    function completeAttributeValueBefore(code2) {
      if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
        return nok(code2);
      }
      if (code2 === 34 || code2 === 39) {
        effects.consume(code2);
        markerB = code2;
        return completeAttributeValueQuoted;
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAttributeValueBefore;
      }
      return completeAttributeValueUnquoted(code2);
    }
    function completeAttributeValueQuoted(code2) {
      if (code2 === markerB) {
        effects.consume(code2);
        markerB = null;
        return completeAttributeValueQuotedAfter;
      }
      if (code2 === null || markdownLineEnding(code2)) {
        return nok(code2);
      }
      effects.consume(code2);
      return completeAttributeValueQuoted;
    }
    function completeAttributeValueUnquoted(code2) {
      if (code2 === null || code2 === 34 || code2 === 39 || code2 === 47 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
        return completeAttributeNameAfter(code2);
      }
      effects.consume(code2);
      return completeAttributeValueUnquoted;
    }
    function completeAttributeValueQuotedAfter(code2) {
      if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
        return completeAttributeNameBefore(code2);
      }
      return nok(code2);
    }
    function completeEnd(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        return completeAfter;
      }
      return nok(code2);
    }
    function completeAfter(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return continuation(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAfter;
      }
      return nok(code2);
    }
    function continuation(code2) {
      if (code2 === 45 && marker === 2) {
        effects.consume(code2);
        return continuationCommentInside;
      }
      if (code2 === 60 && marker === 1) {
        effects.consume(code2);
        return continuationRawTagOpen;
      }
      if (code2 === 62 && marker === 4) {
        effects.consume(code2);
        return continuationClose;
      }
      if (code2 === 63 && marker === 3) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      if (code2 === 93 && marker === 5) {
        effects.consume(code2);
        return continuationCdataInside;
      }
      if (markdownLineEnding(code2) && (marker === 6 || marker === 7)) {
        effects.exit("htmlFlowData");
        return effects.check(blankLineBefore, continuationAfter, continuationStart)(code2);
      }
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("htmlFlowData");
        return continuationStart(code2);
      }
      effects.consume(code2);
      return continuation;
    }
    function continuationStart(code2) {
      return effects.check(nonLazyContinuation, continuationStartNonLazy, continuationAfter)(code2);
    }
    function continuationStartNonLazy(code2) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return continuationBefore;
    }
    function continuationBefore(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return continuationStart(code2);
      }
      effects.enter("htmlFlowData");
      return continuation(code2);
    }
    function continuationCommentInside(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      return continuation(code2);
    }
    function continuationRawTagOpen(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        buffer = "";
        return continuationRawEndTag;
      }
      return continuation(code2);
    }
    function continuationRawEndTag(code2) {
      if (code2 === 62) {
        const name = buffer.toLowerCase();
        if (htmlRawNames.includes(name)) {
          effects.consume(code2);
          return continuationClose;
        }
        return continuation(code2);
      }
      if (asciiAlpha(code2) && buffer.length < 8) {
        effects.consume(code2);
        buffer += String.fromCharCode(code2);
        return continuationRawEndTag;
      }
      return continuation(code2);
    }
    function continuationCdataInside(code2) {
      if (code2 === 93) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      return continuation(code2);
    }
    function continuationDeclarationInside(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        return continuationClose;
      }
      if (code2 === 45 && marker === 2) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      return continuation(code2);
    }
    function continuationClose(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("htmlFlowData");
        return continuationAfter(code2);
      }
      effects.consume(code2);
      return continuationClose;
    }
    function continuationAfter(code2) {
      effects.exit("htmlFlow");
      return ok3(code2);
    }
  }
  function tokenizeBlankLineBefore(effects, ok3, nok) {
    return start;
    function start(code2) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return effects.attempt(blankLine, ok3, nok);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/html-text.js
  var htmlText = {
    name: "htmlText",
    tokenize: tokenizeHtmlText
  };
  function tokenizeHtmlText(effects, ok3, nok) {
    const self = this;
    let marker;
    let index2;
    let returnState;
    return start;
    function start(code2) {
      effects.enter("htmlText");
      effects.enter("htmlTextData");
      effects.consume(code2);
      return open;
    }
    function open(code2) {
      if (code2 === 33) {
        effects.consume(code2);
        return declarationOpen;
      }
      if (code2 === 47) {
        effects.consume(code2);
        return tagCloseStart;
      }
      if (code2 === 63) {
        effects.consume(code2);
        return instruction;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return tagOpen;
      }
      return nok(code2);
    }
    function declarationOpen(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return commentOpenInside;
      }
      if (code2 === 91) {
        effects.consume(code2);
        index2 = 0;
        return cdataOpenInside;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return declaration;
      }
      return nok(code2);
    }
    function commentOpenInside(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return commentEnd;
      }
      return nok(code2);
    }
    function comment(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 45) {
        effects.consume(code2);
        return commentClose;
      }
      if (markdownLineEnding(code2)) {
        returnState = comment;
        return lineEndingBefore(code2);
      }
      effects.consume(code2);
      return comment;
    }
    function commentClose(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return commentEnd;
      }
      return comment(code2);
    }
    function commentEnd(code2) {
      return code2 === 62 ? end(code2) : code2 === 45 ? commentClose(code2) : comment(code2);
    }
    function cdataOpenInside(code2) {
      const value = "CDATA[";
      if (code2 === value.charCodeAt(index2++)) {
        effects.consume(code2);
        return index2 === value.length ? cdata : cdataOpenInside;
      }
      return nok(code2);
    }
    function cdata(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 93) {
        effects.consume(code2);
        return cdataClose;
      }
      if (markdownLineEnding(code2)) {
        returnState = cdata;
        return lineEndingBefore(code2);
      }
      effects.consume(code2);
      return cdata;
    }
    function cdataClose(code2) {
      if (code2 === 93) {
        effects.consume(code2);
        return cdataEnd;
      }
      return cdata(code2);
    }
    function cdataEnd(code2) {
      if (code2 === 62) {
        return end(code2);
      }
      if (code2 === 93) {
        effects.consume(code2);
        return cdataEnd;
      }
      return cdata(code2);
    }
    function declaration(code2) {
      if (code2 === null || code2 === 62) {
        return end(code2);
      }
      if (markdownLineEnding(code2)) {
        returnState = declaration;
        return lineEndingBefore(code2);
      }
      effects.consume(code2);
      return declaration;
    }
    function instruction(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 63) {
        effects.consume(code2);
        return instructionClose;
      }
      if (markdownLineEnding(code2)) {
        returnState = instruction;
        return lineEndingBefore(code2);
      }
      effects.consume(code2);
      return instruction;
    }
    function instructionClose(code2) {
      return code2 === 62 ? end(code2) : instruction(code2);
    }
    function tagCloseStart(code2) {
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return tagClose;
      }
      return nok(code2);
    }
    function tagClose(code2) {
      if (code2 === 45 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return tagClose;
      }
      return tagCloseBetween(code2);
    }
    function tagCloseBetween(code2) {
      if (markdownLineEnding(code2)) {
        returnState = tagCloseBetween;
        return lineEndingBefore(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagCloseBetween;
      }
      return end(code2);
    }
    function tagOpen(code2) {
      if (code2 === 45 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return tagOpen;
      }
      if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
        return tagOpenBetween(code2);
      }
      return nok(code2);
    }
    function tagOpenBetween(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        return end;
      }
      if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
        effects.consume(code2);
        return tagOpenAttributeName;
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenBetween;
        return lineEndingBefore(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagOpenBetween;
      }
      return end(code2);
    }
    function tagOpenAttributeName(code2) {
      if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return tagOpenAttributeName;
      }
      return tagOpenAttributeNameAfter(code2);
    }
    function tagOpenAttributeNameAfter(code2) {
      if (code2 === 61) {
        effects.consume(code2);
        return tagOpenAttributeValueBefore;
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenAttributeNameAfter;
        return lineEndingBefore(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagOpenAttributeNameAfter;
      }
      return tagOpenBetween(code2);
    }
    function tagOpenAttributeValueBefore(code2) {
      if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
        return nok(code2);
      }
      if (code2 === 34 || code2 === 39) {
        effects.consume(code2);
        marker = code2;
        return tagOpenAttributeValueQuoted;
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenAttributeValueBefore;
        return lineEndingBefore(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagOpenAttributeValueBefore;
      }
      effects.consume(code2);
      return tagOpenAttributeValueUnquoted;
    }
    function tagOpenAttributeValueQuoted(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        marker = void 0;
        return tagOpenAttributeValueQuotedAfter;
      }
      if (code2 === null) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenAttributeValueQuoted;
        return lineEndingBefore(code2);
      }
      effects.consume(code2);
      return tagOpenAttributeValueQuoted;
    }
    function tagOpenAttributeValueUnquoted(code2) {
      if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
        return nok(code2);
      }
      if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
        return tagOpenBetween(code2);
      }
      effects.consume(code2);
      return tagOpenAttributeValueUnquoted;
    }
    function tagOpenAttributeValueQuotedAfter(code2) {
      if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
        return tagOpenBetween(code2);
      }
      return nok(code2);
    }
    function end(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        effects.exit("htmlTextData");
        effects.exit("htmlText");
        return ok3;
      }
      return nok(code2);
    }
    function lineEndingBefore(code2) {
      effects.exit("htmlTextData");
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return lineEndingAfter;
    }
    function lineEndingAfter(code2) {
      return markdownSpace(code2) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2) : lineEndingAfterPrefix(code2);
    }
    function lineEndingAfterPrefix(code2) {
      effects.enter("htmlTextData");
      return returnState(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/label-end.js
  var labelEnd = {
    name: "labelEnd",
    resolveAll: resolveAllLabelEnd,
    resolveTo: resolveToLabelEnd,
    tokenize: tokenizeLabelEnd
  };
  var resourceConstruct = {
    tokenize: tokenizeResource
  };
  var referenceFullConstruct = {
    tokenize: tokenizeReferenceFull
  };
  var referenceCollapsedConstruct = {
    tokenize: tokenizeReferenceCollapsed
  };
  function resolveAllLabelEnd(events) {
    let index2 = -1;
    const newEvents = [];
    while (++index2 < events.length) {
      const token = events[index2][1];
      newEvents.push(events[index2]);
      if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
        const offset = token.type === "labelImage" ? 4 : 2;
        token.type = "data";
        index2 += offset;
      }
    }
    if (events.length !== newEvents.length) {
      splice(events, 0, events.length, newEvents);
    }
    return events;
  }
  function resolveToLabelEnd(events, context2) {
    let index2 = events.length;
    let offset = 0;
    let open;
    let close;
    let media;
    while (index2--) {
      const token = events[index2][1];
      if (open) {
        if (token.type === "link" || token.type === "labelLink" && token._inactive) {
          break;
        }
        if (events[index2][0] === "enter" && token.type === "labelLink") {
          token._inactive = true;
        }
      } else if (close) {
        if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
          open = index2;
          if (token.type !== "labelLink") {
            offset = 2;
            break;
          }
        }
      } else if (token.type === "labelEnd") {
        close = index2;
      }
    }
    const group = {
      type: events[open][1].type === "labelLink" ? "link" : "image",
      start: {
        ...events[open][1].start
      },
      end: {
        ...events[events.length - 1][1].end
      }
    };
    const label = {
      type: "label",
      start: {
        ...events[open][1].start
      },
      end: {
        ...events[close][1].end
      }
    };
    const text4 = {
      type: "labelText",
      start: {
        ...events[open + offset + 2][1].end
      },
      end: {
        ...events[close - 2][1].start
      }
    };
    media = [["enter", group, context2], ["enter", label, context2]];
    media = push(media, events.slice(open + 1, open + offset + 3));
    media = push(media, [["enter", text4, context2]]);
    media = push(media, resolveAll(context2.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context2));
    media = push(media, [["exit", text4, context2], events[close - 2], events[close - 1], ["exit", label, context2]]);
    media = push(media, events.slice(close + 1));
    media = push(media, [["exit", group, context2]]);
    splice(events, open, events.length, media);
    return events;
  }
  function tokenizeLabelEnd(effects, ok3, nok) {
    const self = this;
    const labelStarts = self._labelStarts;
    let labelStart;
    let defined;
    if (labelStarts) {
      while (labelStarts.length > 0 && labelStarts[labelStarts.length - 1]._balanced) {
        labelStarts.pop();
      }
      labelStart = labelStarts[labelStarts.length - 1];
    }
    return start;
    function start(code2) {
      if (!labelStart) {
        return nok(code2);
      }
      if (labelStart._inactive) {
        return labelEndNok(code2);
      }
      defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })));
      effects.enter("labelEnd");
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelEnd");
      return after;
    }
    function after(code2) {
      if (code2 === 40) {
        return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code2);
      }
      if (code2 === 91) {
        return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code2);
      }
      return defined ? labelEndOk(code2) : labelEndNok(code2);
    }
    function referenceNotFull(code2) {
      return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code2);
    }
    function labelEndOk(code2) {
      labelStarts.pop();
      return ok3(code2);
    }
    function labelEndNok(code2) {
      labelStart._balanced = true;
      return nok(code2);
    }
  }
  function tokenizeResource(effects, ok3, nok) {
    return resourceStart;
    function resourceStart(code2) {
      effects.enter("resource");
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      return resourceBefore;
    }
    function resourceBefore(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceOpen)(code2) : resourceOpen(code2);
    }
    function resourceOpen(code2) {
      if (code2 === 41) {
        return resourceEnd(code2);
      }
      return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code2);
    }
    function resourceDestinationAfter(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceBetween)(code2) : resourceEnd(code2);
    }
    function resourceDestinationMissing(code2) {
      return nok(code2);
    }
    function resourceBetween(code2) {
      if (code2 === 34 || code2 === 39 || code2 === 40) {
        return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code2);
      }
      return resourceEnd(code2);
    }
    function resourceTitleAfter(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, resourceEnd)(code2) : resourceEnd(code2);
    }
    function resourceEnd(code2) {
      if (code2 === 41) {
        effects.enter("resourceMarker");
        effects.consume(code2);
        effects.exit("resourceMarker");
        effects.exit("resource");
        return ok3;
      }
      return nok(code2);
    }
  }
  function tokenizeReferenceFull(effects, ok3, nok) {
    const self = this;
    return referenceFull;
    function referenceFull(code2) {
      return factoryLabel.call(self, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code2);
    }
    function referenceFullAfter(code2) {
      return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok3(code2) : nok(code2);
    }
    function referenceFullMissing(code2) {
      return nok(code2);
    }
  }
  function tokenizeReferenceCollapsed(effects, ok3, nok) {
    return referenceCollapsedStart;
    function referenceCollapsedStart(code2) {
      effects.enter("reference");
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      return referenceCollapsedOpen;
    }
    function referenceCollapsedOpen(code2) {
      if (code2 === 93) {
        effects.enter("referenceMarker");
        effects.consume(code2);
        effects.exit("referenceMarker");
        effects.exit("reference");
        return ok3;
      }
      return nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/label-start-image.js
  var labelStartImage = {
    name: "labelStartImage",
    resolveAll: labelEnd.resolveAll,
    tokenize: tokenizeLabelStartImage
  };
  function tokenizeLabelStartImage(effects, ok3, nok) {
    const self = this;
    let labelImage;
    return start;
    function start(code2) {
      effects.enter("labelImage");
      effects.enter("labelImageMarker");
      effects.consume(code2);
      effects.exit("labelImageMarker");
      return open;
    }
    function open(code2) {
      if (code2 === 91) {
        effects.enter("labelMarker");
        effects.consume(code2);
        effects.exit("labelMarker");
        labelImage = effects.exit("labelImage");
        return after;
      }
      return nok(code2);
    }
    function after(code2) {
      if (code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs) {
        return nok(code2);
      }
      self._labelStarts = self._labelStarts || [];
      self._labelStarts.push(labelImage);
      return ok3(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/label-start-link.js
  var labelStartLink = {
    name: "labelStartLink",
    resolveAll: labelEnd.resolveAll,
    tokenize: tokenizeLabelStartLink
  };
  function tokenizeLabelStartLink(effects, ok3, nok) {
    const self = this;
    let labelLink;
    return start;
    function start(code2) {
      effects.enter("labelLink");
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      labelLink = effects.exit("labelLink");
      return after;
    }
    function after(code2) {
      if (code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs) {
        return nok(code2);
      }
      self._labelStarts = self._labelStarts || [];
      self._labelStarts.push(labelLink);
      return ok3(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/line-ending.js
  var lineEnding = {
    name: "lineEnding",
    tokenize: tokenizeLineEnding
  };
  function tokenizeLineEnding(effects, ok3) {
    return start;
    function start(code2) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, ok3, "linePrefix");
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/thematic-break.js
  var thematicBreak = {
    name: "thematicBreak",
    tokenize: tokenizeThematicBreak
  };
  function tokenizeThematicBreak(effects, ok3, nok) {
    let size = 0;
    let marker;
    return start;
    function start(code2) {
      effects.enter("thematicBreak");
      return before(code2);
    }
    function before(code2) {
      marker = code2;
      return atBreak(code2);
    }
    function atBreak(code2) {
      if (code2 === marker) {
        effects.enter("thematicBreakSequence");
        return sequence(code2);
      }
      if (size >= 3 && (code2 === null || markdownLineEnding(code2))) {
        effects.exit("thematicBreak");
        return ok3(code2);
      }
      return nok(code2);
    }
    function sequence(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        size++;
        return sequence;
      }
      effects.exit("thematicBreakSequence");
      return markdownSpace(code2) ? factorySpace(effects, atBreak, "whitespace")(code2) : atBreak(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/list.js
  var list = {
    continuation: {
      tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd,
    name: "list",
    tokenize: tokenizeListStart
  };
  var listItemPrefixWhitespaceConstruct = {
    partial: true,
    tokenize: tokenizeListItemPrefixWhitespace
  };
  var indentConstruct = {
    partial: true,
    tokenize: tokenizeIndent
  };
  function tokenizeListStart(effects, ok3, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    function start(code2) {
      const kind = self.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
      if (kind === "listUnordered" ? !self.containerState.marker || code2 === self.containerState.marker : asciiDigit(code2)) {
        if (!self.containerState.type) {
          self.containerState.type = kind;
          effects.enter(kind, {
            _container: true
          });
        }
        if (kind === "listUnordered") {
          effects.enter("listItemPrefix");
          return code2 === 42 || code2 === 45 ? effects.check(thematicBreak, nok, atMarker)(code2) : atMarker(code2);
        }
        if (!self.interrupt || code2 === 49) {
          effects.enter("listItemPrefix");
          effects.enter("listItemValue");
          return inside(code2);
        }
      }
      return nok(code2);
    }
    function inside(code2) {
      if (asciiDigit(code2) && ++size < 10) {
        effects.consume(code2);
        return inside;
      }
      if ((!self.interrupt || size < 2) && (self.containerState.marker ? code2 === self.containerState.marker : code2 === 41 || code2 === 46)) {
        effects.exit("listItemValue");
        return atMarker(code2);
      }
      return nok(code2);
    }
    function atMarker(code2) {
      effects.enter("listItemMarker");
      effects.consume(code2);
      effects.exit("listItemMarker");
      self.containerState.marker = self.containerState.marker || code2;
      return effects.check(
        blankLine,
        // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank,
        effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
      );
    }
    function onBlank(code2) {
      self.containerState.initialBlankLine = true;
      initialSize++;
      return endOfPrefix(code2);
    }
    function otherPrefix(code2) {
      if (markdownSpace(code2)) {
        effects.enter("listItemPrefixWhitespace");
        effects.consume(code2);
        effects.exit("listItemPrefixWhitespace");
        return endOfPrefix;
      }
      return nok(code2);
    }
    function endOfPrefix(code2) {
      self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
      return ok3(code2);
    }
  }
  function tokenizeListContinuation(effects, ok3, nok) {
    const self = this;
    self.containerState._closeFlow = void 0;
    return effects.check(blankLine, onBlank, notBlank);
    function onBlank(code2) {
      self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
      return factorySpace(effects, ok3, "listItemIndent", self.containerState.size + 1)(code2);
    }
    function notBlank(code2) {
      if (self.containerState.furtherBlankLines || !markdownSpace(code2)) {
        self.containerState.furtherBlankLines = void 0;
        self.containerState.initialBlankLine = void 0;
        return notInCurrentItem(code2);
      }
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code2);
    }
    function notInCurrentItem(code2) {
      self.containerState._closeFlow = true;
      self.interrupt = void 0;
      return factorySpace(effects, effects.attempt(list, ok3, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
    }
  }
  function tokenizeIndent(effects, ok3, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    function afterPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok3(code2) : nok(code2);
    }
  }
  function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
  }
  function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
    function afterPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok3(code2) : nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-core-commonmark@2.0.4/node_modules/micromark-core-commonmark/lib/setext-underline.js
  var setextUnderline = {
    name: "setextUnderline",
    resolveTo: resolveToSetextUnderline,
    tokenize: tokenizeSetextUnderline
  };
  function resolveToSetextUnderline(events, context2) {
    const editMap = new EditMap();
    let index2 = events.length;
    let content3;
    let text4;
    let definition2;
    while (index2--) {
      if (events[index2][0] === "enter") {
        if (events[index2][1].type === "content") {
          content3 = index2;
          break;
        }
        if (events[index2][1].type === "paragraph") {
          text4 = index2;
        }
      } else {
        if (events[index2][1].type === "content") {
          editMap.add(index2, 1, []);
        }
        if (!definition2 && events[index2][1].type === "definition") {
          definition2 = index2;
        }
      }
    }
    const heading = {
      type: "setextHeading",
      start: {
        ...events[content3][1].start
      },
      end: {
        ...events[events.length - 1][1].end
      }
    };
    events[text4][1].type = "setextHeadingText";
    if (definition2) {
      editMap.add(text4, 0, [["enter", heading, context2]]);
      editMap.add(definition2 + 1, 0, [["exit", events[content3][1], context2]]);
      events[content3][1].end = {
        ...events[definition2][1].end
      };
    } else {
      events[content3][1] = heading;
    }
    editMap.add(events.length, 0, [["exit", heading, context2]]);
    editMap.consume(events);
    return events;
  }
  function tokenizeSetextUnderline(effects, ok3, nok) {
    const self = this;
    let marker;
    return start;
    function start(code2) {
      let index2 = self.events.length;
      let paragraph;
      while (index2--) {
        if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
          paragraph = self.events[index2][1].type === "paragraph";
          break;
        }
      }
      if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
        effects.enter("setextHeadingLine");
        marker = code2;
        return before(code2);
      }
      return nok(code2);
    }
    function before(code2) {
      effects.enter("setextHeadingLineSequence");
      return inside(code2);
    }
    function inside(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        return inside;
      }
      effects.exit("setextHeadingLineSequence");
      return markdownSpace(code2) ? factorySpace(effects, after, "lineSuffix")(code2) : after(code2);
    }
    function after(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("setextHeadingLine");
        return ok3(code2);
      }
      return nok(code2);
    }
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/initialize/flow.js
  var flow = {
    tokenize: initializeFlow
  };
  function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(
      // Try to parse a blank line.
      blankLine,
      atBlankEnding,
      // Try to parse initial flow (essentially, only code).
      effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix"))
    );
    return initial;
    function atBlankEnding(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("lineEndingBlank");
      effects.consume(code2);
      effects.exit("lineEndingBlank");
      self.currentConstruct = void 0;
      return initial;
    }
    function afterConstruct(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      self.currentConstruct = void 0;
      return initial;
    }
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/initialize/text.js
  var resolver = {
    resolveAll: createResolver()
  };
  var string = initializeFactory("string");
  var text = initializeFactory("text");
  function initializeFactory(field2) {
    return {
      resolveAll: createResolver(field2 === "text" ? resolveAllLineSuffixes : void 0),
      tokenize: initializeText
    };
    function initializeText(effects) {
      const self = this;
      const constructs2 = this.parser.constructs[field2];
      const text4 = effects.attempt(constructs2, start, notText);
      return start;
      function start(code2) {
        return atBreak(code2) ? text4(code2) : notText(code2);
      }
      function notText(code2) {
        if (code2 === null) {
          effects.consume(code2);
          return;
        }
        effects.enter("data");
        effects.consume(code2);
        return data;
      }
      function data(code2) {
        if (atBreak(code2)) {
          effects.exit("data");
          return text4(code2);
        }
        effects.consume(code2);
        return data;
      }
      function atBreak(code2) {
        if (code2 === null) {
          return true;
        }
        const list2 = constructs2[code2];
        let index2 = -1;
        if (list2) {
          while (++index2 < list2.length) {
            const item = list2[index2];
            if (!item.previous || item.previous.call(self, self.previous)) {
              return true;
            }
          }
        }
        return false;
      }
    }
  }
  function createResolver(extraResolver) {
    return resolveAllText;
    function resolveAllText(events, context2) {
      let index2 = -1;
      let enter;
      while (++index2 <= events.length) {
        if (enter === void 0) {
          if (events[index2] && events[index2][1].type === "data") {
            enter = index2;
            index2++;
          }
        } else if (!events[index2] || events[index2][1].type !== "data") {
          if (index2 !== enter + 2) {
            events[enter][1].end = events[index2 - 1][1].end;
            events.splice(enter + 2, index2 - enter - 2);
            index2 = enter + 2;
          }
          enter = void 0;
        }
      }
      return extraResolver ? extraResolver(events, context2) : events;
    }
  }
  function resolveAllLineSuffixes(events, context2) {
    const editMap = new EditMap();
    let eventIndex = 0;
    while (++eventIndex <= events.length) {
      if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
        const data = events[eventIndex - 1][1];
        const chunks = context2.sliceStream(data);
        let index2 = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        let tabs;
        while (index2--) {
          const chunk = chunks[index2];
          if (typeof chunk === "string") {
            bufferIndex = chunk.length;
            while (chunk.charCodeAt(bufferIndex - 1) === 32) {
              size++;
              bufferIndex--;
            }
            if (bufferIndex) {
              break;
            }
            bufferIndex = -1;
          } else if (chunk === -2) {
            tabs = true;
            size++;
          } else if (chunk === -1) {
          } else {
            index2++;
            break;
          }
        }
        if (context2._contentTypeTextTrailing && eventIndex === events.length) {
          size = 0;
        }
        if (size) {
          const token = {
            type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex,
              _index: data.start._index + index2,
              line: data.end.line,
              column: data.end.column - size,
              offset: data.end.offset - size
            },
            end: {
              ...data.end
            }
          };
          data.end = {
            ...token.start
          };
          if (data.start.offset === data.end.offset) {
            Object.assign(data, token);
          } else {
            editMap.add(eventIndex, 0, [["enter", token, context2], ["exit", token, context2]]);
          }
        }
        eventIndex++;
      }
    }
    editMap.consume(events);
    return events;
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/constructs.js
  var constructs_exports = {};
  __export(constructs_exports, {
    attentionMarkers: () => attentionMarkers,
    contentInitial: () => contentInitial,
    disable: () => disable,
    document: () => document3,
    flow: () => flow2,
    flowInitial: () => flowInitial,
    insideSpan: () => insideSpan,
    string: () => string2,
    text: () => text2
  });
  var document3 = {
    [42]: list,
    [43]: list,
    [45]: list,
    [48]: list,
    [49]: list,
    [50]: list,
    [51]: list,
    [52]: list,
    [53]: list,
    [54]: list,
    [55]: list,
    [56]: list,
    [57]: list,
    [62]: blockQuote
  };
  var contentInitial = {
    [91]: definition
  };
  var flowInitial = {
    [-2]: codeIndented,
    [-1]: codeIndented,
    [32]: codeIndented
  };
  var flow2 = {
    [35]: headingAtx,
    [42]: thematicBreak,
    [45]: [setextUnderline, thematicBreak],
    [60]: htmlFlow,
    [61]: setextUnderline,
    [95]: thematicBreak,
    [96]: codeFenced,
    [126]: codeFenced
  };
  var string2 = {
    [38]: characterReference,
    [92]: characterEscape
  };
  var text2 = {
    [-5]: lineEnding,
    [-4]: lineEnding,
    [-3]: lineEnding,
    [33]: labelStartImage,
    [38]: characterReference,
    [42]: attention,
    [60]: [autolink, htmlText],
    [91]: labelStartLink,
    [92]: [hardBreakEscape, characterEscape],
    [93]: labelEnd,
    [95]: attention,
    [96]: codeText
  };
  var insideSpan = {
    null: [attention, resolver]
  };
  var attentionMarkers = {
    null: [42, 95]
  };
  var disable = {
    null: []
  };

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/create-tokenizer.js
  function createTokenizer(parser, initialize, from) {
    let point3 = {
      _bufferIndex: -1,
      _index: 0,
      line: from && from.line || 1,
      column: from && from.column || 1,
      offset: from && from.offset || 0
    };
    const columnStart = {};
    const resolveAllConstructs = [];
    let chunks = [];
    let stack = [];
    let consumed = true;
    const effects = {
      attempt: constructFactory(onsuccessfulconstruct),
      check: constructFactory(onsuccessfulcheck),
      consume,
      enter,
      exit: exit3,
      interrupt: constructFactory(onsuccessfulcheck, {
        interrupt: true
      })
    };
    const context2 = {
      code: null,
      containerState: {},
      defineSkip,
      events: [],
      now,
      parser,
      previous: null,
      sliceSerialize,
      sliceStream,
      write
    };
    let state = initialize.tokenize.call(context2, effects);
    let expectedCode;
    if (initialize.resolveAll) {
      resolveAllConstructs.push(initialize);
    }
    return context2;
    function write(slice) {
      chunks = push(chunks, slice);
      main();
      if (chunks[chunks.length - 1] !== null) {
        return [];
      }
      addResult(initialize, 0);
      context2.events = resolveAll(resolveAllConstructs, context2.events, context2);
      return context2.events;
    }
    function sliceSerialize(token, expandTabs) {
      return serializeChunks(sliceStream(token), expandTabs);
    }
    function sliceStream(token) {
      return sliceChunks(chunks, token);
    }
    function now() {
      const {
        _bufferIndex,
        _index,
        line,
        column,
        offset
      } = point3;
      return {
        _bufferIndex,
        _index,
        line,
        column,
        offset
      };
    }
    function defineSkip(value) {
      columnStart[value.line] = value.column;
      accountForPotentialSkip();
    }
    function main() {
      while (point3._index < chunks.length) {
        const chunk = chunks[point3._index];
        if (typeof chunk === "string") {
          const chunkIndex = point3._index;
          if (point3._bufferIndex < 0) {
            point3._bufferIndex = 0;
          }
          while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
            go(chunk.charCodeAt(point3._bufferIndex));
          }
        } else {
          go(chunk);
        }
      }
    }
    function go(code2) {
      consumed = void 0;
      expectedCode = code2;
      state = state(code2);
    }
    function consume(code2) {
      if (markdownLineEnding(code2)) {
        point3.line++;
        point3.column = 1;
        point3.offset += code2 === -3 ? 2 : 1;
        accountForPotentialSkip();
      } else if (code2 !== -1) {
        point3.column++;
        point3.offset++;
      }
      if (point3._bufferIndex < 0) {
        point3._index++;
      } else {
        point3._bufferIndex++;
        if (point3._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
        // strings.
        /** @type {string} */
        chunks[point3._index].length) {
          point3._bufferIndex = -1;
          point3._index++;
        }
      }
      context2.previous = code2;
      consumed = true;
    }
    function enter(type, fields) {
      const token = fields || {};
      token.type = type;
      token.start = now();
      context2.events.push(["enter", token, context2]);
      stack.push(token);
      return token;
    }
    function exit3(type) {
      const token = stack.pop();
      token.end = now();
      context2.events.push(["exit", token, context2]);
      return token;
    }
    function onsuccessfulconstruct(construct, info) {
      addResult(construct, info.from);
    }
    function onsuccessfulcheck(_, info) {
      info.restore();
    }
    function constructFactory(onreturn, fields) {
      return hook;
      function hook(constructs2, returnState, bogusState) {
        let listOfConstructs;
        let constructIndex;
        let currentConstruct;
        let info;
        return Array.isArray(constructs2) ? (
          /* c8 ignore next 1 */
          handleListOfConstructs(constructs2)
        ) : "tokenize" in constructs2 ? (
          // Looks like a construct.
          handleListOfConstructs([
            /** @type {Construct} */
            constructs2
          ])
        ) : handleMapOfConstructs(constructs2);
        function handleMapOfConstructs(map) {
          return start;
          function start(code2) {
            const left = code2 !== null && map[code2];
            const all2 = code2 !== null && map.null;
            const list2 = [
              // To do: add more extension tests.
              /* c8 ignore next 2 */
              ...Array.isArray(left) ? left : left ? [left] : [],
              ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
            ];
            return handleListOfConstructs(list2)(code2);
          }
        }
        function handleListOfConstructs(list2) {
          listOfConstructs = list2;
          constructIndex = 0;
          if (list2.length === 0) {
            return bogusState;
          }
          return handleConstruct(list2[constructIndex]);
        }
        function handleConstruct(construct) {
          return start;
          function start(code2) {
            info = store();
            currentConstruct = construct;
            if (!construct.partial) {
              context2.currentConstruct = construct;
            }
            if (construct.name && context2.parser.constructs.disable.null.includes(construct.name)) {
              return nok(code2);
            }
            return construct.tokenize.call(
              // If we do have fields, create an object w/ `context` as its
              // prototype.
              // This allows a “live binding”, which is needed for `interrupt`.
              fields ? Object.assign(Object.create(context2), fields) : context2,
              effects,
              ok3,
              nok
            )(code2);
          }
        }
        function ok3(code2) {
          consumed = true;
          onreturn(currentConstruct, info);
          return returnState;
        }
        function nok(code2) {
          consumed = true;
          info.restore();
          if (++constructIndex < listOfConstructs.length) {
            return handleConstruct(listOfConstructs[constructIndex]);
          }
          return bogusState;
        }
      }
    }
    function addResult(construct, from2) {
      if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
        resolveAllConstructs.push(construct);
      }
      if (construct.resolve) {
        splice(context2.events, from2, context2.events.length - from2, construct.resolve(context2.events.slice(from2), context2));
      }
      if (construct.resolveTo) {
        context2.events = construct.resolveTo(context2.events, context2);
      }
    }
    function store() {
      const startPoint = now();
      const startPrevious = context2.previous;
      const startCurrentConstruct = context2.currentConstruct;
      const startEventsIndex = context2.events.length;
      const startStack = Array.from(stack);
      return {
        from: startEventsIndex,
        restore
      };
      function restore() {
        point3 = startPoint;
        context2.previous = startPrevious;
        context2.currentConstruct = startCurrentConstruct;
        context2.events.length = startEventsIndex;
        stack = startStack;
        accountForPotentialSkip();
      }
    }
    function accountForPotentialSkip() {
      if (point3.line in columnStart && point3.column < 2) {
        point3.column = columnStart[point3.line];
        point3.offset += columnStart[point3.line] - 1;
      }
    }
  }
  function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    let view2;
    if (startIndex === endIndex) {
      view2 = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
    } else {
      view2 = chunks.slice(startIndex, endIndex);
      if (startBufferIndex > -1) {
        const head = view2[0];
        if (typeof head === "string") {
          view2[0] = head.slice(startBufferIndex);
        } else {
          view2.shift();
        }
      }
      if (endBufferIndex > 0) {
        view2.push(chunks[endIndex].slice(0, endBufferIndex));
      }
    }
    return view2;
  }
  function serializeChunks(chunks, expandTabs) {
    let index2 = -1;
    const result = [];
    let atTab;
    while (++index2 < chunks.length) {
      const chunk = chunks[index2];
      let value;
      if (typeof chunk === "string") {
        value = chunk;
      } else {
        switch (chunk) {
          case -5: {
            value = "\r";
            break;
          }
          case -4: {
            value = "\n";
            break;
          }
          case -3: {
            value = "\r\n";
            break;
          }
          case -2: {
            value = expandTabs ? " " : "	";
            break;
          }
          case -1: {
            if (!expandTabs && atTab) {
              continue;
            }
            value = " ";
            break;
          }
          default: {
            value = String.fromCharCode(chunk);
          }
        }
      }
      atTab = chunk === -2;
      result.push(value);
    }
    return result.join("");
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/parse.js
  function parse(options) {
    const settings = options || {};
    const constructs2 = (
      /** @type {FullNormalizedExtension} */
      combineExtensions([constructs_exports, ...settings.extensions || []])
    );
    const parser = {
      constructs: constructs2,
      content: create(content),
      defined: [],
      document: create(document2),
      flow: create(flow),
      lazy: {},
      string: create(string),
      text: create(text)
    };
    return parser;
    function create(initial) {
      return creator;
      function creator(from) {
        return createTokenizer(parser, initial, from);
      }
    }
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/postprocess.js
  function postprocess(events) {
    while (!subtokenize(events)) {
    }
    return events;
  }

  // node_modules/.pnpm/micromark@4.0.3/node_modules/micromark/lib/preprocess.js
  var search = /[\0\t\n\r]/g;
  function preprocess() {
    let column = 1;
    let buffer = "";
    let start = true;
    let atCarriageReturn;
    return preprocessor;
    function preprocessor(value, encoding, end) {
      value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
      const chunks = [];
      let startPosition = 0;
      buffer = "";
      if (start) {
        if (value.charCodeAt(0) === 65279) {
          startPosition++;
        }
        start = void 0;
      }
      while (startPosition < value.length) {
        search.lastIndex = startPosition;
        const match = search.exec(value);
        const endPosition = match && match.index !== void 0 ? match.index : value.length;
        const code2 = value.charCodeAt(endPosition);
        if (!match) {
          buffer = value.slice(startPosition);
          break;
        }
        if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
          chunks.push(-3);
          atCarriageReturn = void 0;
        } else {
          if (atCarriageReturn) {
            chunks.push(-5);
            atCarriageReturn = void 0;
          }
          if (startPosition < endPosition) {
            chunks.push(value.slice(startPosition, endPosition));
            column += endPosition - startPosition;
          }
          switch (code2) {
            case 0: {
              chunks.push(65533);
              column++;
              break;
            }
            case 9: {
              const next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next) {
                chunks.push(-1);
              }
              break;
            }
            case 10: {
              chunks.push(-4);
              column = 1;
              break;
            }
            default: {
              atCarriageReturn = true;
              column = 1;
            }
          }
        }
        startPosition = endPosition + 1;
      }
      if (end) {
        if (atCarriageReturn) {
          chunks.push(-5);
        }
        if (buffer) {
          chunks.push(buffer);
        }
        chunks.push(null);
      }
      return chunks;
    }
  }

  // node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/index.js
  var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
  }
  function decode($0, $1, $2) {
    if ($1) {
      return $1;
    }
    const head = $2.charCodeAt(0);
    if (head === 35) {
      const head2 = $2.charCodeAt(1);
      const hex = head2 === 120 || head2 === 88;
      return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return decodeNamedCharacterReference($2) || $0;
  }

  // node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js
  function stringifyPosition(value) {
    if (!value || typeof value !== "object") {
      return "";
    }
    if ("position" in value || "type" in value) {
      return position(value.position);
    }
    if ("start" in value || "end" in value) {
      return position(value);
    }
    if ("line" in value || "column" in value) {
      return point(value);
    }
    return "";
  }
  function point(point3) {
    return index(point3 && point3.line) + ":" + index(point3 && point3.column);
  }
  function position(pos) {
    return point(pos && pos.start) + "-" + point(pos && pos.end);
  }
  function index(value) {
    return value && typeof value === "number" ? value : 1;
  }

  // node_modules/.pnpm/mdast-util-from-markdown@2.0.3/node_modules/mdast-util-from-markdown/lib/index.js
  var own = {}.hasOwnProperty;
  function fromMarkdown(value, encoding, options) {
    if (encoding && typeof encoding === "object") {
      options = encoding;
      encoding = void 0;
    }
    return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
  }
  function compiler(options) {
    const config = {
      transforms: [],
      canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
      enter: {
        autolink: opener(link2),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote2),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText2, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition2),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link2),
        listItem: opener(listItem2),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list2, onenterlistordered),
        listUnordered: opener(list2),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak2)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        characterReference: onexitcharacterreference,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    };
    configure(config, (options || {}).mdastExtensions || []);
    const data = {};
    return compile;
    function compile(events) {
      let tree = {
        type: "root",
        children: []
      };
      const context2 = {
        stack: [tree],
        tokenStack: [],
        config,
        enter,
        exit: exit3,
        buffer,
        resume,
        data
      };
      const listStack = [];
      let index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
          if (events[index2][0] === "enter") {
            listStack.push(index2);
          } else {
            const tail = listStack.pop();
            index2 = prepareList(events, tail, index2);
          }
        }
      }
      index2 = -1;
      while (++index2 < events.length) {
        const handler = config[events[index2][0]];
        if (own.call(handler, events[index2][1].type)) {
          handler[events[index2][1].type].call(Object.assign({
            sliceSerialize: events[index2][2].sliceSerialize
          }, context2), events[index2][1]);
        }
      }
      if (context2.tokenStack.length > 0) {
        const tail = context2.tokenStack[context2.tokenStack.length - 1];
        const handler = tail[1] || defaultOnError;
        handler.call(context2, void 0, tail[0]);
      }
      tree.position = {
        start: point2(events.length > 0 ? events[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: point2(events.length > 0 ? events[events.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      };
      index2 = -1;
      while (++index2 < config.transforms.length) {
        tree = config.transforms[index2](tree) || tree;
      }
      return tree;
    }
    function prepareList(events, start, length) {
      let index2 = start - 1;
      let containerBalance = -1;
      let listSpread = false;
      let listItem3;
      let lineIndex;
      let firstBlankLineIndex;
      let atMarker;
      while (++index2 <= length) {
        const event = events[index2];
        switch (event[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
            break;
          }
          case "lineEndingBlank": {
            if (event[0] === "enter") {
              if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index2;
              }
              atMarker = void 0;
            }
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace": {
            break;
          }
          default: {
            atMarker = void 0;
          }
        }
        if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
          if (listItem3) {
            let tailIndex = index2;
            lineIndex = void 0;
            while (tailIndex--) {
              const tailEvent = events[tailIndex];
              if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                if (tailEvent[0] === "exit") continue;
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                  listSpread = true;
                }
                tailEvent[1].type = "lineEnding";
                lineIndex = tailIndex;
              } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
              } else {
                break;
              }
            }
            if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
              listItem3._spread = true;
            }
            listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
            events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
            index2++;
            length++;
          }
          if (event[1].type === "listItemPrefix") {
            const item = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, event[1].start),
              // @ts-expect-error: we’ll add `end` in a second.
              end: void 0
            };
            listItem3 = item;
            events.splice(index2, 0, ["enter", item, event[2]]);
            index2++;
            length++;
            firstBlankLineIndex = void 0;
            atMarker = true;
          }
        }
      }
      events[start][1]._spread = listSpread;
      return length;
    }
    function opener(create, and) {
      return open;
      function open(token) {
        enter.call(this, create(token), token);
        if (and) and.call(this, token);
      }
    }
    function buffer() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function enter(node2, token, errorHandler) {
      const parent = this.stack[this.stack.length - 1];
      const siblings = parent.children;
      siblings.push(node2);
      this.stack.push(node2);
      this.tokenStack.push([token, errorHandler || void 0]);
      node2.position = {
        start: point2(token.start),
        // @ts-expect-error: `end` will be patched later.
        end: void 0
      };
    }
    function closer(and) {
      return close;
      function close(token) {
        if (and) and.call(this, token);
        exit3.call(this, token);
      }
    }
    function exit3(token, onExitError) {
      const node2 = this.stack.pop();
      const open = this.tokenStack.pop();
      if (!open) {
        throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open");
      } else if (open[0].type !== token.type) {
        if (onExitError) {
          onExitError.call(this, token, open[0]);
        } else {
          const handler = open[1] || defaultOnError;
          handler.call(this, token, open[0]);
        }
      }
      node2.position.end = point2(token.end);
    }
    function resume() {
      return toString(this.stack.pop());
    }
    function onenterlistordered() {
      this.data.expectingFirstListItemValue = true;
    }
    function onenterlistitemvalue(token) {
      if (this.data.expectingFirstListItemValue) {
        const ancestor = this.stack[this.stack.length - 2];
        ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
        this.data.expectingFirstListItemValue = void 0;
      }
    }
    function onexitcodefencedfenceinfo() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.lang = data2;
    }
    function onexitcodefencedfencemeta() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.meta = data2;
    }
    function onexitcodefencedfence() {
      if (this.data.flowCodeInside) return;
      this.buffer();
      this.data.flowCodeInside = true;
    }
    function onexitcodefenced() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
      this.data.flowCodeInside = void 0;
    }
    function onexitcodeindented() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2.replace(/(\r?\n|\r)$/g, "");
    }
    function onexitdefinitionlabelstring(token) {
      const label = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.label = label;
      node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    }
    function onexitdefinitiontitlestring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.title = data2;
    }
    function onexitdefinitiondestinationstring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.url = data2;
    }
    function onexitatxheadingsequence(token) {
      const node2 = this.stack[this.stack.length - 1];
      if (!node2.depth) {
        const depth = this.sliceSerialize(token).length;
        node2.depth = depth;
      }
    }
    function onexitsetextheadingtext() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function onexitsetextheadinglinesequence(token) {
      const node2 = this.stack[this.stack.length - 1];
      node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
    }
    function onexitsetextheading() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function onenterdata(token) {
      const node2 = this.stack[this.stack.length - 1];
      const siblings = node2.children;
      let tail = siblings[siblings.length - 1];
      if (!tail || tail.type !== "text") {
        tail = text4();
        tail.position = {
          start: point2(token.start),
          // @ts-expect-error: we’ll add `end` later.
          end: void 0
        };
        siblings.push(tail);
      }
      this.stack.push(tail);
    }
    function onexitdata(token) {
      const tail = this.stack.pop();
      tail.value += this.sliceSerialize(token);
      tail.position.end = point2(token.end);
    }
    function onexitlineending(token) {
      const context2 = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const tail = context2.children[context2.children.length - 1];
        tail.position.end = point2(token.end);
        this.data.atHardBreak = void 0;
        return;
      }
      if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context2.type)) {
        onenterdata.call(this, token);
        onexitdata.call(this, token);
      }
    }
    function onexithardbreak() {
      this.data.atHardBreak = true;
    }
    function onexithtmlflow() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexithtmltext() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexitcodetext() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexitlink() {
      const node2 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const referenceType = this.data.referenceType || "shortcut";
        node2.type += "Reference";
        node2.referenceType = referenceType;
        delete node2.url;
        delete node2.title;
      } else {
        delete node2.identifier;
        delete node2.label;
      }
      this.data.referenceType = void 0;
    }
    function onexitimage() {
      const node2 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const referenceType = this.data.referenceType || "shortcut";
        node2.type += "Reference";
        node2.referenceType = referenceType;
        delete node2.url;
        delete node2.title;
      } else {
        delete node2.identifier;
        delete node2.label;
      }
      this.data.referenceType = void 0;
    }
    function onexitlabeltext(token) {
      const string3 = this.sliceSerialize(token);
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.label = decodeString(string3);
      ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
    }
    function onexitlabel() {
      const fragment = this.stack[this.stack.length - 1];
      const value = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      this.data.inReference = true;
      if (node2.type === "link") {
        const children = fragment.children;
        node2.children = children;
      } else {
        node2.alt = value;
      }
    }
    function onexitresourcedestinationstring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.url = data2;
    }
    function onexitresourcetitlestring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.title = data2;
    }
    function onexitresource() {
      this.data.inReference = void 0;
    }
    function onenterreference() {
      this.data.referenceType = "collapsed";
    }
    function onexitreferencestring(token) {
      const label = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.label = label;
      node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
      this.data.referenceType = "full";
    }
    function onexitcharacterreferencemarker(token) {
      this.data.characterReferenceType = token.type;
    }
    function onexitcharacterreferencevalue(token) {
      const data2 = this.sliceSerialize(token);
      const type = this.data.characterReferenceType;
      let value;
      if (type) {
        value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
        this.data.characterReferenceType = void 0;
      } else {
        const result = decodeNamedCharacterReference(data2);
        value = result;
      }
      const tail = this.stack[this.stack.length - 1];
      tail.value += value;
    }
    function onexitcharacterreference(token) {
      const tail = this.stack.pop();
      tail.position.end = point2(token.end);
    }
    function onexitautolinkprotocol(token) {
      onexitdata.call(this, token);
      const node2 = this.stack[this.stack.length - 1];
      node2.url = this.sliceSerialize(token);
    }
    function onexitautolinkemail(token) {
      onexitdata.call(this, token);
      const node2 = this.stack[this.stack.length - 1];
      node2.url = "mailto:" + this.sliceSerialize(token);
    }
    function blockQuote2() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function codeFlow() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function codeText2() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function definition2() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function emphasis() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function heading() {
      return {
        type: "heading",
        // @ts-expect-error `depth` will be set later.
        depth: 0,
        children: []
      };
    }
    function hardBreak() {
      return {
        type: "break"
      };
    }
    function html() {
      return {
        type: "html",
        value: ""
      };
    }
    function image() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function link2() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function list2(token) {
      return {
        type: "list",
        ordered: token.type === "listOrdered",
        start: null,
        spread: token._spread,
        children: []
      };
    }
    function listItem2(token) {
      return {
        type: "listItem",
        spread: token._spread,
        checked: null,
        children: []
      };
    }
    function paragraph() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function strong() {
      return {
        type: "strong",
        children: []
      };
    }
    function text4() {
      return {
        type: "text",
        value: ""
      };
    }
    function thematicBreak2() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function point2(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function configure(combined, extensions) {
    let index2 = -1;
    while (++index2 < extensions.length) {
      const value = extensions[index2];
      if (Array.isArray(value)) {
        configure(combined, value);
      } else {
        extension(combined, value);
      }
    }
  }
  function extension(combined, extension2) {
    let key;
    for (key in extension2) {
      if (own.call(extension2, key)) {
        switch (key) {
          case "canContainEols": {
            const right = extension2[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
          case "transforms": {
            const right = extension2[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
          case "enter":
          case "exit": {
            const right = extension2[key];
            if (right) {
              Object.assign(combined[key], right);
            }
            break;
          }
        }
      }
    }
  }
  function defaultOnError(left, right) {
    if (left) {
      throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open");
    } else {
      throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open");
    }
  }

  // node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
  function ccount(value, character) {
    const source = String(value);
    if (typeof character !== "string") {
      throw new TypeError("Expected character");
    }
    let count = 0;
    let index2 = source.indexOf(character);
    while (index2 !== -1) {
      count++;
      index2 = source.indexOf(character, index2 + character.length);
    }
    return count;
  }

  // node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/default.js
  function ok() {
  }

  // node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
  function escapeStringRegexp(string3) {
    if (typeof string3 !== "string") {
      throw new TypeError("Expected a string");
    }
    return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }

  // node_modules/.pnpm/unist-util-is@6.0.1/node_modules/unist-util-is/lib/index.js
  var convert = (
    // Note: overloads in JSDoc can’t yet use different `@template`s.
    /**
     * @type {(
     *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
     *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
     *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
     *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
     *   ((test?: Test) => Check)
     * )}
     */
    /**
     * @param {Test} [test]
     * @returns {Check}
     */
    function(test) {
      if (test === null || test === void 0) {
        return ok2;
      }
      if (typeof test === "function") {
        return castFactory(test);
      }
      if (typeof test === "object") {
        return Array.isArray(test) ? anyFactory(test) : (
          // Cast because `ReadonlyArray` goes into the above but `isArray`
          // narrows to `Array`.
          propertiesFactory(
            /** @type {Props} */
            test
          )
        );
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      throw new Error("Expected function, string, or object as test");
    }
  );
  function anyFactory(tests) {
    const checks = [];
    let index2 = -1;
    while (++index2 < tests.length) {
      checks[index2] = convert(tests[index2]);
    }
    return castFactory(any);
    function any(...parameters) {
      let index3 = -1;
      while (++index3 < checks.length) {
        if (checks[index3].apply(this, parameters)) return true;
      }
      return false;
    }
  }
  function propertiesFactory(check) {
    const checkAsRecord = (
      /** @type {Record<string, unknown>} */
      check
    );
    return castFactory(all2);
    function all2(node2) {
      const nodeAsRecord = (
        /** @type {Record<string, unknown>} */
        /** @type {unknown} */
        node2
      );
      let key;
      for (key in check) {
        if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
      }
      return true;
    }
  }
  function typeFactory(check) {
    return castFactory(type);
    function type(node2) {
      return node2 && node2.type === check;
    }
  }
  function castFactory(testFunction) {
    return check;
    function check(value, index2, parent) {
      return Boolean(
        looksLikeANode(value) && testFunction.call(
          this,
          value,
          typeof index2 === "number" ? index2 : void 0,
          parent || void 0
        )
      );
    }
  }
  function ok2() {
    return true;
  }
  function looksLikeANode(value) {
    return value !== null && typeof value === "object" && "type" in value;
  }

  // node_modules/.pnpm/unist-util-visit-parents@6.0.2/node_modules/unist-util-visit-parents/lib/color.js
  function color(d) {
    return d;
  }

  // node_modules/.pnpm/unist-util-visit-parents@6.0.2/node_modules/unist-util-visit-parents/lib/index.js
  var empty = [];
  var CONTINUE = true;
  var EXIT = false;
  var SKIP = "skip";
  function visitParents(tree, test, visitor, reverse) {
    let check;
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
    } else {
      check = test;
    }
    const is2 = convert(check);
    const step = reverse ? -1 : 1;
    factory(tree, void 0, [])();
    function factory(node2, index2, parents) {
      const value = (
        /** @type {Record<string, unknown>} */
        node2 && typeof node2 === "object" ? node2 : {}
      );
      if (typeof value.type === "string") {
        const name = (
          // `hast`
          typeof value.tagName === "string" ? value.tagName : (
            // `xast`
            typeof value.name === "string" ? value.name : void 0
          )
        );
        Object.defineProperty(visit, "name", {
          value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
        });
      }
      return visit;
      function visit() {
        let result = empty;
        let subresult;
        let offset;
        let grandparents;
        if (!test || is2(node2, index2, parents[parents.length - 1] || void 0)) {
          result = toResult(visitor(node2, parents));
          if (result[0] === EXIT) {
            return result;
          }
        }
        if ("children" in node2 && node2.children) {
          const nodeAsParent = (
            /** @type {UnistParent} */
            node2
          );
          if (nodeAsParent.children && result[0] !== SKIP) {
            offset = (reverse ? nodeAsParent.children.length : -1) + step;
            grandparents = parents.concat(nodeAsParent);
            while (offset > -1 && offset < nodeAsParent.children.length) {
              const child = nodeAsParent.children[offset];
              subresult = factory(child, offset, grandparents)();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
        }
        return result;
      }
    }
  }
  function toResult(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "number") {
      return [CONTINUE, value];
    }
    return value === null || value === void 0 ? empty : [value];
  }

  // node_modules/.pnpm/mdast-util-find-and-replace@3.0.2/node_modules/mdast-util-find-and-replace/lib/index.js
  function findAndReplace(tree, list2, options) {
    const settings = options || {};
    const ignored = convert(settings.ignore || []);
    const pairs = toPairs(list2);
    let pairIndex = -1;
    while (++pairIndex < pairs.length) {
      visitParents(tree, "text", visitor);
    }
    function visitor(node2, parents) {
      let index2 = -1;
      let grandparent;
      while (++index2 < parents.length) {
        const parent = parents[index2];
        const siblings = grandparent ? grandparent.children : void 0;
        if (ignored(
          parent,
          siblings ? siblings.indexOf(parent) : void 0,
          grandparent
        )) {
          return;
        }
        grandparent = parent;
      }
      if (grandparent) {
        return handler(node2, parents);
      }
    }
    function handler(node2, parents) {
      const parent = parents[parents.length - 1];
      const find = pairs[pairIndex][0];
      const replace2 = pairs[pairIndex][1];
      let start = 0;
      const siblings = parent.children;
      const index2 = siblings.indexOf(node2);
      let change = false;
      let nodes = [];
      find.lastIndex = 0;
      let match = find.exec(node2.value);
      while (match) {
        const position2 = match.index;
        const matchObject = {
          index: match.index,
          input: match.input,
          stack: [...parents, node2]
        };
        let value = replace2(...match, matchObject);
        if (typeof value === "string") {
          value = value.length > 0 ? { type: "text", value } : void 0;
        }
        if (value === false) {
          find.lastIndex = position2 + 1;
        } else {
          if (start !== position2) {
            nodes.push({
              type: "text",
              value: node2.value.slice(start, position2)
            });
          }
          if (Array.isArray(value)) {
            nodes.push(...value);
          } else if (value) {
            nodes.push(value);
          }
          start = position2 + match[0].length;
          change = true;
        }
        if (!find.global) {
          break;
        }
        match = find.exec(node2.value);
      }
      if (change) {
        if (start < node2.value.length) {
          nodes.push({ type: "text", value: node2.value.slice(start) });
        }
        parent.children.splice(index2, 1, ...nodes);
      } else {
        nodes = [node2];
      }
      return index2 + nodes.length;
    }
  }
  function toPairs(tupleOrList) {
    const result = [];
    if (!Array.isArray(tupleOrList)) {
      throw new TypeError("Expected find and replace tuple or list of tuples");
    }
    const list2 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
    let index2 = -1;
    while (++index2 < list2.length) {
      const tuple = list2[index2];
      result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
    }
    return result;
  }
  function toExpression(find) {
    return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
  }
  function toFunction(replace2) {
    return typeof replace2 === "function" ? replace2 : function() {
      return replace2;
    };
  }

  // node_modules/.pnpm/mdast-util-gfm-autolink-literal@2.0.1/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
  function gfmAutolinkLiteralFromMarkdown() {
    return {
      transforms: [transformGfmAutolinkLiterals],
      enter: {
        literalAutolink: enterLiteralAutolink,
        literalAutolinkEmail: enterLiteralAutolinkValue,
        literalAutolinkHttp: enterLiteralAutolinkValue,
        literalAutolinkWww: enterLiteralAutolinkValue
      },
      exit: {
        literalAutolink: exitLiteralAutolink,
        literalAutolinkEmail: exitLiteralAutolinkEmail,
        literalAutolinkHttp: exitLiteralAutolinkHttp,
        literalAutolinkWww: exitLiteralAutolinkWww
      }
    };
  }
  function enterLiteralAutolink(token) {
    this.enter({ type: "link", title: null, url: "", children: [] }, token);
  }
  function enterLiteralAutolinkValue(token) {
    this.config.enter.autolinkProtocol.call(this, token);
  }
  function exitLiteralAutolinkHttp(token) {
    this.config.exit.autolinkProtocol.call(this, token);
  }
  function exitLiteralAutolinkWww(token) {
    this.config.exit.data.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    ok(node2.type === "link");
    node2.url = "http://" + this.sliceSerialize(token);
  }
  function exitLiteralAutolinkEmail(token) {
    this.config.exit.autolinkEmail.call(this, token);
  }
  function exitLiteralAutolink(token) {
    this.exit(token);
  }
  function transformGfmAutolinkLiterals(tree) {
    findAndReplace(
      tree,
      [
        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
        [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), findEmail]
      ],
      { ignore: ["link", "linkReference"] }
    );
  }
  function findUrl(_, protocol, domain2, path2, match) {
    let prefix = "";
    if (!previous2(match)) {
      return false;
    }
    if (/^w/i.test(protocol)) {
      domain2 = protocol + domain2;
      protocol = "";
      prefix = "http://";
    }
    if (!isCorrectDomain(domain2)) {
      return false;
    }
    const parts = splitUrl(domain2 + path2);
    if (!parts[0]) return false;
    const result = {
      type: "link",
      title: null,
      url: prefix + protocol + parts[0],
      children: [{ type: "text", value: protocol + parts[0] }]
    };
    if (parts[1]) {
      return [result, { type: "text", value: parts[1] }];
    }
    return result;
  }
  function findEmail(_, atext, label, match) {
    if (
      // Not an expected previous character.
      !previous2(match, true) || // Label ends in not allowed character.
      /[-\d_]$/.test(label)
    ) {
      return false;
    }
    return {
      type: "link",
      title: null,
      url: "mailto:" + atext + "@" + label,
      children: [{ type: "text", value: atext + "@" + label }]
    };
  }
  function isCorrectDomain(domain2) {
    const parts = domain2.split(".");
    if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
      return false;
    }
    return true;
  }
  function splitUrl(url) {
    const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
    if (!trailExec) {
      return [url, void 0];
    }
    url = url.slice(0, trailExec.index);
    let trail2 = trailExec[0];
    let closingParenIndex = trail2.indexOf(")");
    const openingParens = ccount(url, "(");
    let closingParens = ccount(url, ")");
    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail2.slice(0, closingParenIndex + 1);
      trail2 = trail2.slice(closingParenIndex + 1);
      closingParenIndex = trail2.indexOf(")");
      closingParens++;
    }
    return [url, trail2];
  }
  function previous2(match, email) {
    const code2 = match.input.charCodeAt(match.index - 1);
    return (match.index === 0 || unicodeWhitespace(code2) || unicodePunctuation(code2)) && // If it’s an email, the previous character should not be a slash.
    (!email || code2 !== 47);
  }

  // node_modules/.pnpm/mdast-util-gfm-footnote@2.1.0/node_modules/mdast-util-gfm-footnote/lib/index.js
  footnoteReference.peek = footnoteReferencePeek;
  function enterFootnoteCallString() {
    this.buffer();
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function enterFootnoteDefinition(token) {
    this.enter(
      { type: "footnoteDefinition", identifier: "", label: "", children: [] },
      token
    );
  }
  function exitFootnoteCallString(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    ok(node2.type === "footnoteReference");
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
    node2.label = label;
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
  function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    ok(node2.type === "footnoteDefinition");
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
    node2.label = label;
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteReference(node2, _, state, info) {
    const tracker = state.createTracker(info);
    let value = tracker.move("[^");
    const exit3 = state.enter("footnoteReference");
    const subexit = state.enter("reference");
    value += tracker.move(
      state.safe(state.associationId(node2), { after: "]", before: value })
    );
    subexit();
    exit3();
    value += tracker.move("]");
    return value;
  }
  function gfmFootnoteFromMarkdown() {
    return {
      enter: {
        gfmFootnoteCallString: enterFootnoteCallString,
        gfmFootnoteCall: enterFootnoteCall,
        gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
        gfmFootnoteDefinition: enterFootnoteDefinition
      },
      exit: {
        gfmFootnoteCallString: exitFootnoteCallString,
        gfmFootnoteCall: exitFootnoteCall,
        gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
        gfmFootnoteDefinition: exitFootnoteDefinition
      }
    };
  }

  // node_modules/.pnpm/mdast-util-gfm-strikethrough@2.0.1/node_modules/mdast-util-gfm-strikethrough/lib/index.js
  handleDelete.attention = attentionDelete;
  handleDelete.peek = peekDelete;
  function gfmStrikethroughFromMarkdown() {
    return {
      canContainEols: ["delete"],
      enter: { strikethrough: enterStrikethrough },
      exit: { strikethrough: exitStrikethrough }
    };
  }
  function enterStrikethrough(token) {
    this.enter({ type: "delete", children: [], position: void 0 }, token);
  }
  function exitStrikethrough(token) {
    this.exit(token);
  }
  function handleDelete(node2, _, state, info) {
    const tracker = state.createTracker(info);
    const sequence = state.stack.includes("strikethrough") ? "~" : "~~";
    const exit3 = state.enter("strikethrough");
    let value = tracker.move(sequence);
    value += state.containerPhrasing(node2, {
      ...tracker.current(),
      before: value,
      after: "~"
    });
    value += tracker.move(sequence);
    exit3();
    return value;
  }
  function attentionDelete() {
    return { construct: "strikethrough", markers: ["~"], sizes: [2, 1] };
  }
  function peekDelete() {
    return "~";
  }

  // node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js
  function gfmTableFromMarkdown() {
    return {
      enter: {
        table: enterTable,
        tableData: enterCell,
        tableHeader: enterCell,
        tableRow: enterRow
      },
      exit: {
        codeText: exitCodeText,
        table: exitTable,
        tableData: exit2,
        tableHeader: exit2,
        tableRow: exit2
      }
    };
  }
  function enterTable(token) {
    const align = token._align;
    ok(align, "expected `_align` on table");
    this.enter(
      {
        type: "table",
        align: align.map(function(d) {
          return d === "none" ? null : d;
        }),
        children: []
      },
      token
    );
    this.data.inTable = true;
  }
  function exitTable(token) {
    this.exit(token);
    this.data.inTable = void 0;
  }
  function enterRow(token) {
    this.enter({ type: "tableRow", children: [] }, token);
  }
  function exit2(token) {
    this.exit(token);
  }
  function enterCell(token) {
    this.enter({ type: "tableCell", children: [] }, token);
  }
  function exitCodeText(token) {
    let value = this.resume();
    if (this.data.inTable) {
      value = value.replace(/\\([\\|])/g, replace);
    }
    const node2 = this.stack[this.stack.length - 1];
    ok(node2.type === "inlineCode");
    node2.value = value;
    this.exit(token);
  }
  function replace($0, $1) {
    return $1 === "|" ? $1 : $0;
  }

  // node_modules/.pnpm/mdast-util-gfm-task-list-item@2.0.0/node_modules/mdast-util-gfm-task-list-item/lib/index.js
  function gfmTaskListItemFromMarkdown() {
    return {
      exit: {
        taskListCheckValueChecked: exitCheck,
        taskListCheckValueUnchecked: exitCheck,
        paragraph: exitParagraphWithTaskListItem
      }
    };
  }
  function exitCheck(token) {
    const node2 = this.stack[this.stack.length - 2];
    ok(node2.type === "listItem");
    node2.checked = token.type === "taskListCheckValueChecked";
  }
  function exitParagraphWithTaskListItem(token) {
    const parent = this.stack[this.stack.length - 2];
    if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
      const node2 = this.stack[this.stack.length - 1];
      ok(node2.type === "paragraph");
      const head = node2.children[0];
      if (head && head.type === "text") {
        const siblings = parent.children;
        let index2 = -1;
        let firstParaghraph;
        while (++index2 < siblings.length) {
          const sibling = siblings[index2];
          if (sibling.type === "paragraph") {
            firstParaghraph = sibling;
            break;
          }
        }
        if (firstParaghraph === node2) {
          head.value = head.value.slice(1);
          if (head.value.length === 0) {
            node2.children.shift();
          } else if (node2.position && head.position && typeof head.position.start.offset === "number") {
            head.position.start.column++;
            head.position.start.offset++;
            node2.position.start = Object.assign({}, head.position.start);
          }
        }
      }
    }
    this.exit(token);
  }

  // node_modules/.pnpm/mdast-util-gfm@3.1.0/node_modules/mdast-util-gfm/lib/index.js
  function gfmFromMarkdown() {
    return [
      gfmAutolinkLiteralFromMarkdown(),
      gfmFootnoteFromMarkdown(),
      gfmStrikethroughFromMarkdown(),
      gfmTableFromMarkdown(),
      gfmTaskListItemFromMarkdown()
    ];
  }

  // node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.1.0/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
  var wwwPrefix = {
    tokenize: tokenizeWwwPrefix,
    partial: true
  };
  var domain = {
    tokenize: tokenizeDomain,
    partial: true
  };
  var path = {
    tokenize: tokenizePath,
    partial: true
  };
  var trail = {
    tokenize: tokenizeTrail,
    partial: true
  };
  var emailDomainDotTrail = {
    tokenize: tokenizeEmailDomainDotTrail,
    partial: true
  };
  var wwwAutolink = {
    name: "wwwAutolink",
    tokenize: tokenizeWwwAutolink,
    previous: previousWww
  };
  var protocolAutolink = {
    name: "protocolAutolink",
    tokenize: tokenizeProtocolAutolink,
    previous: previousProtocol
  };
  var emailAutolink = {
    name: "emailAutolink",
    tokenize: tokenizeEmailAutolink,
    previous: previousEmail
  };
  var text3 = {};
  function gfmAutolinkLiteral() {
    return {
      text: text3
    };
  }
  var code = 48;
  while (code < 123) {
    text3[code] = emailAutolink;
    code++;
    if (code === 58) code = 65;
    else if (code === 91) code = 97;
  }
  text3[43] = emailAutolink;
  text3[45] = emailAutolink;
  text3[46] = emailAutolink;
  text3[95] = emailAutolink;
  text3[72] = [emailAutolink, protocolAutolink];
  text3[104] = [emailAutolink, protocolAutolink];
  text3[87] = [emailAutolink, wwwAutolink];
  text3[119] = [emailAutolink, wwwAutolink];
  function tokenizeEmailAutolink(effects, ok3, nok) {
    const self = this;
    let dot;
    let data;
    return start;
    function start(code2) {
      if (!gfmAtext(code2) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
        return nok(code2);
      }
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkEmail");
      return atext(code2);
    }
    function atext(code2) {
      if (gfmAtext(code2)) {
        effects.consume(code2);
        return atext;
      }
      if (code2 === 64) {
        effects.consume(code2);
        return emailDomain;
      }
      return nok(code2);
    }
    function emailDomain(code2) {
      if (code2 === 46) {
        return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code2);
      }
      if (code2 === 45 || code2 === 95 || asciiAlphanumeric(code2)) {
        data = true;
        effects.consume(code2);
        return emailDomain;
      }
      return emailDomainAfter(code2);
    }
    function emailDomainDot(code2) {
      effects.consume(code2);
      dot = true;
      return emailDomain;
    }
    function emailDomainAfter(code2) {
      if (data && dot && asciiAlpha(self.previous)) {
        effects.exit("literalAutolinkEmail");
        effects.exit("literalAutolink");
        return ok3(code2);
      }
      return nok(code2);
    }
  }
  function tokenizeWwwAutolink(effects, ok3, nok) {
    const self = this;
    return wwwStart;
    function wwwStart(code2) {
      if (code2 !== 87 && code2 !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
        return nok(code2);
      }
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkWww");
      return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code2);
    }
    function wwwAfter(code2) {
      effects.exit("literalAutolinkWww");
      effects.exit("literalAutolink");
      return ok3(code2);
    }
  }
  function tokenizeProtocolAutolink(effects, ok3, nok) {
    const self = this;
    let buffer = "";
    let seen = false;
    return protocolStart;
    function protocolStart(code2) {
      if ((code2 === 72 || code2 === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkHttp");
        buffer += String.fromCodePoint(code2);
        effects.consume(code2);
        return protocolPrefixInside;
      }
      return nok(code2);
    }
    function protocolPrefixInside(code2) {
      if (asciiAlpha(code2) && buffer.length < 5) {
        buffer += String.fromCodePoint(code2);
        effects.consume(code2);
        return protocolPrefixInside;
      }
      if (code2 === 58) {
        const protocol = buffer.toLowerCase();
        if (protocol === "http" || protocol === "https") {
          effects.consume(code2);
          return protocolSlashesInside;
        }
      }
      return nok(code2);
    }
    function protocolSlashesInside(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        if (seen) {
          return afterProtocol;
        }
        seen = true;
        return protocolSlashesInside;
      }
      return nok(code2);
    }
    function afterProtocol(code2) {
      return code2 === null || asciiControl(code2) || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || unicodePunctuation(code2) ? nok(code2) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code2);
    }
    function protocolAfter(code2) {
      effects.exit("literalAutolinkHttp");
      effects.exit("literalAutolink");
      return ok3(code2);
    }
  }
  function tokenizeWwwPrefix(effects, ok3, nok) {
    let size = 0;
    return wwwPrefixInside;
    function wwwPrefixInside(code2) {
      if ((code2 === 87 || code2 === 119) && size < 3) {
        size++;
        effects.consume(code2);
        return wwwPrefixInside;
      }
      if (code2 === 46 && size === 3) {
        effects.consume(code2);
        return wwwPrefixAfter;
      }
      return nok(code2);
    }
    function wwwPrefixAfter(code2) {
      return code2 === null ? nok(code2) : ok3(code2);
    }
  }
  function tokenizeDomain(effects, ok3, nok) {
    let underscoreInLastSegment;
    let underscoreInLastLastSegment;
    let seen;
    return domainInside;
    function domainInside(code2) {
      if (code2 === 46 || code2 === 95) {
        return effects.check(trail, domainAfter, domainAtPunctuation)(code2);
      }
      if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || code2 !== 45 && unicodePunctuation(code2)) {
        return domainAfter(code2);
      }
      seen = true;
      effects.consume(code2);
      return domainInside;
    }
    function domainAtPunctuation(code2) {
      if (code2 === 95) {
        underscoreInLastSegment = true;
      } else {
        underscoreInLastLastSegment = underscoreInLastSegment;
        underscoreInLastSegment = void 0;
      }
      effects.consume(code2);
      return domainInside;
    }
    function domainAfter(code2) {
      if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
        return nok(code2);
      }
      return ok3(code2);
    }
  }
  function tokenizePath(effects, ok3) {
    let sizeOpen = 0;
    let sizeClose = 0;
    return pathInside;
    function pathInside(code2) {
      if (code2 === 40) {
        sizeOpen++;
        effects.consume(code2);
        return pathInside;
      }
      if (code2 === 41 && sizeClose < sizeOpen) {
        return pathAtPunctuation(code2);
      }
      if (code2 === 33 || code2 === 34 || code2 === 38 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 60 || code2 === 63 || code2 === 93 || code2 === 95 || code2 === 126) {
        return effects.check(trail, ok3, pathAtPunctuation)(code2);
      }
      if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
        return ok3(code2);
      }
      effects.consume(code2);
      return pathInside;
    }
    function pathAtPunctuation(code2) {
      if (code2 === 41) {
        sizeClose++;
      }
      effects.consume(code2);
      return pathInside;
    }
  }
  function tokenizeTrail(effects, ok3, nok) {
    return trail2;
    function trail2(code2) {
      if (code2 === 33 || code2 === 34 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 63 || code2 === 95 || code2 === 126) {
        effects.consume(code2);
        return trail2;
      }
      if (code2 === 38) {
        effects.consume(code2);
        return trailCharacterReferenceStart;
      }
      if (code2 === 93) {
        effects.consume(code2);
        return trailBracketAfter;
      }
      if (
        // `<` is an end.
        code2 === 60 || // So is whitespace.
        code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)
      ) {
        return ok3(code2);
      }
      return nok(code2);
    }
    function trailBracketAfter(code2) {
      if (code2 === null || code2 === 40 || code2 === 91 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
        return ok3(code2);
      }
      return trail2(code2);
    }
    function trailCharacterReferenceStart(code2) {
      return asciiAlpha(code2) ? trailCharacterReferenceInside(code2) : nok(code2);
    }
    function trailCharacterReferenceInside(code2) {
      if (code2 === 59) {
        effects.consume(code2);
        return trail2;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return trailCharacterReferenceInside;
      }
      return nok(code2);
    }
  }
  function tokenizeEmailDomainDotTrail(effects, ok3, nok) {
    return start;
    function start(code2) {
      effects.consume(code2);
      return after;
    }
    function after(code2) {
      return asciiAlphanumeric(code2) ? nok(code2) : ok3(code2);
    }
  }
  function previousWww(code2) {
    return code2 === null || code2 === 40 || code2 === 42 || code2 === 95 || code2 === 91 || code2 === 93 || code2 === 126 || markdownLineEndingOrSpace(code2);
  }
  function previousProtocol(code2) {
    return !asciiAlpha(code2);
  }
  function previousEmail(code2) {
    return !(code2 === 47 || gfmAtext(code2));
  }
  function gfmAtext(code2) {
    return code2 === 43 || code2 === 45 || code2 === 46 || code2 === 95 || asciiAlphanumeric(code2);
  }
  function previousUnbalanced(events) {
    let index2 = events.length;
    let result = false;
    while (index2--) {
      const token = events[index2][1];
      if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
        result = true;
        break;
      }
      if (token._gfmAutolinkLiteralWalkedInto) {
        result = false;
        break;
      }
    }
    if (events.length > 0 && !result) {
      events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    }
    return result;
  }

  // node_modules/.pnpm/micromark-extension-gfm-footnote@2.1.0/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
  var indent = {
    tokenize: tokenizeIndent2,
    partial: true
  };
  function gfmFootnote() {
    return {
      document: {
        [91]: {
          name: "gfmFootnoteDefinition",
          tokenize: tokenizeDefinitionStart,
          continuation: {
            tokenize: tokenizeDefinitionContinuation
          },
          exit: gfmFootnoteDefinitionEnd
        }
      },
      text: {
        [91]: {
          name: "gfmFootnoteCall",
          tokenize: tokenizeGfmFootnoteCall
        },
        [93]: {
          name: "gfmPotentialFootnoteCall",
          add: "after",
          tokenize: tokenizePotentialGfmFootnoteCall,
          resolveTo: resolveToPotentialGfmFootnoteCall
        }
      }
    };
  }
  function tokenizePotentialGfmFootnoteCall(effects, ok3, nok) {
    const self = this;
    let index2 = self.events.length;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let labelStart;
    while (index2--) {
      const token = self.events[index2][1];
      if (token.type === "labelImage") {
        labelStart = token;
        break;
      }
      if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
        break;
      }
    }
    return start;
    function start(code2) {
      if (!labelStart || !labelStart._balanced) {
        return nok(code2);
      }
      const id = normalizeIdentifier(self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      }));
      if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
        return nok(code2);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteCallLabelMarker");
      return ok3(code2);
    }
  }
  function resolveToPotentialGfmFootnoteCall(events, context2) {
    let index2 = events.length;
    let labelStart;
    while (index2--) {
      if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
        labelStart = events[index2][1];
        break;
      }
    }
    events[index2 + 1][1].type = "data";
    events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
    const call2 = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, events[index2 + 3][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    const marker = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, events[index2 + 3][1].end),
      end: Object.assign({}, events[index2 + 3][1].end)
    };
    marker.end.column++;
    marker.end.offset++;
    marker.end._bufferIndex++;
    const string3 = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, marker.end),
      end: Object.assign({}, events[events.length - 1][1].start)
    };
    const chunk = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, string3.start),
      end: Object.assign({}, string3.end)
    };
    const replacement = [
      // Take the `labelImageMarker` (now `data`, the `!`)
      events[index2 + 1],
      events[index2 + 2],
      ["enter", call2, context2],
      // The `[`
      events[index2 + 3],
      events[index2 + 4],
      // The `^`.
      ["enter", marker, context2],
      ["exit", marker, context2],
      // Everything in between.
      ["enter", string3, context2],
      ["enter", chunk, context2],
      ["exit", chunk, context2],
      ["exit", string3, context2],
      // The ending (`]`, properly parsed and labelled).
      events[events.length - 2],
      events[events.length - 1],
      ["exit", call2, context2]
    ];
    events.splice(index2, events.length - index2 + 1, ...replacement);
    return events;
  }
  function tokenizeGfmFootnoteCall(effects, ok3, nok) {
    const self = this;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let size = 0;
    let data;
    return start;
    function start(code2) {
      effects.enter("gfmFootnoteCall");
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteCallLabelMarker");
      return callStart;
    }
    function callStart(code2) {
      if (code2 !== 94) return nok(code2);
      effects.enter("gfmFootnoteCallMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteCallMarker");
      effects.enter("gfmFootnoteCallString");
      effects.enter("chunkString").contentType = "string";
      return callData;
    }
    function callData(code2) {
      if (
        // Too long.
        size > 999 || // Closing brace with nothing.
        code2 === 93 && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code2 === null || code2 === 91 || markdownLineEndingOrSpace(code2)
      ) {
        return nok(code2);
      }
      if (code2 === 93) {
        effects.exit("chunkString");
        const token = effects.exit("gfmFootnoteCallString");
        if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) {
          return nok(code2);
        }
        effects.enter("gfmFootnoteCallLabelMarker");
        effects.consume(code2);
        effects.exit("gfmFootnoteCallLabelMarker");
        effects.exit("gfmFootnoteCall");
        return ok3;
      }
      if (!markdownLineEndingOrSpace(code2)) {
        data = true;
      }
      size++;
      effects.consume(code2);
      return code2 === 92 ? callEscape : callData;
    }
    function callEscape(code2) {
      if (code2 === 91 || code2 === 92 || code2 === 93) {
        effects.consume(code2);
        size++;
        return callData;
      }
      return callData(code2);
    }
  }
  function tokenizeDefinitionStart(effects, ok3, nok) {
    const self = this;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let identifier;
    let size = 0;
    let data;
    return start;
    function start(code2) {
      effects.enter("gfmFootnoteDefinition")._container = true;
      effects.enter("gfmFootnoteDefinitionLabel");
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      return labelAtMarker;
    }
    function labelAtMarker(code2) {
      if (code2 === 94) {
        effects.enter("gfmFootnoteDefinitionMarker");
        effects.consume(code2);
        effects.exit("gfmFootnoteDefinitionMarker");
        effects.enter("gfmFootnoteDefinitionLabelString");
        effects.enter("chunkString").contentType = "string";
        return labelInside;
      }
      return nok(code2);
    }
    function labelInside(code2) {
      if (
        // Too long.
        size > 999 || // Closing brace with nothing.
        code2 === 93 && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code2 === null || code2 === 91 || markdownLineEndingOrSpace(code2)
      ) {
        return nok(code2);
      }
      if (code2 === 93) {
        effects.exit("chunkString");
        const token = effects.exit("gfmFootnoteDefinitionLabelString");
        identifier = normalizeIdentifier(self.sliceSerialize(token));
        effects.enter("gfmFootnoteDefinitionLabelMarker");
        effects.consume(code2);
        effects.exit("gfmFootnoteDefinitionLabelMarker");
        effects.exit("gfmFootnoteDefinitionLabel");
        return labelAfter;
      }
      if (!markdownLineEndingOrSpace(code2)) {
        data = true;
      }
      size++;
      effects.consume(code2);
      return code2 === 92 ? labelEscape : labelInside;
    }
    function labelEscape(code2) {
      if (code2 === 91 || code2 === 92 || code2 === 93) {
        effects.consume(code2);
        size++;
        return labelInside;
      }
      return labelInside(code2);
    }
    function labelAfter(code2) {
      if (code2 === 58) {
        effects.enter("definitionMarker");
        effects.consume(code2);
        effects.exit("definitionMarker");
        if (!defined.includes(identifier)) {
          defined.push(identifier);
        }
        return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
      }
      return nok(code2);
    }
    function whitespaceAfter(code2) {
      return ok3(code2);
    }
  }
  function tokenizeDefinitionContinuation(effects, ok3, nok) {
    return effects.check(blankLine, ok3, effects.attempt(indent, ok3, nok));
  }
  function gfmFootnoteDefinitionEnd(effects) {
    effects.exit("gfmFootnoteDefinition");
  }
  function tokenizeIndent2(effects, ok3, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
    function afterPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok3(code2) : nok(code2);
    }
  }

  // node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.1.0/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
  function gfmStrikethrough(options) {
    const options_ = options || {};
    let single = options_.singleTilde;
    const tokenizer = {
      name: "strikethrough",
      tokenize: tokenizeStrikethrough,
      resolveAll: resolveAllStrikethrough
    };
    if (single === null || single === void 0) {
      single = true;
    }
    return {
      text: {
        [126]: tokenizer
      },
      insideSpan: {
        null: [tokenizer]
      },
      attentionMarkers: {
        null: [126]
      }
    };
    function resolveAllStrikethrough(events, context2) {
      let index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
          let open = index2;
          while (open--) {
            if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
            events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
              events[index2][1].type = "strikethroughSequence";
              events[open][1].type = "strikethroughSequence";
              const strikethrough = {
                type: "strikethrough",
                start: Object.assign({}, events[open][1].start),
                end: Object.assign({}, events[index2][1].end)
              };
              const text4 = {
                type: "strikethroughText",
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index2][1].start)
              };
              const nextEvents = [["enter", strikethrough, context2], ["enter", events[open][1], context2], ["exit", events[open][1], context2], ["enter", text4, context2]];
              const insideSpan2 = context2.parser.constructs.insideSpan.null;
              if (insideSpan2) {
                splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan2, events.slice(open + 1, index2), context2));
              }
              splice(nextEvents, nextEvents.length, 0, [["exit", text4, context2], ["enter", events[index2][1], context2], ["exit", events[index2][1], context2], ["exit", strikethrough, context2]]);
              splice(events, open - 1, index2 - open + 3, nextEvents);
              index2 = open + nextEvents.length - 2;
              break;
            }
          }
        }
      }
      index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][1].type === "strikethroughSequenceTemporary") {
          events[index2][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeStrikethrough(effects, ok3, nok) {
      const previous3 = this.previous;
      const events = this.events;
      let size = 0;
      return start;
      function start(code2) {
        if (previous3 === 126 && events[events.length - 1][1].type !== "characterEscape") {
          return nok(code2);
        }
        effects.enter("strikethroughSequenceTemporary");
        return more(code2);
      }
      function more(code2) {
        const before = classifyCharacter(previous3);
        if (code2 === 126) {
          if (size > 1) return nok(code2);
          effects.consume(code2);
          size++;
          return more;
        }
        if (size < 2 && !single) return nok(code2);
        const token = effects.exit("strikethroughSequenceTemporary");
        const after = classifyCharacter(code2);
        token._open = !after || after === 2 && Boolean(before);
        token._close = !before || before === 2 && Boolean(after);
        return ok3(code2);
      }
    }
  }

  // node_modules/.pnpm/micromark-extension-gfm-table@2.1.2/node_modules/micromark-extension-gfm-table/lib/edit-map.js
  var EditMap2 = class {
    /**
     * Create a new edit map.
     */
    constructor() {
      this.map = [];
      this.index = /* @__PURE__ */ new Map();
    }
    /**
     * Create an edit: a remove and/or add at a certain place.
     *
     * @param {number} index
     *   Index at which to apply the edit.
     * @param {number} remove
     *   Count of items to remove at the index.
     * @param {Array<Event>} add
     *   Items to add at the index.
     * @returns {undefined}
     *   Nothing.
     */
    add(index2, remove, add) {
      addImplementation2(this, index2, remove, add);
    }
    // To do: add this when moving to `micromark`.
    // /**
    //  * Create an edit: but insert `add` before existing additions.
    //  *
    //  * @param {number} index
    //  * @param {number} remove
    //  * @param {Array<Event>} add
    //  * @returns {undefined}
    //  */
    // addBefore(index, remove, add) {
    //   addImplementation(this, index, remove, add, true)
    // }
    /**
     * Done, change the events.
     *
     * @param {Array<Event>} events
     *   List of events to apply the edits to.
     * @returns {undefined}
     *   Nothing.
     */
    consume(events) {
      this.map.sort(function(a, b) {
        return a[0] - b[0];
      });
      if (this.map.length === 0) {
        return;
      }
      let index2 = this.map.length;
      const vecs = [];
      while (index2 > 0) {
        index2 -= 1;
        vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]), this.map[index2][2]);
        events.length = this.map[index2][0];
      }
      vecs.push(events.slice());
      events.length = 0;
      let slice = vecs.pop();
      while (slice) {
        for (const element2 of slice) {
          events.push(element2);
        }
        slice = vecs.pop();
      }
      this.map.length = 0;
      this.index.clear();
    }
  };
  function addImplementation2(editMap, at, remove, add) {
    if (remove === 0 && add.length === 0) {
      return;
    }
    const existing = editMap.index.get(at);
    if (existing) {
      existing[1] += remove;
      existing[2].push(...add);
      return;
    }
    const change = [at, remove, add];
    editMap.map.push(change);
    editMap.index.set(at, change);
  }

  // node_modules/.pnpm/micromark-extension-gfm-table@2.1.2/node_modules/micromark-extension-gfm-table/lib/infer.js
  function gfmTableAlign(events, index2) {
    let inDelimiterRow = false;
    const align = [];
    while (index2 < events.length) {
      const event = events[index2];
      if (inDelimiterRow) {
        if (event[0] === "enter") {
          if (event[1].type === "tableContent") {
            align.push(events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
          }
        } else if (event[1].type === "tableContent") {
          if (events[index2 - 1][1].type === "tableDelimiterMarker") {
            const alignIndex = align.length - 1;
            align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
          }
        } else if (event[1].type === "tableDelimiterRow") {
          break;
        }
      } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
        inDelimiterRow = true;
      }
      index2 += 1;
    }
    return align;
  }

  // node_modules/.pnpm/micromark-extension-gfm-table@2.1.2/node_modules/micromark-extension-gfm-table/lib/syntax.js
  function gfmTable() {
    return {
      flow: {
        null: {
          name: "table",
          tokenize: tokenizeTable,
          resolveAll: resolveTable
        }
      }
    };
  }
  function tokenizeTable(effects, ok3, nok) {
    const self = this;
    let size = 0;
    let sizeB = 0;
    let seen;
    return start;
    function start(code2) {
      let index2 = self.events.length - 1;
      while (index2 > -1) {
        const {
          type
        } = self.events[index2][1];
        if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
        type === "linePrefix") {
          index2--;
        } else {
          break;
        }
      }
      const tail = index2 > -1 ? self.events[index2][1].type : null;
      const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
      if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
        return nok(code2);
      }
      return next(code2);
    }
    function headRowBefore(code2) {
      effects.enter("tableHead");
      effects.enter("tableRow");
      return headRowStart(code2);
    }
    function headRowStart(code2) {
      if (code2 === 124) {
        return headRowBreak(code2);
      }
      seen = true;
      sizeB += 1;
      return headRowBreak(code2);
    }
    function headRowBreak(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        if (sizeB > 1) {
          sizeB = 0;
          self.interrupt = true;
          effects.exit("tableRow");
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return headDelimiterStart;
        }
        return nok(code2);
      }
      if (markdownSpace(code2)) {
        return factorySpace(effects, headRowBreak, "whitespace")(code2);
      }
      sizeB += 1;
      if (seen) {
        seen = false;
        size += 1;
      }
      if (code2 === 124) {
        effects.enter("tableCellDivider");
        effects.consume(code2);
        effects.exit("tableCellDivider");
        seen = true;
        return headRowBreak;
      }
      effects.enter("data");
      return headRowData(code2);
    }
    function headRowData(code2) {
      if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
        effects.exit("data");
        return headRowBreak(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? headRowEscape : headRowData;
    }
    function headRowEscape(code2) {
      if (code2 === 92 || code2 === 124) {
        effects.consume(code2);
        return headRowData;
      }
      return headRowData(code2);
    }
    function headDelimiterStart(code2) {
      self.interrupt = false;
      if (self.parser.lazy[self.now().line]) {
        return nok(code2);
      }
      effects.enter("tableDelimiterRow");
      seen = false;
      if (markdownSpace(code2)) {
        return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
      }
      return headDelimiterBefore(code2);
    }
    function headDelimiterBefore(code2) {
      if (code2 === 45 || code2 === 58) {
        return headDelimiterValueBefore(code2);
      }
      if (code2 === 124) {
        seen = true;
        effects.enter("tableCellDivider");
        effects.consume(code2);
        effects.exit("tableCellDivider");
        return headDelimiterCellBefore;
      }
      return headDelimiterNok(code2);
    }
    function headDelimiterCellBefore(code2) {
      if (markdownSpace(code2)) {
        return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code2);
      }
      return headDelimiterValueBefore(code2);
    }
    function headDelimiterValueBefore(code2) {
      if (code2 === 58) {
        sizeB += 1;
        seen = true;
        effects.enter("tableDelimiterMarker");
        effects.consume(code2);
        effects.exit("tableDelimiterMarker");
        return headDelimiterLeftAlignmentAfter;
      }
      if (code2 === 45) {
        sizeB += 1;
        return headDelimiterLeftAlignmentAfter(code2);
      }
      if (code2 === null || markdownLineEnding(code2)) {
        return headDelimiterCellAfter(code2);
      }
      return headDelimiterNok(code2);
    }
    function headDelimiterLeftAlignmentAfter(code2) {
      if (code2 === 45) {
        effects.enter("tableDelimiterFiller");
        return headDelimiterFiller(code2);
      }
      return headDelimiterNok(code2);
    }
    function headDelimiterFiller(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return headDelimiterFiller;
      }
      if (code2 === 58) {
        seen = true;
        effects.exit("tableDelimiterFiller");
        effects.enter("tableDelimiterMarker");
        effects.consume(code2);
        effects.exit("tableDelimiterMarker");
        return headDelimiterRightAlignmentAfter;
      }
      effects.exit("tableDelimiterFiller");
      return headDelimiterRightAlignmentAfter(code2);
    }
    function headDelimiterRightAlignmentAfter(code2) {
      if (markdownSpace(code2)) {
        return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code2);
      }
      return headDelimiterCellAfter(code2);
    }
    function headDelimiterCellAfter(code2) {
      if (code2 === 124) {
        return headDelimiterBefore(code2);
      }
      if (code2 === null || markdownLineEnding(code2)) {
        if (!seen || size !== sizeB) {
          return headDelimiterNok(code2);
        }
        effects.exit("tableDelimiterRow");
        effects.exit("tableHead");
        return ok3(code2);
      }
      return headDelimiterNok(code2);
    }
    function headDelimiterNok(code2) {
      return nok(code2);
    }
    function bodyRowStart(code2) {
      effects.enter("tableRow");
      return bodyRowBreak(code2);
    }
    function bodyRowBreak(code2) {
      if (code2 === 124) {
        effects.enter("tableCellDivider");
        effects.consume(code2);
        effects.exit("tableCellDivider");
        return bodyRowBreak;
      }
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("tableRow");
        return ok3(code2);
      }
      if (markdownSpace(code2)) {
        return factorySpace(effects, bodyRowBreak, "whitespace")(code2);
      }
      effects.enter("data");
      return bodyRowData(code2);
    }
    function bodyRowData(code2) {
      if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
        effects.exit("data");
        return bodyRowBreak(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? bodyRowEscape : bodyRowData;
    }
    function bodyRowEscape(code2) {
      if (code2 === 92 || code2 === 124) {
        effects.consume(code2);
        return bodyRowData;
      }
      return bodyRowData(code2);
    }
  }
  function resolveTable(events, context2) {
    let index2 = -1;
    let inFirstCellAwaitingPipe = true;
    let rowKind = 0;
    let lastCell = [0, 0, 0, 0];
    let cell = [0, 0, 0, 0];
    let afterHeadAwaitingFirstBodyRow = false;
    let lastTableEnd = 0;
    let currentTable;
    let currentBody;
    let currentCell;
    const map = new EditMap2();
    while (++index2 < events.length) {
      const event = events[index2];
      const token = event[1];
      if (event[0] === "enter") {
        if (token.type === "tableHead") {
          afterHeadAwaitingFirstBodyRow = false;
          if (lastTableEnd !== 0) {
            flushTableEnd(map, context2, lastTableEnd, currentTable, currentBody);
            currentBody = void 0;
            lastTableEnd = 0;
          }
          currentTable = {
            type: "table",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map.add(index2, 0, [["enter", currentTable, context2]]);
        } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
          inFirstCellAwaitingPipe = true;
          currentCell = void 0;
          lastCell = [0, 0, 0, 0];
          cell = [0, index2 + 1, 0, 0];
          if (afterHeadAwaitingFirstBodyRow) {
            afterHeadAwaitingFirstBodyRow = false;
            currentBody = {
              type: "tableBody",
              start: Object.assign({}, token.start),
              // Note: correct end is set later.
              end: Object.assign({}, token.end)
            };
            map.add(index2, 0, [["enter", currentBody, context2]]);
          }
          rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
        } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
          inFirstCellAwaitingPipe = false;
          if (cell[2] === 0) {
            if (lastCell[1] !== 0) {
              cell[0] = cell[1];
              currentCell = flushCell(map, context2, lastCell, rowKind, void 0, currentCell);
              lastCell = [0, 0, 0, 0];
            }
            cell[2] = index2;
          }
        } else if (token.type === "tableCellDivider") {
          if (inFirstCellAwaitingPipe) {
            inFirstCellAwaitingPipe = false;
          } else {
            if (lastCell[1] !== 0) {
              cell[0] = cell[1];
              currentCell = flushCell(map, context2, lastCell, rowKind, void 0, currentCell);
            }
            lastCell = cell;
            cell = [lastCell[1], index2, 0, 0];
          }
        }
      } else if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = true;
        lastTableEnd = index2;
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        lastTableEnd = index2;
        if (lastCell[1] !== 0) {
          cell[0] = cell[1];
          currentCell = flushCell(map, context2, lastCell, rowKind, index2, currentCell);
        } else if (cell[1] !== 0) {
          currentCell = flushCell(map, context2, cell, rowKind, index2, currentCell);
        }
        rowKind = 0;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        cell[3] = index2;
      }
    }
    if (lastTableEnd !== 0) {
      flushTableEnd(map, context2, lastTableEnd, currentTable, currentBody);
    }
    map.consume(context2.events);
    index2 = -1;
    while (++index2 < context2.events.length) {
      const event = context2.events[index2];
      if (event[0] === "enter" && event[1].type === "table") {
        event[1]._align = gfmTableAlign(context2.events, index2);
      }
    }
    return events;
  }
  function flushCell(map, context2, range, rowKind, rowEnd, previousCell) {
    const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
    const valueName = "tableContent";
    if (range[0] !== 0) {
      previousCell.end = Object.assign({}, getPoint(context2.events, range[0]));
      map.add(range[0], 0, [["exit", previousCell, context2]]);
    }
    const now = getPoint(context2.events, range[1]);
    previousCell = {
      type: groupName,
      start: Object.assign({}, now),
      // Note: correct end is set later.
      end: Object.assign({}, now)
    };
    map.add(range[1], 0, [["enter", previousCell, context2]]);
    if (range[2] !== 0) {
      const relatedStart = getPoint(context2.events, range[2]);
      const relatedEnd = getPoint(context2.events, range[3]);
      const valueToken = {
        type: valueName,
        start: Object.assign({}, relatedStart),
        end: Object.assign({}, relatedEnd)
      };
      map.add(range[2], 0, [["enter", valueToken, context2]]);
      if (rowKind !== 2) {
        const start = context2.events[range[2]];
        const end = context2.events[range[3]];
        start[1].end = Object.assign({}, end[1].end);
        start[1].type = "chunkText";
        start[1].contentType = "text";
        if (range[3] > range[2] + 1) {
          const a = range[2] + 1;
          const b = range[3] - range[2] - 1;
          map.add(a, b, []);
        }
      }
      map.add(range[3] + 1, 0, [["exit", valueToken, context2]]);
    }
    if (rowEnd !== void 0) {
      previousCell.end = Object.assign({}, getPoint(context2.events, rowEnd));
      map.add(rowEnd, 0, [["exit", previousCell, context2]]);
      previousCell = void 0;
    }
    return previousCell;
  }
  function flushTableEnd(map, context2, index2, table, tableBody) {
    const exits = [];
    const related = getPoint(context2.events, index2);
    if (tableBody) {
      tableBody.end = Object.assign({}, related);
      exits.push(["exit", tableBody, context2]);
    }
    table.end = Object.assign({}, related);
    exits.push(["exit", table, context2]);
    map.add(index2 + 1, 0, exits);
  }
  function getPoint(events, index2) {
    const event = events[index2];
    const side = event[0] === "enter" ? "start" : "end";
    return event[1][side];
  }

  // node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.1.0/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
  var tasklistCheck = {
    name: "tasklistCheck",
    tokenize: tokenizeTasklistCheck
  };
  function gfmTaskListItem() {
    return {
      text: {
        [91]: tasklistCheck
      }
    };
  }
  function tokenizeTasklistCheck(effects, ok3, nok) {
    const self = this;
    return open;
    function open(code2) {
      if (
        // Exit if there’s stuff before.
        self.previous !== null || // Exit if not in the first content that is the first child of a list
        // item.
        !self._gfmTasklistFirstContentOfListItem
      ) {
        return nok(code2);
      }
      effects.enter("taskListCheck");
      effects.enter("taskListCheckMarker");
      effects.consume(code2);
      effects.exit("taskListCheckMarker");
      return inside;
    }
    function inside(code2) {
      if (markdownLineEndingOrSpace(code2)) {
        effects.enter("taskListCheckValueUnchecked");
        effects.consume(code2);
        effects.exit("taskListCheckValueUnchecked");
        return close;
      }
      if (code2 === 88 || code2 === 120) {
        effects.enter("taskListCheckValueChecked");
        effects.consume(code2);
        effects.exit("taskListCheckValueChecked");
        return close;
      }
      return nok(code2);
    }
    function close(code2) {
      if (code2 === 93) {
        effects.enter("taskListCheckMarker");
        effects.consume(code2);
        effects.exit("taskListCheckMarker");
        effects.exit("taskListCheck");
        return after;
      }
      return nok(code2);
    }
    function after(code2) {
      if (markdownLineEnding(code2)) {
        return ok3(code2);
      }
      if (markdownSpace(code2)) {
        return effects.check({
          tokenize: spaceThenNonSpace
        }, ok3, nok)(code2);
      }
      return nok(code2);
    }
  }
  function spaceThenNonSpace(effects, ok3, nok) {
    return factorySpace(effects, after, "whitespace");
    function after(code2) {
      return code2 === null ? nok(code2) : ok3(code2);
    }
  }

  // node_modules/.pnpm/micromark-extension-gfm@3.0.0/node_modules/micromark-extension-gfm/index.js
  function gfm(options) {
    return combineExtensions([
      gfmAutolinkLiteral(),
      gfmFootnote(),
      gfmStrikethrough(options),
      gfmTable(),
      gfmTaskListItem()
    ]);
  }

  // src/extensions/trellis/markdown.ts
  var MARKDOWN_MAX = 256 * 1024;
  var HEADING_TAGS = ["h2", "h3", "h4", "h5", "h6", "h6"];
  var LINK_PROTOCOLS = /* @__PURE__ */ new Set(["http:", "https:", "mailto:"]);
  function safeLink(raw) {
    if (!raw) return null;
    try {
      const url = new URL(raw);
      return LINK_PROTOCOLS.has(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }
  function el(tag, children, attrs) {
    return attrs ? { tag, attrs, children } : { tag, children };
  }
  function kids(node2) {
    return (node2.children ?? []).flatMap(render);
  }
  function link(url, children) {
    const href = safeLink(url);
    if (!href) return children;
    return [el("a", children, { href, target: "_blank", rel: "noopener noreferrer" })];
  }
  function listItem(node2) {
    const children = kids(node2);
    if (typeof node2.checked !== "boolean") return [el("li", children)];
    const box = { type: "checkbox", disabled: "" };
    if (node2.checked) box.checked = "";
    return [el("li", [el("input", [], box), ...children], { class: "task" })];
  }
  function render(node2) {
    switch (node2.type) {
      case "text":
      case "html":
        return [node2.value ?? ""];
      case "paragraph":
        return [el("p", kids(node2))];
      case "heading":
        return [el(HEADING_TAGS[(node2.depth ?? 1) - 1] ?? "h6", kids(node2))];
      case "emphasis":
        return [el("em", kids(node2))];
      case "strong":
        return [el("strong", kids(node2))];
      case "delete":
        return [el("del", kids(node2))];
      case "inlineCode":
        return [el("code", [node2.value ?? ""])];
      case "code":
        return [el("pre", [el("code", [node2.value ?? ""])])];
      case "break":
        return [el("br", [])];
      case "thematicBreak":
        return [el("hr", [])];
      case "blockquote":
        return [el("blockquote", kids(node2))];
      case "list":
        return [el(node2.ordered ? "ol" : "ul", kids(node2))];
      case "listItem":
        return listItem(node2);
      case "link":
        return link(node2.url, kids(node2));
      case "image":
        return link(node2.url, [node2.alt || node2.url || ""]);
      case "table":
        return [el("table", [el("tbody", kids(node2))])];
      case "tableRow":
        return [el("tr", kids(node2))];
      case "tableCell":
        return [el("td", kids(node2))];
      default:
        return node2.children ? kids(node2) : node2.value ? [node2.value] : [];
    }
  }
  function renderMarkdown(source) {
    if (source.length > MARKDOWN_MAX) return [el("pre", [source.slice(0, MARKDOWN_MAX)])];
    try {
      const tree = fromMarkdown(source, {
        extensions: [gfm()],
        mdastExtensions: [gfmFromMarkdown()]
      });
      return kids(tree);
    } catch {
      return [el("pre", [source])];
    }
  }

  // src/extensions/trellis/panel.ts
  var PRIORITY_VALUES = ["urgent", "high", "normal", "low"];
  var DEFAULT_PRIORITY = "normal";
  var SEND_KEYS = /Mac/.test(navigator.platform) ? "\u2318Enter" : "Ctrl+Enter";
  var CARD_REF = /^([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*?)-\d+$/;
  var t = panelTranslator({ en: en_default.messages, "zh-Hant": zh_Hant_default.messages });
  var p = (key, vars) => t(`panel.${key}`, vars);
  var params2 = new URLSearchParams(location.search);
  var rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("missing #root");
  var root = rootEl;
  var view = params2.get("view") === "vault" ? "vault" : "board";
  var ctx = null;
  var failed = null;
  var project = null;
  var boardSlug = null;
  var boardData = null;
  var boardFailure = null;
  var openRef = params2.get("card");
  var cardData = null;
  var cardFailure = null;
  var cardQuery = "";
  var commentDraft = "";
  var newCard = null;
  var entries = null;
  var vaultFailure = null;
  var entryQuery = "";
  var openSlug = null;
  var entryData = null;
  var entryFailure = null;
  var banner = null;
  var notice = null;
  var tasks = /* @__PURE__ */ new Map();
  var agentNames = null;
  var workMenu = null;
  var busy = false;
  var requestSeq = 0;
  var relative = new Intl.RelativeTimeFormat(context.locale, { numeric: "auto" });
  var RELATIVE_STEPS = [
    ["year", 31536e6],
    ["month", 2592e6],
    ["day", 864e5],
    ["hour", 36e5],
    ["minute", 6e4]
  ];
  function relativeTime(ms) {
    const diff = ms - Date.now();
    for (const [unit, size] of RELATIVE_STEPS) {
      if (Math.abs(diff) >= size) return relative.format(Math.round(diff / size), unit);
    }
    return relative.format(Math.round(diff / 1e3), "second");
  }
  function absoluteTime(ms) {
    return new Date(ms).toLocaleString(context.locale);
  }
  function timeEl(ms) {
    return h("time", { class: "muted", title: absoluteTime(ms) }, relativeTime(ms));
  }
  function focusKey(el2) {
    return el2 && el2 !== document.body ? el2.getAttribute("data-key") : null;
  }
  function show(node2) {
    const active = document.activeElement;
    const key = focusKey(active);
    const caret = active instanceof HTMLTextAreaElement || active instanceof HTMLInputElement ? [active.selectionStart, active.selectionEnd] : null;
    const scrolls = /* @__PURE__ */ new Map();
    for (const el2 of root.querySelectorAll("[data-scroll]")) {
      scrolls.set(el2.dataset.scroll ?? "", [el2.scrollTop, el2.scrollLeft]);
    }
    root.replaceChildren(node2);
    for (const el2 of root.querySelectorAll("[data-scroll]")) {
      const saved = scrolls.get(el2.dataset.scroll ?? "");
      if (saved) {
        el2.scrollTop = saved[0];
        el2.scrollLeft = saved[1];
      }
    }
    if (!key) return;
    const target = [...root.querySelectorAll("[data-key]")].find(
      (el2) => el2.dataset.key === key
    );
    target?.focus({ preventScroll: true });
    if (caret && (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement)) {
      try {
        target.setSelectionRange(caret[0], caret[1]);
      } catch {
      }
    }
  }
  function toDom(nodes) {
    return nodes.map((node2) => {
      if (typeof node2 === "string") return document.createTextNode(node2);
      const el2 = document.createElement(node2.tag);
      for (const [name, value] of Object.entries(node2.attrs ?? {})) el2.setAttribute(name, value);
      el2.append(...toDom(node2.children));
      return el2;
    });
  }
  function markdown(source) {
    const el2 = h("div", { class: "markdown" });
    el2.append(...toDom(renderMarkdown(source)));
    return el2;
  }
  function iconButton(label, svg, onclick, extra = {}) {
    return h(
      "button",
      { class: "icon", "aria-label": label, title: label, onclick, ...extra },
      icon(svg)
    );
  }
  function emptyState(title, hint, tone = "muted", action) {
    return h(
      "div",
      { class: `empty ${tone}`, role: tone === "error" ? "alert" : "status" },
      h("p", { class: "empty-title" }, title),
      hint ? h("p", { class: "empty-hint" }, hint) : null,
      action ?? null
    );
  }
  function failureState(res) {
    if (res.ok) return emptyState("");
    return emptyState(p("unavailable"), res.message ?? res.error, "error");
  }
  function actorLabel(actor) {
    return ctx && actor === ctx.actor ? p("you") : actorName(actor);
  }
  function priorityLabel(value) {
    return PRIORITY_VALUES.includes(value) ? p(`priority.${value}`) : value;
  }
  function select(key, label, options, value, onPick) {
    const el2 = h(
      "select",
      {
        "data-key": key,
        "aria-label": label,
        onchange: (e) => onPick(e.target.value)
      },
      ...options.map((o) => {
        const option = h("option", { value: o.value }, o.text);
        if (o.value === value) option.setAttribute("selected", "");
        return option;
      })
    );
    el2.value = value;
    return el2;
  }
  function setView(next) {
    view = next;
    banner = null;
    void refresh();
  }
  function setProject(next) {
    project = next;
    boardSlug = ctx?.workspace?.project === next ? ctx.workspace.board ?? null : null;
    boardData = null;
    entries = null;
    openRef = null;
    cardData = null;
    openSlug = null;
    entryData = null;
    newCard = null;
    banner = null;
    void refresh();
  }
  function toolbar() {
    const views = ["board", "vault"];
    const projects = ctx?.projects ?? [];
    const boards = boardData?.boards ?? [];
    return h(
      "nav",
      { class: "toolbar" },
      h(
        "div",
        { class: "tabs", role: "tablist" },
        ...views.map(
          (v) => h(
            "button",
            {
              class: "tab",
              role: "tab",
              "data-key": `tab-${v}`,
              "aria-selected": v === view ? "true" : "false",
              onclick: () => setView(v)
            },
            p(`tab.${v}`)
          )
        )
      ),
      projects.length > 0 && project ? select(
        "project",
        p("project"),
        projects.map((x) => ({ value: x.key, text: x.key })),
        project,
        setProject
      ) : projects.length > 0 ? select(
        "project",
        p("project"),
        [
          { value: "", text: p("project") },
          ...projects.map((x) => ({ value: x.key, text: x.key }))
        ],
        "",
        (value) => value && setProject(value)
      ) : null,
      view === "board" && boards.length > 1 && boardData ? select(
        "board",
        p("board"),
        boards.map((b) => ({ value: b.slug, text: b.name })),
        boardData.board.slug,
        (slug) => {
          boardSlug = slug;
          void refresh();
        }
      ) : null,
      h("span", { class: "spacer" }),
      view === "board" && boardData ? h(
        "button",
        { class: "with-icon", "data-key": "new-card", onclick: openNewCard },
        icon(plus_default),
        p("newCard")
      ) : null,
      iconButton(p("refresh"), arrow_clockwise_default, () => void refresh(), { "data-key": "refresh" })
    );
  }
  function bannerView() {
    if (banner) return h("div", { class: "banner error", role: "alert" }, banner);
    return notice ? h("div", { class: "banner", role: "status" }, notice) : null;
  }
  function taskText(task) {
    return task.agent ? p("task.started", { agent: task.agent }) : p("task.sent");
  }
  function taskButton(ref, key) {
    const task = tasks.get(ref);
    if (!task) return null;
    return h(
      "button",
      {
        class: "task",
        "data-key": key,
        "data-task": ref,
        title: p("task.show"),
        "aria-label": `${taskText(task)}. ${p("task.show")}`,
        onclick: () => void focusTask(ref)
      },
      icon(robot_default),
      taskText(task)
    );
  }
  async function focusTask(ref) {
    const res = await call("focus", { ref });
    banner = res.ok ? null : errorText(res);
    notice = null;
    if (!res.ok) await refresh();
  }
  async function toggleWorkMenu(ref) {
    workMenu = workMenu === ref ? null : ref;
    render2();
    if (!workMenu || agentNames) return;
    const res = await call("agents");
    agentNames = res.ok ? res.data.agents : [];
    render2();
  }
  async function handOff(command, ref, agent) {
    workMenu = null;
    render2();
    const res = await call(command, {
      ref,
      board: boardData?.board.slug || void 0,
      ...agent ? { agent } : {}
    });
    banner = res.ok ? null : errorText(res);
    notice = res.ok && res.data.sent === false ? p("work.notSent") : null;
    await refresh();
  }
  function workMenuView(ref) {
    const names = agentNames;
    return h(
      "div",
      { class: "work-menu", role: "menu", "aria-label": p("work.menu") },
      h(
        "button",
        {
          role: "menuitem",
          "data-key": "work-send",
          onclick: () => void handOff("offer", ref)
        },
        p("work.send")
      ),
      h("p", { class: "work-heading muted" }, p("work.start")),
      names === null ? h("p", { class: "muted note" }, p("loading")) : names.length === 0 ? h("p", { class: "muted note" }, p("work.noAgents")) : null,
      ...(names ?? []).map(
        (agent) => h(
          "button",
          {
            role: "menuitem",
            "data-key": `work-start-${agent}`,
            "data-agent": agent,
            onclick: () => void handOff("start", ref, agent)
          },
          p("work.startAgent", { agent })
        )
      )
    );
  }
  function workRow(ref) {
    const open = workMenu === ref;
    return h(
      "div",
      { class: "work-row" },
      h(
        "div",
        { class: "work" },
        h(
          "button",
          {
            class: "with-icon primary",
            "data-key": "work",
            "aria-haspopup": "menu",
            "aria-expanded": open ? "true" : "false",
            onclick: () => void toggleWorkMenu(ref)
          },
          p("work.button"),
          icon(caret_down_default)
        ),
        open ? workMenuView(ref) : null
      ),
      taskButton(ref, "task-detail")
    );
  }
  function claimLine(card) {
    const state = claimState(card, ctx?.actor ?? "", Date.now());
    if (state === "none") return null;
    const text4 = state === "mine" ? p("claim.mine") : p("claim.other", { actor: actorName(card.claimedBy ?? "") });
    return h("span", { class: `claim claim-${state}` }, icon(user_circle_default), text4);
  }
  function labelChips(card) {
    const chips = [];
    if (card.priority !== DEFAULT_PRIORITY) {
      chips.push(
        h("span", { class: `chip priority priority-${card.priority}` }, priorityLabel(card.priority))
      );
    }
    for (const label of card.labels) chips.push(h("span", { class: "chip" }, label));
    return chips.length > 0 ? h("span", { class: "chips" }, ...chips) : null;
  }
  function cardTile(card) {
    return h(
      "li",
      { class: tasks.has(card.ref) ? "has-task" : "" },
      h(
        "button",
        {
          class: "card",
          "data-key": `card-${card.ref}`,
          "data-ref": card.ref,
          "aria-current": card.ref === openRef ? "true" : "false",
          onclick: () => openCard(card.ref)
        },
        h("span", { class: "card-ref" }, card.ref),
        h("span", { class: "card-title" }, card.title),
        labelChips(card),
        claimLine(card)
      ),
      taskButton(card.ref, `task-${card.ref}`)
    );
  }
  function columnView(column) {
    return h(
      "section",
      { class: "column", "aria-label": column.name, "data-column": column.name },
      h(
        "h2",
        {},
        h("span", { class: "column-name" }, column.name),
        column.done ? h("span", { class: "muted" }, p("card.doneMark")) : null,
        h(
          "span",
          { class: "count", "aria-label": p("column.count", { count: column.total }) },
          String(column.total)
        )
      ),
      h(
        "ul",
        { class: "cards", "data-scroll": `column-${column.name}` },
        ...column.cards.map(cardTile),
        column.cards.length === 0 ? h("li", { class: "column-empty muted" }, p(cardQuery ? "column.noMatch" : "column.empty")) : null,
        column.hidden > 0 ? h("li", { class: "column-empty muted" }, p("column.more", { count: column.hidden })) : null
      )
    );
  }
  function openNewCard() {
    newCard = {
      title: "",
      body: "",
      column: boardData?.board.columns[0]?.name ?? "",
      priority: DEFAULT_PRIORITY
    };
    render2();
    root.querySelector('[data-key="new-title"]')?.focus();
  }
  async function createCard() {
    if (!newCard || !project || busy || !newCard.title.trim()) return;
    busy = true;
    const res = await call("create", {
      project,
      board: boardData?.board.slug || void 0,
      title: newCard.title,
      body: newCard.body,
      column: newCard.column || void 0,
      priority: newCard.priority
    });
    busy = false;
    if (res.ok) {
      newCard = null;
      banner = null;
      const created = res.data.card;
      openRef = created.ref;
      cardData = null;
    } else {
      banner = errorText(res);
    }
    await refresh();
  }
  function field(label, control) {
    return h("label", { class: "field" }, h("span", { class: "field-label" }, label), control);
  }
  function newCardForm(board, draft) {
    const title = h("input", {
      type: "text",
      "data-key": "new-title",
      maxlength: "300",
      oninput: (e) => {
        draft.title = e.target.value;
      }
    });
    title.value = draft.title;
    const body2 = h("textarea", {
      "data-key": "new-body",
      rows: "5",
      oninput: (e) => {
        draft.body = e.target.value;
      }
    });
    body2.value = draft.body;
    return h(
      "form",
      {
        class: "new-card",
        "aria-label": p("new.heading"),
        onsubmit: (e) => {
          e.preventDefault();
          void createCard();
        },
        onkeydown: (e) => {
          const key = e;
          if (key.key === "Escape") {
            newCard = null;
            render2();
          } else if (key.key === "Enter" && (key.ctrlKey || key.metaKey)) {
            key.preventDefault();
            void createCard();
          }
        }
      },
      field(p("new.title"), title),
      field(p("new.body"), body2),
      h(
        "div",
        { class: "field-row" },
        field(
          p("new.column"),
          select(
            "new-column",
            p("new.column"),
            board.columns.map((c) => ({ value: c.name, text: c.name })),
            draft.column,
            (value) => {
              draft.column = value;
            }
          )
        ),
        field(
          p("new.priority"),
          select(
            "new-priority",
            p("new.priority"),
            PRIORITY_VALUES.map((v) => ({ value: v, text: priorityLabel(v) })),
            draft.priority,
            (value) => {
              draft.priority = value;
            }
          )
        ),
        h("span", { class: "spacer" }),
        h(
          "button",
          {
            type: "button",
            "data-key": "new-cancel",
            onclick: () => {
              newCard = null;
              render2();
            }
          },
          p("new.cancel")
        ),
        h("button", { type: "submit", class: "primary", "data-key": "new-create" }, p("new.create"))
      )
    );
  }
  function openCard(ref) {
    if (openRef !== ref) {
      cardData = null;
      cardFailure = null;
      commentDraft = "";
    }
    openRef = ref;
    const key = CARD_REF.exec(ref)?.[1];
    if (key && key !== project && ctx?.projects.some((x) => x.key === key)) {
      project = key;
      boardSlug = null;
      boardData = null;
    }
    view = "board";
    render2();
    void refresh();
  }
  function closeCard() {
    const ref = openRef;
    openRef = null;
    cardData = null;
    cardFailure = null;
    render2();
    if (ref) root.querySelector(`[data-key="card-${ref}"]`)?.focus();
  }
  async function act(command, args) {
    if (busy) return false;
    busy = true;
    const res = await call(command, args);
    busy = false;
    banner = res.ok ? null : errorText(res);
    await refresh();
    return res.ok;
  }
  async function moveTo(ref, column) {
    if (boardData) boardData = { ...boardData, board: moveCard(boardData.board, ref, column) };
    render2();
    await act("move", { ref, column });
  }
  async function sendComment() {
    if (!openRef || !commentDraft.trim()) return;
    const body2 = commentDraft;
    if (await act("comment", { ref: openRef, body: body2 })) {
      commentDraft = "";
      render2();
    }
  }
  function activityText(a) {
    const actor = actorLabel(a.actor);
    const known = ["created", "moved", "claimed", "released", "renewed", "edited"];
    if (!known.includes(a.action)) return p("activity.other", { actor, action: a.action });
    return p(`activity.${a.action}`, { actor, old: a.old ?? "", new: a.new ?? "" });
  }
  function threadItem(item) {
    if (item.kind === "activity") {
      return h(
        "li",
        { class: "activity muted" },
        h("span", {}, activityText(item.activity)),
        timeEl(item.at)
      );
    }
    return h(
      "li",
      { class: "comment" },
      h(
        "div",
        { class: "comment-head" },
        h("span", { class: "comment-actor" }, actorLabel(item.comment.actor)),
        timeEl(item.at)
      ),
      markdown(item.comment.body)
    );
  }
  function threadView(thread) {
    const items = thread ? threadItems(thread) : [];
    return h(
      "section",
      { class: "thread", "aria-label": p("thread.title") },
      h("h3", {}, p("thread.title")),
      !thread ? h("p", { class: "muted note" }, p("thread.unavailable")) : items.length === 0 ? h("p", { class: "muted note" }, p("thread.none")) : h("ol", { class: "thread-items" }, ...items.map(threadItem))
    );
  }
  function commentForm() {
    const box = h("textarea", {
      "data-key": "comment",
      "aria-label": p("comment.placeholder"),
      placeholder: p("comment.placeholder"),
      rows: "3",
      oninput: (e) => {
        commentDraft = e.target.value;
      },
      onkeydown: (e) => {
        const key = e;
        if (key.key === "Enter" && (key.ctrlKey || key.metaKey)) {
          key.preventDefault();
          void sendComment();
        }
      }
    });
    box.value = commentDraft;
    return h(
      "form",
      {
        class: "comment-form",
        onsubmit: (e) => {
          e.preventDefault();
          void sendComment();
        }
      },
      box,
      h(
        "div",
        { class: "field-row" },
        h("span", { class: "muted hint" }, p("comment.hint", { keys: SEND_KEYS })),
        h("span", { class: "spacer" }),
        h(
          "button",
          { type: "submit", class: "primary", "data-key": "comment-send" },
          p("comment.send")
        )
      )
    );
  }
  function claimControls(card) {
    const state = claimState(card, ctx?.actor ?? "", Date.now());
    const until = state !== "none" && card.claimUntil ? h("span", { class: "muted" }, p("claim.until", { time: relativeTime(card.claimUntil) })) : null;
    const button = (key, command) => h(
      "button",
      { "data-key": `claim-${command}`, onclick: () => void act(command, { ref: card.ref }) },
      p(`action.${key}`)
    );
    return h(
      "div",
      { class: "claim-row" },
      state === "none" ? h("span", { class: "muted" }, p("claim.none")) : h(
        "span",
        { class: `claim claim-${state}` },
        icon(user_circle_default),
        state === "mine" ? p("claim.mine") : p("claim.other", { actor: actorName(card.claimedBy ?? "") })
      ),
      until,
      h("span", { class: "spacer" }),
      state === "none" ? button("claim", "claim") : null,
      state === "mine" ? button("renew", "renew") : null,
      state === "mine" ? button("release", "release") : null
    );
  }
  function relationsView(card) {
    if (card.relations.length === 0) return null;
    const known = [
      "blocked_by",
      "blocks",
      "resolved_by",
      "resolves",
      "duplicate_of",
      "duplicated_by",
      "relates_to"
    ];
    return h(
      "section",
      { class: "relations", "aria-label": p("card.relations") },
      h("h3", {}, p("card.relations")),
      h(
        "ul",
        {},
        ...card.relations.map(
          (r) => h(
            "li",
            {},
            h("span", { class: "muted" }, known.includes(r.rel) ? p(`rel.${r.rel}`) : r.rel),
            h(
              "button",
              { class: "link", "data-key": `rel-${r.rel}-${r.ref}`, onclick: () => openCard(r.ref) },
              h("span", { class: "card-ref" }, r.ref),
              r.title
            ),
            r.done ? h("span", { class: "muted" }, p("card.doneMark")) : null
          )
        )
      )
    );
  }
  function detailView(ref) {
    const head = h(
      "header",
      { class: "detail-head" },
      h("span", { class: "card-ref" }, ref),
      h("span", { class: "spacer" }),
      iconButton(p("card.close"), x_default, closeCard, { "data-key": "card-close" })
    );
    const attrs = { class: "detail", "aria-label": ref, "data-scroll": "detail" };
    if (cardFailure) return h("aside", attrs, head, failureState(cardFailure));
    if (!cardData || cardData.card.ref !== ref) {
      return h("aside", attrs, head, h("div", { class: "empty muted", role: "status" }, p("loading")));
    }
    const card = cardData.card;
    const columns = boardData?.board.columns.map((c) => c.name) ?? [];
    const options = columns.includes(card.column) ? columns : [card.column, ...columns];
    return h(
      "aside",
      attrs,
      head,
      h("h1", { class: "detail-title" }, card.title),
      h(
        "div",
        { class: "meta" },
        field(
          p("card.column"),
          select(
            "move",
            p("card.column"),
            options.map((name) => ({ value: name, text: name })),
            card.column,
            (column) => void moveTo(card.ref, column)
          )
        ),
        labelChips(card),
        h("span", { class: "spacer" }),
        h("span", { class: "muted" }, p("card.updated", { time: relativeTime(card.updatedAt) }))
      ),
      claimControls(card),
      workRow(card.ref),
      relationsView(card),
      card.body.trim() ? markdown(card.body) : h("p", { class: "muted note" }, p("card.noBody")),
      threadView(cardData.thread),
      commentForm()
    );
  }
  function boardView() {
    if (boardFailure) return failureState(boardFailure);
    if (!boardData) return h("div", { class: "empty muted", role: "status" }, p("loading"));
    const filter = h("input", {
      type: "search",
      class: "filter",
      "data-key": "card-filter",
      "aria-label": p("filterCards"),
      placeholder: p("filterCards"),
      oninput: (e) => {
        cardQuery = e.target.value;
        render2();
      }
    });
    filter.value = cardQuery;
    return h(
      "div",
      { class: `board-layout${openRef ? " has-detail" : ""}` },
      h(
        "div",
        { class: "board-main" },
        newCard ? newCardForm(boardData.board, newCard) : null,
        h("div", { class: "filter-row" }, filter),
        h(
          "div",
          { class: "columns", "data-scroll": "columns" },
          ...shownColumns(boardData.board, cardQuery).map(columnView)
        )
      ),
      openRef ? detailView(openRef) : null
    );
  }
  function openEntry(slug) {
    if (openSlug !== slug) {
      entryData = null;
      entryFailure = null;
    }
    openSlug = slug;
    render2();
    void refresh();
  }
  function entryRow(entry) {
    return h(
      "li",
      {},
      h(
        "button",
        {
          class: "entry",
          "data-key": `entry-${entry.slug}`,
          "data-slug": entry.slug,
          "aria-current": entry.slug === openSlug ? "true" : "false",
          onclick: () => openEntry(entry.slug)
        },
        h(
          "span",
          { class: "entry-title" },
          entry.private ? icon(lock_simple_default) : null,
          entry.title,
          entry.template ? h("span", { class: "chip" }, entry.template) : null
        ),
        entry.summary ? h("span", { class: "entry-summary muted" }, entry.summary) : null
      )
    );
  }
  function entryView(slug) {
    const head = h(
      "header",
      { class: "detail-head" },
      h("span", { class: "card-ref" }, slug),
      h("span", { class: "spacer" }),
      iconButton(
        p("vault.close"),
        x_default,
        () => {
          openSlug = null;
          entryData = null;
          render2();
          root.querySelector(`[data-key="entry-${slug}"]`)?.focus();
        },
        { "data-key": "entry-close" }
      )
    );
    const attrs = { class: "detail entry-detail", "aria-label": slug, "data-scroll": "entry" };
    if (entryFailure) return h("article", attrs, head, failureState(entryFailure));
    if (!entryData || entryData.slug !== slug) {
      return h(
        "article",
        attrs,
        head,
        h("div", { class: "empty muted", role: "status" }, p("loading"))
      );
    }
    const entry = entryData;
    return h(
      "article",
      attrs,
      head,
      h("h1", { class: "detail-title" }, entry.title),
      h(
        "div",
        { class: "meta" },
        entry.template ? h("span", { class: "chip" }, entry.template) : null,
        entry.private ? h("span", { class: "chip" }, icon(lock_simple_default), p("vault.private")) : null,
        ...entry.tags.map((tag) => h("span", { class: "chip" }, tag)),
        h("span", { class: "spacer" }),
        h("span", { class: "muted" }, p("card.updated", { time: relativeTime(entry.updatedAt) }))
      ),
      entry.summary ? h("p", { class: "summary" }, entry.summary) : null,
      markdown(entry.body),
      entry.sources.length > 0 ? h(
        "section",
        { class: "relations", "aria-label": p("vault.sources") },
        h("h3", {}, p("vault.sources")),
        h("ul", {}, ...entry.sources.map((s) => h("li", { class: "source" }, s)))
      ) : null
    );
  }
  function vaultView() {
    if (vaultFailure) return failureState(vaultFailure);
    if (!entries) return h("div", { class: "empty muted", role: "status" }, p("loading"));
    if (entries.length === 0) return emptyState(p("vault.empty"));
    const filter = h("input", {
      type: "search",
      class: "filter",
      "data-key": "entry-filter",
      "aria-label": p("filterEntries"),
      placeholder: p("filterEntries"),
      oninput: (e) => {
        entryQuery = e.target.value;
        render2();
      }
    });
    filter.value = entryQuery;
    const groups = groupEntries(entries, entryQuery);
    return h(
      "div",
      { class: `vault-layout${openSlug ? " has-detail" : ""}` },
      h(
        "div",
        { class: "vault-list", "data-scroll": "vault-list" },
        h("div", { class: "filter-row" }, filter),
        groups.length === 0 ? h("p", { class: "muted note" }, p("vault.noMatch")) : null,
        ...groups.map(
          (group) => h(
            "section",
            { "aria-label": group.dir || p("vault.top") },
            h("h2", { class: "group-name" }, group.dir || p("vault.top")),
            h("ul", { class: "entries" }, ...group.entries.map(entryRow))
          )
        )
      ),
      openSlug ? entryView(openSlug) : h("div", { class: "vault-hint" }, emptyState(p("vault.pick")))
    );
  }
  async function initProject() {
    const res = await call("init");
    banner = res.ok || res.error === "cancelled" ? null : errorText(res);
    ctx = null;
    await refresh();
  }
  function body() {
    if (failed) return failureState(failed);
    if (!ctx) return h("div", { class: "empty muted", role: "status" }, p("loading"));
    if (!project) {
      const init = ctx.canInit ? h("button", { "data-key": "init", onclick: () => void initProject() }, p("empty.init")) : void 0;
      return ctx.projects.length === 0 && !ctx.canInit ? emptyState(p("empty.noProjects")) : emptyState(p("empty.noProject"), p("empty.noProjectHint"), "muted", init);
    }
    return view === "vault" ? vaultView() : boardView();
  }
  function render2() {
    show(h("main", { class: "page" }, toolbar(), bannerView(), body()));
  }
  async function loadContext() {
    const res = await call("context");
    if (!res.ok) {
      failed = res;
      return;
    }
    failed = null;
    ctx = res.data;
    if (project) return;
    const fromCard = openRef ? CARD_REF.exec(openRef)?.[1] : null;
    project = fromCard ?? ctx.workspace?.project ?? null;
    boardSlug = project === ctx.workspace?.project ? ctx.workspace?.board ?? null : null;
  }
  async function loadBoard(seq) {
    const [res, working] = await Promise.all([
      call("board", { project, board: boardSlug ?? void 0 }),
      call("tasks")
    ]);
    if (seq !== requestSeq) return;
    boardFailure = res.ok ? null : res;
    if (res.ok) boardData = res.data;
    if (working.ok) {
      const list2 = working.data.tasks;
      tasks = new Map(list2.map((task) => [task.ref, task]));
    }
  }
  async function loadCard(seq, ref) {
    const res = await call("card", { ref, board: boardData?.board.slug || void 0 });
    if (seq !== requestSeq || openRef !== ref) return;
    cardFailure = res.ok ? null : res;
    if (res.ok) cardData = res.data;
  }
  async function loadVault(seq) {
    const res = await call("vault", { project });
    if (seq !== requestSeq) return;
    vaultFailure = res.ok ? null : res;
    if (res.ok) entries = res.data.entries;
    const slug = openSlug;
    if (!slug) return;
    const shown = await call("entry", { project, slug });
    if (seq !== requestSeq || openSlug !== slug) return;
    entryFailure = shown.ok ? null : shown;
    if (shown.ok) entryData = shown.data.entry;
  }
  async function refresh() {
    const seq = ++requestSeq;
    if (!ctx || failed) await loadContext();
    if (seq !== requestSeq) return;
    if (ctx && project) {
      if (view === "vault") await loadVault(seq);
      else {
        await loadBoard(seq);
        if (seq === requestSeq && openRef) {
          if (boardData && !findCard(boardData.board, openRef) && cardData?.card.ref !== openRef) {
            cardData = null;
          }
          await loadCard(seq, openRef);
        }
      }
    }
    if (seq === requestSeq) render2();
  }
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || e.defaultPrevented) return;
    const target = e.target;
    if (target?.closest(".new-card")) return;
    if (workMenu) {
      workMenu = null;
      render2();
      return;
    }
    if (view === "board" && openRef) closeCard();
  });
  document.addEventListener("pointerdown", (e) => {
    if (!workMenu || e.target?.closest(".work")) return;
    workMenu = null;
    render2();
  });
  render2();
  onChange(() => void refresh());
  void refresh();
})();
