import "#elements/EmptyState";
import "#flow/FormStatic";
import "#flow/components/ak-flow-card";

import { BaseStage } from "#flow/stages/base";

import { OAuthDeviceCodeFinishChallenge } from "@goauthentik/api";

import { msg } from "@lit/localize";
import { html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { PropertyValues } from "lit";

@customElement("ak-flow-provider-oauth2-code-finish")
export class DeviceCodeFinish extends BaseStage<
    OAuthDeviceCodeFinishChallenge,
    OAuthDeviceCodeFinishChallenge
> {
    firstUpdated(changedProperties: PropertyValues): void {
        super.firstUpdated(changedProperties);
        setTimeout(() => window.location.assign("https://my.netsody.io/setup"), 3000);
    }

    render(): TemplateResult {
        return html`<ak-flow-card .challenge=${this.challenge}>
            <ak-empty-state icon="fas fa-check">
                <span>${msg("Device successfully authenticated.")}</span>
                <span slot="body">
                    You will now be redirected to the Netsody Dashboard to complete the device setup.
                    <br />
                    <a href="https://my.netsody.io/setup">Click here, if you're not redirected automatically</a>
                </span>
            </ak-empty-state>
        </ak-flow-card>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ak-flow-provider-oauth2-code-finish": DeviceCodeFinish;
    }
}
