import "@patternfly/patternfly/components/Login/login.css";
import "./CaptchaStage.js";

import { flowFactory } from "#stories/flow-interface";

export default {
    title: "Flow / Stages / <ak-stage-captcha>",
};

export const ChallengeHCaptcha = flowFactory("ak-stage-captcha", {
    jsUrl: "https://js.hcaptcha.com/1/api.js",
    siteKey: "10000000-ffff-ffff-ffff-000000000001",
    interactive: true,
});

// https://developers.cloudflare.com/turnstile/troubleshooting/testing/
export const ChallengeTurnstileVisible = flowFactory("ak-stage-captcha", {
    jsUrl: "https://challenges.cloudflare.com/turnstile/v0/api.js",
    siteKey: "1x00000000000000000000AA",
    interactive: true,
});
export const ChallengeTurnstileInvisible = flowFactory("ak-stage-captcha", {
    jsUrl: "https://challenges.cloudflare.com/turnstile/v0/api.js",
    siteKey: "1x00000000000000000000BB",
    interactive: true,
});
export const ChallengeTurnstileForce = flowFactory("ak-stage-captcha", {
    jsUrl: "https://challenges.cloudflare.com/turnstile/v0/api.js",
    siteKey: "3x00000000000000000000FF",
    interactive: true,
});

export const ChallengeRecaptcha = flowFactory("ak-stage-captcha", {
    jsUrl: "https://www.google.com/recaptcha/api.js",
    siteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    interactive: true,
});
