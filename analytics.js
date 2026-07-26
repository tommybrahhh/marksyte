(function () {
  "use strict";

  var measurementId = "G-VZ749HVPK6";
  var consentKey = "marksyte-analytics-consent";
  var analyticsLoaded = false;

  function getStoredConsent() {
    try {
      return window.localStorage.getItem(consentKey);
    } catch (error) {
      return null;
    }
  }

  function storeConsent(value) {
    try {
      window.localStorage.setItem(consentKey, value);
    } catch (error) {
      // If storage is unavailable, the visitor can choose again next time.
    }
  }

  function initialiseGtag() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
  }

  function loadAnalytics() {
    window["ga-disable-" + measurementId] = false;
    initialiseGtag();

    window.gtag("consent", analyticsLoaded ? "update" : "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });

    if (analyticsLoaded) {
      window.gtag("config", measurementId);
      return;
    }

    analyticsLoaded = true;
    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }

  function removeAnalyticsCookies() {
    document.cookie.split(";").forEach(function (cookie) {
      var name = cookie.split("=")[0].trim();
      if (name.indexOf("_ga") !== 0) return;

      document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
      document.cookie = name + "=; Max-Age=0; path=/; domain=.marksyte.com; SameSite=Lax";
    });
  }

  function disableAnalytics() {
    window["ga-disable-" + measurementId] = true;
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });
    }
    removeAnalyticsCookies();
  }

  function addStyles() {
    if (document.getElementById("analytics-consent-styles")) return;

    var style = document.createElement("style");
    style.id = "analytics-consent-styles";
    style.textContent =
      ".analytics-consent{position:fixed;z-index:10000;right:20px;bottom:20px;left:20px;max-width:680px;margin:auto;padding:20px;border:1px solid rgba(20,35,32,.18);border-radius:16px;background:#fff;color:#15231f;box-shadow:0 18px 55px rgba(9,25,21,.22);font:inherit}" +
      ".analytics-consent h2{margin:0 0 8px;font-size:1.15rem}" +
      ".analytics-consent p{margin:0;line-height:1.55}" +
      ".analytics-consent a{color:inherit;text-decoration:underline}" +
      ".analytics-consent__actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}" +
      ".analytics-consent button,.analytics-preferences{min-height:42px;padding:10px 16px;border:1px solid #173e35;border-radius:999px;font:inherit;font-weight:700;cursor:pointer}" +
      ".analytics-consent__accept{background:#173e35;color:#fff}" +
      ".analytics-consent__reject{background:#fff;color:#173e35}" +
      ".analytics-preferences{position:fixed;z-index:9999;left:14px;bottom:14px;min-height:36px;padding:7px 12px;background:#fff;color:#173e35;box-shadow:0 6px 24px rgba(9,25,21,.16);font-size:.78rem}" +
      "@media(max-width:560px){.analytics-consent{right:12px;bottom:12px;left:12px;padding:18px}.analytics-consent__actions{display:grid}.analytics-consent button{width:100%}}";
    document.head.appendChild(style);
  }

  function copy() {
    var isSpanish = (document.documentElement.lang || "").toLowerCase().indexOf("es") === 0;
    return isSpanish
      ? {
          title: "Cookies de analítica",
          text: "Usamos Google Analytics para entender cómo se utiliza la web. Solo se activará si aceptas.",
          accept: "Aceptar analítica",
          reject: "Rechazar",
          settings: "Configurar cookies",
          policy: "Política de cookies",
          policyUrl: "/es/cookies/"
        }
      : {
          title: "Analytics cookies",
          text: "We use Google Analytics to understand how the website is used. It will only activate if you accept.",
          accept: "Accept analytics",
          reject: "Reject",
          settings: "Cookie settings",
          policy: "Cookie policy",
          policyUrl: "/cookies/"
        };
  }

  function removeBanner() {
    var banner = document.getElementById("analytics-consent");
    if (banner) banner.remove();
  }

  function showPreferencesButton() {
    if (document.getElementById("analytics-preferences")) return;

    var labels = copy();
    var button = document.createElement("button");
    button.type = "button";
    button.id = "analytics-preferences";
    button.className = "analytics-preferences";
    button.textContent = labels.settings;
    button.addEventListener("click", showBanner);
    document.body.appendChild(button);
  }

  function chooseConsent(value) {
    storeConsent(value);
    if (value === "granted") loadAnalytics();
    else disableAnalytics();
    removeBanner();
    showPreferencesButton();
  }

  function showBanner() {
    removeBanner();
    addStyles();

    var labels = copy();
    var banner = document.createElement("section");
    banner.id = "analytics-consent";
    banner.className = "analytics-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-labelledby", "analytics-consent-title");

    var title = document.createElement("h2");
    title.id = "analytics-consent-title";
    title.textContent = labels.title;

    var description = document.createElement("p");
    description.appendChild(document.createTextNode(labels.text + " "));
    var policyLink = document.createElement("a");
    policyLink.href = labels.policyUrl;
    policyLink.textContent = labels.policy;
    description.appendChild(policyLink);

    var actions = document.createElement("div");
    actions.className = "analytics-consent__actions";

    var accept = document.createElement("button");
    accept.type = "button";
    accept.className = "analytics-consent__accept";
    accept.textContent = labels.accept;
    accept.addEventListener("click", function () {
      chooseConsent("granted");
    });

    var reject = document.createElement("button");
    reject.type = "button";
    reject.className = "analytics-consent__reject";
    reject.textContent = labels.reject;
    reject.addEventListener("click", function () {
      chooseConsent("denied");
    });

    actions.appendChild(accept);
    actions.appendChild(reject);
    banner.appendChild(title);
    banner.appendChild(description);
    banner.appendChild(actions);
    document.body.appendChild(banner);
    accept.focus();
  }

  function startConsentUi() {
    addStyles();
    var storedConsent = getStoredConsent();
    if (storedConsent === "granted" && !analyticsLoaded) loadAnalytics();
    else if (storedConsent !== "denied") {
      showBanner();
      return;
    }
    showPreferencesButton();
  }

  if (getStoredConsent() === "granted") loadAnalytics();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startConsentUi);
  } else {
    startConsentUi();
  }
})();
