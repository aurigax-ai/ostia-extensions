"use strict";
(() => {
  // node_modules/.pnpm/@aurigax-ai+ostia-extension-sdk@0.5.12_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils_543b04fec801434e40bf01e9641afba2/node_modules/@aurigax-ai/ostia-extension-sdk/dist/chunk-TO23AMVT.js
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
    const own = tag ? catalogs[tag] : void 0;
    const base = Object.hasOwn(catalogs, EXTENSION_BASE_LOCALE) ? catalogs[EXTENSION_BASE_LOCALE] : void 0;
    return (key, vars) => formatMessage(messageIn(own, key) ?? messageIn(base, key) ?? key, vars);
  }

  // node_modules/.pnpm/@aurigax-ai+ostia-extension-sdk@0.5.12_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils_543b04fec801434e40bf01e9641afba2/node_modules/@aurigax-ai/ostia-extension-sdk/dist/chunk-AGWMOFL4.js
  var PANEL_VISIBILITY_EVENT = "ostia-panel-visibility";

  // node_modules/.pnpm/@aurigax-ai+ostia-extension-sdk@0.5.12_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils_543b04fec801434e40bf01e9641afba2/node_modules/@aurigax-ai/ostia-extension-sdk/dist/chunk-JX32SXV4.js
  var SCROLL_IDLE_MS = 500;
  var SCROLLING_ATTRIBUTE = "data-scrolling";
  var SCROLLBAR_HOVER_ATTRIBUTE = "data-scrollbar-hover";
  function watchScrolling(doc) {
    const win = doc.defaultView;
    if (!win) return () => {
    };
    const timers = /* @__PURE__ */ new Map();
    const onScroll = (event) => {
      const target = event.target === doc ? doc.documentElement : event.target;
      target.setAttribute(SCROLLING_ATTRIBUTE, "");
      win.clearTimeout(timers.get(target));
      timers.set(
        target,
        win.setTimeout(() => {
          target.removeAttribute(SCROLLING_ATTRIBUTE);
          timers.delete(target);
        }, SCROLL_IDLE_MS)
      );
    };
    let hovered = null;
    const setHovered = (next) => {
      if (next === hovered) return;
      hovered?.removeAttribute(SCROLLBAR_HOVER_ATTRIBUTE);
      next?.setAttribute(SCROLLBAR_HOVER_ATTRIBUTE, "");
      hovered = next;
    };
    const onPointerMove = (event) => {
      const target = event.target === doc ? doc.documentElement : event.target;
      const overVertical = target.clientWidth < target.offsetWidth && event.offsetX >= target.clientWidth;
      const overHorizontal = target.clientHeight < target.offsetHeight && event.offsetY >= target.clientHeight;
      setHovered(overVertical || overHorizontal ? target : null);
    };
    const onPointerOut = (event) => {
      if (event.relatedTarget === null) setHovered(null);
    };
    doc.addEventListener("scroll", onScroll, { capture: true, passive: true });
    doc.addEventListener("pointermove", onPointerMove, { passive: true });
    doc.addEventListener("pointerout", onPointerOut, { passive: true });
    return () => {
      doc.removeEventListener("scroll", onScroll, { capture: true });
      doc.removeEventListener("pointermove", onPointerMove);
      doc.removeEventListener("pointerout", onPointerOut);
      setHovered(null);
      for (const [target, timer] of timers) {
        win.clearTimeout(timer);
        target.removeAttribute(SCROLLING_ATTRIBUTE);
      }
      timers.clear();
    };
  }

  // node_modules/.pnpm/@aurigax-ai+ostia-extension-sdk@0.5.12_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils_543b04fec801434e40bf01e9641afba2/node_modules/@aurigax-ai/ostia-extension-sdk/dist/chunk-EBKWVBF5.js
  watchScrolling(document);
  var params = new URLSearchParams(location.search);
  var secret = params.get("t") ?? "";
  var context = {
    workDir: params.get("workDir") ?? "",
    workspaceId: params.get("workspaceId") ?? "",
    locale: params.get("locale") ?? "en"
  };
  function onPanelVisibility(cb) {
    window.addEventListener(PANEL_VISIBILITY_EVENT, (event) => {
      cb(event.detail?.hidden === true);
    });
    document.addEventListener("visibilitychange", () => cb(document.hidden));
  }
  function panelTranslator(catalogs) {
    return translatorFor(catalogs, context.locale);
  }
  function h(tag, attrs = {}, ...children) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (typeof value === "function") el.addEventListener(key.slice(2).toLowerCase(), value);
      else if (value === true) el.setAttribute(key, "");
      else if (value !== false) el.setAttribute(key, value);
    }
    for (const child of children) {
      if (child === null || child === void 0 || child === false) continue;
      el.append(child);
    }
    return el;
  }
  function errorText(res) {
    if (res.ok) return "";
    return res.message ? `${res.error}: ${res.message}` : res.error;
  }
  function emptyState(text, action, attrs = {}) {
    return h("div", { class: "ostia-empty", ...attrs }, h("p", {}, text), action);
  }

  // src/extensions/screens/locales/en.json
  var en_default = {
    messages: {
      "verb.notInstalled": "The screens service is not installed. Open the Screens panel and press Install.",
      "verb.notHere": "No screen {id} in this workspace",
      "verb.noScreen": "This workspace has no screen yet: run ostia screen create",
      "verb.ambiguous": "This workspace has several screens ({ids}); name one",
      "verb.noWorkspace": "Run this from a pane in a workspace",
      "verb.createUsage": "usage: ostia screen create [--width N] [--height N] [--allow DOMAIN]... (sizes 64 to 8192)",
      "verb.allowInSandbox": "In a sandboxed workspace a screen allows the workspace's domains; --allow is not taken",
      "verb.createRefused": "The human did not allow a screen for this workspace",
      "verb.created": "screen {id} ({width}x{height})",
      "verb.tokenPanesOnly": "Only a pane in the screen's workspace gets its token",
      "verb.stopped": "stopped {id}",
      "verb.badFlag": "{flag} is not taken here",
      "verb.launchUsage": "usage: ostia screen launch [--screen ID] -- program [args...]",
      "create.title": "An agent asks for a screen",
      "create.message": "An agent in {workspace} wants its own screen.",
      "create.detail": "A screen is a separate desktop: what runs there never reaches your display, keyboard or files. You can watch it, take it over and stop it in the Screens panel. Allowing it lets agents in this workspace create screens without asking again, until you revoke it in the panel.",
      "create.always": "Always for this workspace",
      "create.deny": "Deny",
      cancel: "Cancel",
      "install.reason": "The Screens extension needs Xvnc and xdotool to run an agent's screen",
      "install.title": "Install the screens service",
      "install.message": "Install @aurigax-ai/screens with pnpm for your user?",
      "install.detail": "It runs in a new terminal where you see it, and installs under $PNPM_HOME.",
      "install.confirm": "Install",
      "install.cancelled": "Cancelled; nothing was installed.",
      "install.terminalTitle": "Install screens",
      "install.systemTitle": "Install system packages",
      "install.noManager": "No package manager this extension knows was found; install Xvnc (TigerVNC) and xdotool yourself.",
      "panel.loading": "Loading\u2026",
      "panel.missing": "The screens service is not installed.",
      "panel.install": "Install",
      "panel.missingPrograms": "Missing system programs: {programs}",
      "panel.installSystem": "Install system packages",
      "panel.screens": "Screens in this workspace",
      "panel.none": "No screens yet.",
      "panel.new": "New screen",
      "panel.stop": "Stop",
      "panel.always": "Agents in this workspace may create screens without asking.",
      "panel.revoke": "Revoke",
      "panel.owner.agent": "agent",
      "panel.owner.human": "you",
      "panel.noWorkspace": "Open this panel from a workspace.",
      "domain.title": "A screen asks to reach a host",
      "domain.message": "Screen {id} in {workspace} wants to reach {host}.",
      "domain.detail": "Allow lets only screen {id} reach it until that screen stops. Your workspace's allowed domains do not change.",
      "domain.allow": "Allow for this screen",
      "domain.deny": "Deny",
      "panel.noView": "Open the screen's view first.",
      "panel.view": "View",
      "panel.takeOver": "Take over",
      "panel.giveBack": "Give back",
      "panel.agentDriving": "agent driving",
      "panel.viewOnly": "View only: press Take over to use the keyboard and mouse here.",
      "panel.youHold": "You hold the input; the agent waits.",
      "panel.alpha": "Alpha: an early version that may change or break.",
      "verb.outdated": "screens {version} is too old: {min} or later is needed. Open the Screens panel and press Update.",
      "update.title": "Update the screens service",
      "update.message": "Update @aurigax-ai/screens with pnpm to the latest version?",
      "update.confirm": "Update",
      "panel.outdated": "screens {min} or later is needed (this is {version}).",
      "panel.update": "Update",
      "panel.phoneBadge": "phone",
      "panel.level.view": "view only",
      "panel.level.control": "control",
      "panel.minutesLeft": "{minutes} min left",
      "panel.paused": "paused",
      "panel.pausedHint": "You touched the phone; resume it there",
      "panel.watch": "Watch",
      "panel.watching": "Watching",
      "panel.watchOnly": "Watching only. The phone's human pauses and resumes it on the phone.",
      "panel.ask": "Ask the phone",
      "panel.askHint": "Ask your phone to start a session for this workspace.",
      "panel.asked": "Asked your phone. Nothing starts until you start it there.",
      "panel.phoneFailed": "The phone did not answer.",
      "sidebar.phone": "Phone screen",
      "verb.askUsage": "usage: ostia screen ask-phone --reason TEXT (one line, at most 300 characters, shown on the phone)",
      "verb.askPanesOnly": "Only an agent's pane in a workspace asks the phone",
      "verb.askOff": "Phone screens are off: the human has not given the Screens extension the phone-screens permission",
      "verb.askStarted": "The phone's human started a session; its screen is in ostia screen list",
      "verb.askDeclined": "The phone declined: phone control is off there",
      "verb.askNoAnswer": "No answer from the phone in 2 minutes",
      "verb.askDenied": "The phone's human said no"
    }
  };

  // src/extensions/screens/locales/zh-Hant.json
  var zh_Hant_default = {
    manifest: {
      description: "Alpha: \u900F\u904E screens \u670D\u52D9\u7D66\u4EE3\u7406\u7A0B\u5F0F\u4E00\u500B\u81EA\u5DF1\u7684\u87A2\u5E55\uFF0C\u4E00\u500B\u7D55\u4E0D\u78B0\u5230\u4F60\u684C\u9762\u7684\u684C\u9762\uFF1Aostia screen create\u3001token\u3001list \u8207 stop\uFF0C\u5728\u6C99\u7BB1\u5DE5\u4F5C\u5340\u4E2D\u8F49\u9001\u87A2\u5E55\u6307\u4EE4\uFF0C\u4EE3\u7406\u7A0B\u5F0F\u5728\u5DE5\u4F5C\u5340\u7B2C\u4E00\u6B21\u8981\u87A2\u5E55\u524D\u5148\u554F\u4F60\uFF0C\u986F\u793A\u6B64\u5DE5\u4F5C\u5340\u87A2\u5E55\u7684\u9762\u677F\uFF0C\u4EE5\u53CA\u624B\u6A5F\u4E0A\u7684\u4EBA\u5728\u624B\u6A5F\u4E0A\u958B\u59CB\u5DE5\u4F5C\u968E\u6BB5\u671F\u9593\u7684\u624B\u6A5F\u756B\u9762\uFF08\u9700\u8981 phone-screens \u6B0A\u9650\uFF09\u3002\u5DE5\u4F5C\u5340\u95DC\u9589\u6216\u6B64\u64F4\u5145\u529F\u80FD\u505C\u6B62\u6642\uFF0C\u87A2\u5E55\u4E5F\u6703\u505C\u6B62\u3002",
      "commands.open.title": "\u87A2\u5E55\uFF1A\u958B\u555F\u9762\u677F",
      "commands.create.title": "\u70BA\u6B64\u5DE5\u4F5C\u5340\u5EFA\u7ACB\u87A2\u5E55",
      "commands.token.title": "\u5370\u51FA\u6B64\u5DE5\u4F5C\u5340\u87A2\u5E55\u7684\u4EE3\u7406\u7A0B\u5F0F\u6B0A\u6756",
      "commands.list.title": "\u5217\u51FA\u6B64\u5DE5\u4F5C\u5340\u7684\u87A2\u5E55",
      "commands.stop.title": "\u505C\u6B62\u87A2\u5E55",
      "commands.screenshot.title": "\u4EE5 JSON \u8207 base64 PNG \u64F7\u53D6\u87A2\u5E55",
      "commands.click.title": "\u5728\u87A2\u5E55\u4E2D\u9EDE\u64CA",
      "commands.move.title": "\u79FB\u52D5\u6307\u6A19",
      "commands.drag.title": "\u5728\u87A2\u5E55\u4E2D\u62D6\u66F3",
      "commands.scroll.title": "\u5728\u87A2\u5E55\u4E2D\u6372\u52D5",
      "commands.type.title": "\u8F38\u5165\u6587\u5B57",
      "commands.key.title": "\u6309\u4E0B\u6309\u9375",
      "commands.launch.title": "\u5728\u87A2\u5E55\u4E2D\u555F\u52D5\u7A0B\u5F0F",
      "commands.windows.title": "\u5217\u51FA\u87A2\u5E55\u7684\u8996\u7A97",
      "commands.apps.title": "\u5217\u51FA\u624B\u6A5F\u87A2\u5E55\u7684\u61C9\u7528\u7A0B\u5F0F",
      "commands.tree.title": "\u8B80\u53D6\u624B\u6A5F\u87A2\u5E55\u7684\u7121\u969C\u7919\u6A39",
      "commands.ask-phone.title": "\u8ACB\u624B\u6A5F\u5206\u4EAB\u756B\u9762",
      "panel.title": "\u87A2\u5E55"
    },
    messages: {
      "verb.notInstalled": "\u5C1A\u672A\u5B89\u88DD screens \u670D\u52D9\u3002\u8ACB\u958B\u555F\u300C\u87A2\u5E55\u300D\u9762\u677F\u4E26\u6309\u300C\u5B89\u88DD\u300D\u3002",
      "verb.notHere": "\u6B64\u5DE5\u4F5C\u5340\u6C92\u6709\u87A2\u5E55 {id}",
      "verb.noScreen": "\u6B64\u5DE5\u4F5C\u5340\u9084\u6C92\u6709\u87A2\u5E55\uFF1A\u8ACB\u57F7\u884C ostia screen create",
      "verb.ambiguous": "\u6B64\u5DE5\u4F5C\u5340\u6709\u591A\u500B\u87A2\u5E55\uFF08{ids}\uFF09\uFF0C\u8ACB\u6307\u5B9A\u4E00\u500B",
      "verb.noWorkspace": "\u8ACB\u5F9E\u5DE5\u4F5C\u5340\u4E2D\u7684\u7A97\u683C\u57F7\u884C",
      "verb.createUsage": "\u7528\u6CD5\uFF1Aostia screen create [--width N] [--height N] [--allow DOMAIN]...\uFF08\u5927\u5C0F 64 \u5230 8192\uFF09",
      "verb.allowInSandbox": "\u5728\u6C99\u7BB1\u5DE5\u4F5C\u5340\u4E2D\uFF0C\u87A2\u5E55\u4F7F\u7528\u5DE5\u4F5C\u5340\u5141\u8A31\u7684\u7DB2\u57DF\uFF1B\u4E0D\u63A5\u53D7 --allow",
      "verb.createRefused": "\u4F7F\u7528\u8005\u6C92\u6709\u5141\u8A31\u6B64\u5DE5\u4F5C\u5340\u5EFA\u7ACB\u87A2\u5E55",
      "verb.created": "\u87A2\u5E55 {id}\uFF08{width}x{height}\uFF09",
      "verb.tokenPanesOnly": "\u53EA\u6709\u87A2\u5E55\u6240\u5C6C\u5DE5\u4F5C\u5340\u4E2D\u7684\u7A97\u683C\u80FD\u53D6\u5F97\u5B83\u7684\u6B0A\u6756",
      "verb.stopped": "\u5DF2\u505C\u6B62 {id}",
      "verb.badFlag": "\u9019\u88E1\u4E0D\u63A5\u53D7 {flag}",
      "verb.launchUsage": "\u7528\u6CD5\uFF1Aostia screen launch [--screen ID] -- program [args...]",
      "create.title": "\u4EE3\u7406\u7A0B\u5F0F\u8981\u6C42\u4E00\u500B\u87A2\u5E55",
      "create.message": "{workspace} \u4E2D\u7684\u4EE3\u7406\u7A0B\u5F0F\u60F3\u8981\u81EA\u5DF1\u7684\u87A2\u5E55\u3002",
      "create.detail": "\u87A2\u5E55\u662F\u7368\u7ACB\u7684\u684C\u9762\uFF1A\u5728\u5176\u4E2D\u57F7\u884C\u7684\u6771\u897F\u7D55\u4E0D\u6703\u78B0\u5230\u4F60\u7684\u986F\u793A\u5668\u3001\u9375\u76E4\u6216\u6A94\u6848\u3002\u4F60\u53EF\u4EE5\u5728\u300C\u87A2\u5E55\u300D\u9762\u677F\u4E2D\u89C0\u770B\u3001\u63A5\u624B\u4E26\u505C\u6B62\u5B83\u3002\u5141\u8A31\u5F8C\uFF0C\u6B64\u5DE5\u4F5C\u5340\u7684\u4EE3\u7406\u7A0B\u5F0F\u4E4B\u5F8C\u5EFA\u7ACB\u87A2\u5E55\u4E0D\u5FC5\u518D\u554F\uFF0C\u76F4\u5230\u4F60\u5728\u9762\u677F\u4E2D\u64A4\u92B7\u3002",
      "create.always": "\u6B64\u5DE5\u4F5C\u5340\u4E00\u5F8B\u5141\u8A31",
      "create.deny": "\u62D2\u7D55",
      cancel: "\u53D6\u6D88",
      "install.reason": "\u300C\u87A2\u5E55\u300D\u64F4\u5145\u529F\u80FD\u9700\u8981 Xvnc \u8207 xdotool \u4F86\u57F7\u884C\u4EE3\u7406\u7A0B\u5F0F\u7684\u87A2\u5E55",
      "install.title": "\u5B89\u88DD screens \u670D\u52D9",
      "install.message": "\u8981\u7528 pnpm \u70BA\u4F60\u7684\u4F7F\u7528\u8005\u5B89\u88DD @aurigax-ai/screens \u55CE\uFF1F",
      "install.detail": "\u5B83\u6703\u5728\u4F60\u770B\u5F97\u5230\u7684\u65B0\u7D42\u7AEF\u6A5F\u4E2D\u57F7\u884C\uFF0C\u4E26\u5B89\u88DD\u5230 $PNPM_HOME \u4E4B\u4E0B\u3002",
      "install.confirm": "\u5B89\u88DD",
      "install.cancelled": "\u5DF2\u53D6\u6D88\uFF0C\u6C92\u6709\u5B89\u88DD\u4EFB\u4F55\u6771\u897F\u3002",
      "install.terminalTitle": "\u5B89\u88DD screens",
      "install.systemTitle": "\u5B89\u88DD\u7CFB\u7D71\u5957\u4EF6",
      "install.noManager": "\u627E\u4E0D\u5230\u6B64\u64F4\u5145\u529F\u80FD\u8A8D\u5F97\u7684\u5957\u4EF6\u7BA1\u7406\u54E1\uFF1B\u8ACB\u81EA\u884C\u5B89\u88DD Xvnc\uFF08TigerVNC\uFF09\u8207 xdotool\u3002",
      "panel.loading": "\u8F09\u5165\u4E2D\u2026",
      "panel.missing": "\u5C1A\u672A\u5B89\u88DD screens \u670D\u52D9\u3002",
      "panel.install": "\u5B89\u88DD",
      "panel.missingPrograms": "\u7F3A\u5C11\u7CFB\u7D71\u7A0B\u5F0F\uFF1A{programs}",
      "panel.installSystem": "\u5B89\u88DD\u7CFB\u7D71\u5957\u4EF6",
      "panel.screens": "\u6B64\u5DE5\u4F5C\u5340\u7684\u87A2\u5E55",
      "panel.none": "\u9084\u6C92\u6709\u87A2\u5E55\u3002",
      "panel.new": "\u65B0\u589E\u87A2\u5E55",
      "panel.stop": "\u505C\u6B62",
      "panel.always": "\u6B64\u5DE5\u4F5C\u5340\u7684\u4EE3\u7406\u7A0B\u5F0F\u53EF\u4EE5\u4E0D\u7D93\u8A62\u554F\u5EFA\u7ACB\u87A2\u5E55\u3002",
      "panel.revoke": "\u64A4\u92B7",
      "panel.owner.agent": "\u4EE3\u7406\u7A0B\u5F0F",
      "panel.owner.human": "\u4F60",
      "panel.noWorkspace": "\u8ACB\u5F9E\u5DE5\u4F5C\u5340\u958B\u555F\u6B64\u9762\u677F\u3002",
      "domain.title": "\u87A2\u5E55\u8981\u6C42\u9023\u7DDA\u5230\u4E3B\u6A5F",
      "domain.message": "{workspace} \u4E2D\u7684\u87A2\u5E55 {id} \u60F3\u8981\u9023\u7DDA\u5230 {host}\u3002",
      "domain.detail": "\u5141\u8A31\u5F8C\u53EA\u6709\u87A2\u5E55 {id} \u80FD\u9023\u7DDA\u5230\u5B83\uFF0C\u76F4\u5230\u8A72\u87A2\u5E55\u505C\u6B62\u3002\u4F60\u5DE5\u4F5C\u5340\u5141\u8A31\u7684\u7DB2\u57DF\u4E0D\u6703\u6539\u8B8A\u3002",
      "domain.allow": "\u5141\u8A31\u6B64\u87A2\u5E55",
      "domain.deny": "\u62D2\u7D55",
      "panel.noView": "\u8ACB\u5148\u958B\u555F\u87A2\u5E55\u7684\u756B\u9762\u3002",
      "panel.view": "\u6AA2\u8996",
      "panel.takeOver": "\u63A5\u624B",
      "panel.giveBack": "\u4EA4\u9084",
      "panel.agentDriving": "\u4EE3\u7406\u7A0B\u5F0F\u64CD\u4F5C\u4E2D",
      "panel.viewOnly": "\u50C5\u6AA2\u8996\uFF1A\u6309\u300C\u63A5\u624B\u300D\u624D\u80FD\u5728\u9019\u88E1\u4F7F\u7528\u9375\u76E4\u8207\u6ED1\u9F20\u3002",
      "panel.youHold": "\u4F60\u6301\u6709\u8F38\u5165\uFF0C\u4EE3\u7406\u7A0B\u5F0F\u7B49\u5F85\u4E2D\u3002",
      "panel.alpha": "Alpha\uFF1A\u65E9\u671F\u7248\u672C\uFF0C\u53EF\u80FD\u6703\u8B8A\u52D5\u6216\u5931\u6548\u3002",
      "verb.outdated": "screens {version} \u592A\u820A\uFF1A\u9700\u8981 {min} \u6216\u66F4\u65B0\u7684\u7248\u672C\u3002\u8ACB\u958B\u555F\u300C\u87A2\u5E55\u300D\u9762\u677F\u4E26\u6309\u300C\u66F4\u65B0\u300D\u3002",
      "update.title": "\u66F4\u65B0 screens \u670D\u52D9",
      "update.message": "\u8981\u7528 pnpm \u628A @aurigax-ai/screens \u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C\u55CE\uFF1F",
      "update.confirm": "\u66F4\u65B0",
      "panel.outdated": "\u9700\u8981 screens {min} \u6216\u66F4\u65B0\u7684\u7248\u672C\uFF08\u76EE\u524D\u662F {version}\uFF09\u3002",
      "panel.update": "\u66F4\u65B0",
      "panel.phoneBadge": "\u624B\u6A5F",
      "panel.level.view": "\u50C5\u6AA2\u8996",
      "panel.level.control": "\u64CD\u63A7",
      "panel.minutesLeft": "\u5269 {minutes} \u5206\u9418",
      "panel.paused": "\u5DF2\u66AB\u505C",
      "panel.pausedHint": "\u4F60\u78B0\u4E86\u624B\u6A5F\uFF1B\u8ACB\u5728\u624B\u6A5F\u4E0A\u7E7C\u7E8C",
      "panel.watch": "\u89C0\u770B",
      "panel.watching": "\u89C0\u770B\u4E2D",
      "panel.watchOnly": "\u50C5\u89C0\u770B\u3002\u53EA\u6709\u624B\u6A5F\u4E0A\u7684\u4EBA\u80FD\u66AB\u505C\u8207\u7E7C\u7E8C\u3002",
      "panel.ask": "\u8ACB\u624B\u6A5F\u958B\u59CB",
      "panel.askHint": "\u8ACB\u4F60\u7684\u624B\u6A5F\u70BA\u9019\u500B\u5DE5\u4F5C\u5340\u958B\u59CB\u4E00\u500B\u5DE5\u4F5C\u968E\u6BB5\u3002",
      "panel.asked": "\u5DF2\u8A62\u554F\u4F60\u7684\u624B\u6A5F\u3002\u5728\u624B\u6A5F\u4E0A\u958B\u59CB\u4E4B\u524D\uFF0C\u4EC0\u9EBC\u90FD\u4E0D\u6703\u958B\u59CB\u3002",
      "panel.phoneFailed": "\u624B\u6A5F\u6C92\u6709\u56DE\u61C9\u3002",
      "sidebar.phone": "\u624B\u6A5F\u756B\u9762",
      "verb.askUsage": "\u7528\u6CD5\uFF1Aostia screen ask-phone --reason TEXT\uFF08\u4E00\u884C\uFF0C\u6700\u591A 300 \u500B\u5B57\u5143\uFF0C\u6703\u986F\u793A\u5728\u624B\u6A5F\u4E0A\uFF09",
      "verb.askPanesOnly": "\u53EA\u6709\u5DE5\u4F5C\u5340\u4E2D\u4EE3\u7406\u7A0B\u5F0F\u7684\u7A97\u683C\u80FD\u8ACB\u624B\u6A5F\u958B\u59CB",
      "verb.askOff": "\u624B\u6A5F\u756B\u9762\u5DF2\u95DC\u9589\uFF1A\u4F7F\u7528\u8005\u5C1A\u672A\u7D66\u300C\u87A2\u5E55\u300D\u64F4\u5145\u529F\u80FD phone-screens \u6B0A\u9650",
      "verb.askStarted": "\u624B\u6A5F\u4E0A\u7684\u4EBA\u5DF2\u958B\u59CB\u5DE5\u4F5C\u968E\u6BB5\uFF1B\u5B83\u7684\u756B\u9762\u5728 ostia screen list \u4E2D",
      "verb.askDeclined": "\u624B\u6A5F\u62D2\u7D55\u4E86\uFF1A\u90A3\u652F\u624B\u6A5F\u7684\u624B\u6A5F\u64CD\u63A7\u5DF2\u95DC\u9589",
      "verb.askNoAnswer": "\u624B\u6A5F\u5728 2 \u5206\u9418\u5167\u6C92\u6709\u56DE\u61C9",
      "verb.askDenied": "\u624B\u6A5F\u4E0A\u7684\u4EBA\u62D2\u7D55\u4E86"
    }
  };

  // src/extensions/screens/viewControl.ts
  var ViewControl = class {
    constructor(deps) {
      this.deps = deps;
      this.viewOnly();
    }
    deps;
    held = false;
    returnTo = null;
    get holding() {
      return this.held;
    }
    async takeOver() {
      const before = this.deps.active();
      if (!await this.deps.takeover()) return false;
      this.held = true;
      this.returnTo = before;
      this.deps.view.viewOnly = false;
      this.deps.view.focusOnClick = true;
      this.deps.view.focus();
      return true;
    }
    async giveBack() {
      if (!await this.deps.giveback()) return false;
      const returnTo = this.returnTo;
      this.released();
      returnTo?.focus();
      return true;
    }
    released() {
      this.held = false;
      this.returnTo = null;
      this.viewOnly();
    }
    viewOnly() {
      this.deps.view.viewOnly = true;
      this.deps.view.focusOnClick = false;
    }
  };

  // src/extensions/screens/panel.ts
  var VIEWER_MODULE = "novnc/core/rfb.js";
  var STATE_POLL_MS = 2e3;
  var FRAME_POLL_MS = 500;
  var MINUTE_MS = 6e4;
  var t = panelTranslator({ en: en_default.messages, "zh-Hant": zh_Hant_default.messages });
  var p = (key, vars) => t(`panel.${key}`, vars);
  var rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("missing #root");
  var root = rootEl;
  var viewEl = document.getElementById("view");
  if (!viewEl) throw new Error("missing #view");
  var viewHost = viewEl;
  var state = null;
  var problem = null;
  var busy = false;
  var live = null;
  var watching = null;
  async function call2(command, args = {}) {
    try {
      const res = await fetch("api", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ command, args })
      });
      return await res.json();
    } catch (err) {
      return { ok: false, error: "unreachable", message: String(err) };
    }
  }
  async function refresh() {
    const res = await call2("state");
    if (res.ok) {
      state = res.data;
    } else {
      problem = errorText(res);
    }
    const shown = live && state?.screens.find((s) => s.id === live?.id);
    if (live && !shown) closeView();
    if (watching && !state?.screens.some((s) => s.id === watching?.id)) closeWatch();
    else if (live?.control.holding && shown?.owner === "agent") live.control.released();
    render();
  }
  function viewUrl(id) {
    const url = new URL(`view/${encodeURIComponent(id)}`, location.href);
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    url.search = "";
    return url.href;
  }
  function closeView() {
    live?.rfb.disconnect();
    live = null;
    viewHost.replaceChildren();
  }
  function closeWatch() {
    if (!watching) return;
    clearInterval(watching.timer);
    watching = null;
    viewHost.replaceChildren();
  }
  async function pollFrame() {
    const shown = watching;
    if (!shown) return;
    const res = await call2("frame", { id: shown.id });
    const frame = res.ok ? res.data : null;
    if (watching !== shown || !frame || frame.seq === shown.seq) return;
    shown.seq = frame.seq;
    shown.img.src = `data:image/jpeg;base64,${frame.jpeg}`;
  }
  async function stopWatch() {
    if (!watching) return;
    const id = watching.id;
    closeWatch();
    render();
    await call2("watch", { id, on: false });
  }
  async function toggleWatch(id) {
    const stopping = watching?.id === id;
    if (watching) {
      const was = watching.id;
      closeWatch();
      await call2("watch", { id: was, on: false });
    }
    if (!stopping) {
      closeView();
      const res = await call2("watch", { id, on: true });
      problem = res.ok ? null : errorText(res);
      if (res.ok) {
        const img = h("img", { alt: "" });
        viewHost.replaceChildren(img);
        watching = { id, img, seq: -1, timer: setInterval(() => void pollFrame(), FRAME_POLL_MS) };
      }
    }
    render();
  }
  async function openView(id) {
    closeView();
    closeWatch();
    const module = await import(new URL(VIEWER_MODULE, location.href).href);
    const rfb = new module.default(viewHost, viewUrl(id));
    rfb.scaleViewport = true;
    const control = new ViewControl({
      view: rfb,
      active: () => document.activeElement instanceof HTMLElement ? document.activeElement : null,
      takeover: async () => {
        const res = await call2("takeover", { id });
        problem = res.ok ? null : errorText(res);
        return res.ok;
      },
      giveback: async () => {
        const res = await call2("giveback", { id });
        problem = res.ok ? null : errorText(res);
        return res.ok;
      }
    });
    const opened = { id, rfb, control };
    rfb.addEventListener("disconnect", () => {
      if (live === opened) closeView();
      render();
    });
    live = opened;
    render();
  }
  async function toggleInput() {
    if (!live) return;
    busy = true;
    render();
    const gaveBack = live.control.holding && await live.control.giveBack();
    if (!gaveBack && !live.control.holding) await live.control.takeOver();
    busy = false;
    await refresh();
    if (gaveBack) root.querySelector("[data-toggle]")?.focus();
  }
  async function act(command, args) {
    busy = true;
    render();
    const res = await call2(command, args);
    problem = res.ok ? null : errorText(res);
    busy = false;
    await refresh();
  }
  function button(label, onClick, primary = false, toggle = false) {
    return h(
      "button",
      { class: primary ? "primary" : "", disabled: busy, "data-toggle": toggle, onclick: onClick },
      label
    );
  }
  function installView(install) {
    const parts = [];
    if (!install.service) {
      parts.push(
        h(
          "div",
          { class: "row" },
          h("span", {}, p("missing")),
          button(p("install"), () => void act("install"), true)
        )
      );
    }
    if (install.outdated) {
      parts.push(
        h(
          "div",
          { class: "row" },
          h("span", {}, p("outdated", { min: install.minVersion, version: install.version ?? "" })),
          button(p("update"), () => void act("update"), true)
        )
      );
    }
    if (install.missingPrograms.length > 0) {
      parts.push(
        h(
          "div",
          { class: "row" },
          h("span", {}, p("missingPrograms", { programs: install.missingPrograms.join(", ") })),
          install.systemInstall ? button(p("installSystem"), () => void act("installSystem")) : null
        )
      );
    }
    return parts;
  }
  function phoneRow(screen) {
    const phone = screen.phone;
    if (!phone) return null;
    const minutes = Math.max(0, Math.ceil((phone.endsAt - Date.now()) / MINUTE_MS));
    const shown = watching?.id === screen.id;
    return h(
      "li",
      { class: "screen" },
      h("span", {}, phone.device),
      h("span", { class: "badge" }, p("phoneBadge")),
      h("span", { class: "muted" }, p(`level.${phone.level}`)),
      h("span", { class: "muted" }, p("minutesLeft", { minutes })),
      phone.state === "paused" ? h("span", { class: "muted", title: p("pausedHint") }, p("paused")) : phone.foreground ? h("span", { class: "muted" }, phone.foreground) : null,
      h("span", { class: "ostia-spacer" }),
      button(shown ? p("watching") : p("watch"), () => void toggleWatch(screen.id), shown),
      button(p("stop"), () => void act("stop", { id: screen.id }))
    );
  }
  function askRow(phones) {
    if (!phones.listening) return null;
    return h(
      "div",
      { class: "row" },
      h("span", { class: "muted" }, phones.asked ? p("asked") : p("askHint")),
      h("span", { class: "ostia-spacer" }),
      h("button", { disabled: busy || phones.asked, onclick: () => void act("ask") }, p("ask"))
    );
  }
  function screenRow(screen) {
    const phone = phoneRow(screen);
    if (phone) return phone;
    const viewing = live?.id === screen.id;
    return h(
      "li",
      { class: "screen" },
      h("span", { class: "id" }, screen.id),
      h("span", { class: "muted" }, `${screen.width}x${screen.height}`),
      h("span", { class: "muted" }, p(`owner.${screen.owner === "human" ? "human" : "agent"}`)),
      screen.agentDriving ? h("span", { class: "badge" }, p("agentDriving")) : null,
      h("span", { class: "ostia-spacer" }),
      viewing ? button(
        live?.control.holding ? p("giveBack") : p("takeOver"),
        () => void toggleInput(),
        true,
        true
      ) : button(p("view"), () => void openView(screen.id)),
      button(p("stop"), () => void act("stop", { id: screen.id }))
    );
  }
  function render() {
    if (!state) {
      root.replaceChildren(h("div", { class: "page muted" }, problem ?? p("loading")));
      return;
    }
    const s = state;
    root.replaceChildren(
      h(
        "div",
        { class: "list" },
        h("div", { class: "alpha" }, p("alpha")),
        ...installView(s.install),
        h(
          "div",
          { class: "row" },
          h("strong", {}, p("screens")),
          h("span", { class: "ostia-spacer" }),
          s.install.service ? button(p("new"), () => void act("create"), true) : null
        ),
        s.screens.length === 0 ? emptyState(p("none")) : h("ul", { class: "screens" }, ...s.screens.map(screenRow)),
        askRow(s.phones),
        s.always ? h(
          "div",
          { class: "row" },
          h("span", {}, p("always")),
          button(p("revoke"), () => void act("revoke"))
        ) : null,
        live ? h("div", { class: "muted" }, live.control.holding ? p("youHold") : p("viewOnly")) : null,
        watching ? h("div", { class: "muted" }, p("watchOnly")) : null,
        problem ? h("div", { class: "error" }, problem) : null
      )
    );
  }
  onPanelVisibility((hidden) => {
    if (hidden) void stopWatch();
  });
  var events = new EventSource("events");
  events.onmessage = () => void refresh();
  window.addEventListener("focus", () => void refresh());
  setInterval(() => {
    if (state?.screens.length) void refresh();
  }, STATE_POLL_MS);
  render();
  void refresh();
})();
