!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("ppsdkconstants", [], factory) : "object" == typeof exports ? exports.ppsdkconstants = factory() : root.ppsdkconstants = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var COUNTRY = {
                AD: "AD",
                AE: "AE",
                AG: "AG",
                AI: "AI",
                AL: "AL",
                AM: "AM",
                AN: "AN",
                AO: "AO",
                AR: "AR",
                AT: "AT",
                AU: "AU",
                AW: "AW",
                AZ: "AZ",
                BA: "BA",
                BB: "BB",
                BE: "BE",
                BF: "BF",
                BG: "BG",
                BH: "BH",
                BI: "BI",
                BJ: "BJ",
                BM: "BM",
                BN: "BN",
                BO: "BO",
                BR: "BR",
                BS: "BS",
                BT: "BT",
                BW: "BW",
                BY: "BY",
                BZ: "BZ",
                CA: "CA",
                CD: "CD",
                CG: "CG",
                CH: "CH",
                CI: "CI",
                CK: "CK",
                CL: "CL",
                CM: "CM",
                CN: "CN",
                CO: "CO",
                CR: "CR",
                CV: "CV",
                CY: "CY",
                CZ: "CZ",
                DE: "DE",
                DJ: "DJ",
                DK: "DK",
                DM: "DM",
                DO: "DO",
                DZ: "DZ",
                EC: "EC",
                EE: "EE",
                EG: "EG",
                ER: "ER",
                ES: "ES",
                ET: "ET",
                FI: "FI",
                FJ: "FJ",
                FK: "FK",
                FM: "FM",
                FO: "FO",
                FR: "FR",
                GA: "GA",
                GB: "GB",
                GD: "GD",
                GE: "GE",
                GF: "GF",
                GI: "GI",
                GL: "GL",
                GM: "GM",
                GN: "GN",
                GP: "GP",
                GR: "GR",
                GT: "GT",
                GW: "GW",
                GY: "GY",
                HK: "HK",
                HN: "HN",
                HR: "HR",
                HU: "HU",
                ID: "ID",
                IE: "IE",
                IL: "IL",
                IN: "IN",
                IS: "IS",
                IT: "IT",
                JM: "JM",
                JO: "JO",
                JP: "JP",
                KE: "KE",
                KG: "KG",
                KH: "KH",
                KI: "KI",
                KM: "KM",
                KN: "KN",
                KR: "KR",
                KW: "KW",
                KY: "KY",
                KZ: "KZ",
                LA: "LA",
                LC: "LC",
                LI: "LI",
                LK: "LK",
                LS: "LS",
                LT: "LT",
                LU: "LU",
                LV: "LV",
                MA: "MA",
                MC: "MC",
                MD: "MD",
                ME: "ME",
                MG: "MG",
                MH: "MH",
                MK: "MK",
                ML: "ML",
                MN: "MN",
                MQ: "MQ",
                MR: "MR",
                MS: "MS",
                MT: "MT",
                MU: "MU",
                MV: "MV",
                MW: "MW",
                MX: "MX",
                MY: "MY",
                MZ: "MZ",
                NA: "NA",
                NC: "NC",
                NE: "NE",
                NF: "NF",
                NG: "NG",
                NI: "NI",
                NL: "NL",
                NO: "NO",
                NP: "NP",
                NR: "NR",
                NU: "NU",
                NZ: "NZ",
                OM: "OM",
                PA: "PA",
                PE: "PE",
                PF: "PF",
                PG: "PG",
                PH: "PH",
                PL: "PL",
                PM: "PM",
                PN: "PN",
                PT: "PT",
                PW: "PW",
                PY: "PY",
                QA: "QA",
                RE: "RE",
                RO: "RO",
                RS: "RS",
                RU: "RU",
                RW: "RW",
                SA: "SA",
                SB: "SB",
                SC: "SC",
                SE: "SE",
                SG: "SG",
                SH: "SH",
                SI: "SI",
                SJ: "SJ",
                SK: "SK",
                SL: "SL",
                SM: "SM",
                SN: "SN",
                SO: "SO",
                SR: "SR",
                ST: "ST",
                SV: "SV",
                SZ: "SZ",
                TC: "TC",
                TD: "TD",
                TG: "TG",
                TH: "TH",
                TJ: "TJ",
                TM: "TM",
                TN: "TN",
                TO: "TO",
                TR: "TR",
                TT: "TT",
                TV: "TV",
                TW: "TW",
                TZ: "TZ",
                UA: "UA",
                UG: "UG",
                US: "US",
                UY: "UY",
                VA: "VA",
                VC: "VC",
                VE: "VE",
                VG: "VG",
                VN: "VN",
                VU: "VU",
                WF: "WF",
                WS: "WS",
                YE: "YE",
                YT: "YT",
                ZA: "ZA",
                ZM: "ZM",
                ZW: "ZW"
            }, LANG = {
                AR: "ar",
                CS: "cs",
                DA: "da",
                DE: "de",
                EL: "el",
                EN: "en",
                ES: "es",
                FI: "fi",
                FR: "fr",
                HE: "he",
                HU: "hu",
                ID: "id",
                IT: "it",
                JA: "ja",
                KO: "ko",
                NL: "nl",
                NO: "no",
                PL: "pl",
                PT: "pt",
                RU: "ru",
                SK: "sk",
                SV: "sv",
                TH: "th",
                TR: "tr",
                ZH: "zh"
            }, COUNTRY_LANGS = {
                AD: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AE: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR ],
                AG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AI: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AL: [ LANG.EN ],
                AM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AN: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AO: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AR: [ LANG.ES, LANG.EN ],
                AT: [ LANG.DE, LANG.EN ],
                AU: [ LANG.EN ],
                AW: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                AZ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                BA: [ LANG.EN ],
                BB: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                BE: [ LANG.EN, LANG.NL, LANG.FR ],
                BF: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                BG: [ LANG.EN ],
                BH: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                BI: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                BJ: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                BM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                BN: [ LANG.EN ],
                BO: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                BR: [ LANG.PT, LANG.EN ],
                BS: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                BT: [ LANG.EN ],
                BW: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                BY: [ LANG.EN ],
                BZ: [ LANG.EN, LANG.ES, LANG.FR, LANG.ZH ],
                CA: [ LANG.EN, LANG.FR ],
                CD: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                CG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                CH: [ LANG.DE, LANG.FR, LANG.EN ],
                CI: [ LANG.FR, LANG.EN ],
                CK: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                CL: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                CM: [ LANG.FR, LANG.EN ],
                CN: [ LANG.ZH ],
                CO: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                CR: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                CV: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                CY: [ LANG.EN ],
                CZ: [ LANG.CS, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                DE: [ LANG.DE, LANG.EN ],
                DJ: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                DK: [ LANG.DA, LANG.EN ],
                DM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                DO: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                DZ: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                EC: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                EE: [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ],
                EG: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ER: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ES: [ LANG.ES, LANG.EN ],
                ET: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                FI: [ LANG.FI, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                FJ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                FK: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                FM: [ LANG.EN ],
                FO: [ LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                FR: [ LANG.FR, LANG.EN ],
                GA: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                GB: [ LANG.EN ],
                GD: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GE: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GF: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GI: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GL: [ LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GN: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                GP: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GR: [ LANG.EL, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GT: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                GW: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                GY: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                HK: [ LANG.EN, LANG.ZH ],
                HN: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                HR: [ LANG.EN ],
                HU: [ LANG.HU, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ID: [ LANG.ID, LANG.EN ],
                IE: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                IL: [ LANG.HE, LANG.EN ],
                IN: [ LANG.EN ],
                IS: [ LANG.EN ],
                IT: [ LANG.IT, LANG.EN ],
                JM: [ LANG.EN, LANG.ES, LANG.FR, LANG.ZH ],
                JO: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                JP: [ LANG.JA, LANG.EN ],
                KE: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                KG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                KH: [ LANG.EN ],
                KI: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                KM: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                KN: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                KR: [ LANG.KO, LANG.EN ],
                KW: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                KY: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                KZ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                LA: [ LANG.EN ],
                LC: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                LI: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                LK: [ LANG.EN ],
                LS: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                LT: [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ],
                LU: [ LANG.EN, LANG.DE, LANG.FR, LANG.ES, LANG.ZH ],
                LV: [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ],
                MA: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MC: [ LANG.FR, LANG.EN ],
                MD: [ LANG.EN ],
                ME: [ LANG.EN ],
                MG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MH: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MK: [ LANG.EN ],
                ML: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                MN: [ LANG.EN ],
                MQ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MR: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MS: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MT: [ LANG.EN ],
                MU: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MV: [ LANG.EN ],
                MW: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                MX: [ LANG.ES, LANG.EN ],
                MY: [ LANG.EN ],
                MZ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                NA: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                NC: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                NE: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                NF: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                NG: [ LANG.EN ],
                NI: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                NL: [ LANG.NL, LANG.EN ],
                NO: [ LANG.NO, LANG.EN ],
                NP: [ LANG.EN ],
                NR: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                NU: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                NZ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                OM: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                PA: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                PE: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                PF: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                PG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                PH: [ LANG.EN ],
                PL: [ LANG.PL, LANG.EN ],
                PM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                PN: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                PT: [ LANG.PT, LANG.EN ],
                PW: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                PY: [ LANG.ES, LANG.EN ],
                QA: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR ],
                RE: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                RO: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                RS: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                RU: [ LANG.RU, LANG.EN ],
                RW: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                SA: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SB: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SC: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                SE: [ LANG.SV, LANG.EN ],
                SG: [ LANG.EN ],
                SH: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SI: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SJ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SK: [ LANG.SK, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SL: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SN: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                SO: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SR: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ST: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                SV: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                SZ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TC: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TD: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                TG: [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ],
                TH: [ LANG.TH, LANG.EN ],
                TJ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TN: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TO: [ LANG.EN ],
                TR: [ LANG.TR, LANG.EN ],
                TT: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TV: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                TW: [ LANG.ZH, LANG.EN ],
                TZ: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                UA: [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ],
                UG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                US: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                UY: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                VA: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                VC: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                VE: [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ],
                VG: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                VN: [ LANG.EN ],
                VU: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                WF: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                WS: [ LANG.EN ],
                YE: [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                YT: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ZA: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ZM: [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ],
                ZW: [ LANG.EN ]
            }, SDK_SETTINGS = {
                NAMESPACE: "data-namespace",
                CLIENT_TOKEN: "data-client-token",
                MERCHANT_ID: "data-merchant-id",
                PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
                STAGE_HOST: "data-stage-host",
                API_STAGE_HOST: "data-api-stage-host",
                CSP_NONCE: "data-csp-nonce",
                ENABLE_3DS: "data-enable-3ds",
                SDK_INTEGRATION_SOURCE: "data-sdk-integration-source",
                USER_ID_TOKEN: "data-user-id-token",
                AMOUNT: "data-amount",
                CLIENT_METADATA_ID: "data-client-metadata-id"
            }, SDK_QUERY_KEYS = {
                COMPONENTS: "components",
                ENV: "env",
                DEBUG: "debug",
                CACHEBUST: "cachebust",
                CLIENT_ID: "client-id",
                MERCHANT_ID: "merchant-id",
                LOCALE: "locale",
                CURRENCY: "currency",
                INTENT: "intent",
                COMMIT: "commit",
                VAULT: "vault",
                BUYER_COUNTRY: "buyer-country",
                DISABLE_FUNDING: "disable-funding",
                DISABLE_CARD: "disable-card",
                INTEGRATION_DATE: "integration-date"
            }, COMPONENTS = {
                BUTTONS: "buttons",
                HOSTED_FIELDS: "hosted-fields"
            }, DEBUG = {
                TRUE: !0,
                FALSE: !1
            }, QUERY_BOOL = {
                TRUE: "true",
                FALSE: "false"
            }, PROTOCOL = {
                HTTP: "http",
                HTTPS: "https"
            }, ENV = {
                LOCAL: "local",
                STAGE: "stage",
                SANDBOX: "sandbox",
                PRODUCTION: "production",
                TEST: "test"
            }, FPTI_KEY = {
                FEED: "feed_name",
                STATE: "state_name",
                TRANSITION: "transition_name",
                BUTTON_TYPE: "button_type",
                SESSION_UID: "page_session_id",
                BUTTON_SESSION_UID: "button_session_id",
                TOKEN: "token",
                CONTEXT_ID: "context_id",
                CONTEXT_TYPE: "context_type",
                REFERER: "referer_url",
                MERCHANT_DOMAIN: "merchant_domain",
                PAY_ID: "pay_id",
                SELLER_ID: "seller_id",
                CLIENT_ID: "client_id",
                DATA_SOURCE: "serverside_data_source",
                BUTTON_SOURCE: "button_source",
                ERROR_CODE: "ext_error_code",
                ERROR_DESC: "ext_error_desc",
                PAGE_LOAD_TIME: "page_load_time",
                EXPERIMENT_NAME: "pxp_exp_id",
                TREATMENT_NAME: "pxp_trtmnt_id",
                TRANSITION_TIME: "transition_time",
                FUNDING_LIST: "eligible_payment_methods",
                FUNDING_COUNT: "eligible_payment_count",
                CHOSEN_FUNDING: "selected_payment_method",
                BUTTON_LAYOUT: "button_layout",
                VERSION: "checkoutjs_version",
                LOCALE: "locale",
                BUYER_COUNTRY: "buyer_cntry",
                INTEGRATION_IDENTIFIER: "integration_identifier",
                PARTNER_ATTRIBUTION_ID: "bn_code",
                SDK_NAME: "sdk_name",
                SDK_VERSION: "sdk_version",
                USER_AGENT: "user_agent",
                USER_ACTION: "user_action",
                CONTEXT_CORRID: "context_correlation_id",
                SDK_CACHE: "sdk_cache",
                SDK_LOAD_TIME: "sdk_load_time",
                IS_VAULT: "is_vault",
                DISABLE_FUNDING: "disable_funding",
                DISABLE_CARD: "disable_card",
                RESPONSE_DURATION: "response_duration",
                SDK_INTEGRATION_SOURCE: "sdk_integration_source",
                PAYMENT_FLOW: "payment_flow",
                BUTTON_VERSION: "button_version"
            }, FPTI_USER_ACTION = {
                COMMIT: "commit",
                CONTINUE: "continue"
            }, FPTI_DATA_SOURCE = {
                PAYMENTS_SDK: "checkout"
            }, FPTI_FEED = {
                PAYMENTS_SDK: "payments_sdk"
            }, FPTI_SDK_NAME = {
                PAYMENTS_SDK: "payments_sdk"
            }, INTENT = {
                CAPTURE: "capture",
                AUTHORIZE: "authorize",
                ORDER: "order"
            }, COMMIT = {
                TRUE: !0,
                FALSE: !1
            }, VAULT = {
                TRUE: !0,
                FALSE: !1
            }, CURRENCY = {
                AED: "AED",
                ALL: "ALL",
                ANG: "ANG",
                AOA: "AOA",
                AUD: "AUD",
                AWG: "AWG",
                BAM: "BAM",
                BBD: "BBD",
                BGN: "BGN",
                BIF: "BIF",
                BMD: "BMD",
                BND: "BND",
                BOB: "BOB",
                BRL: "BRL",
                BSD: "BSD",
                BTN: "BTN",
                CAD: "CAD",
                CDF: "CDF",
                CHF: "CHF",
                CLP: "CLP",
                COP: "COP",
                CRC: "CRC",
                CVE: "CVE",
                CZK: "CZK",
                DJF: "DJF",
                DKK: "DKK",
                DOP: "DOP",
                DZD: "DZD",
                EGP: "EGP",
                ETB: "ETB",
                EUR: "EUR",
                FJD: "FJD",
                FKP: "FKP",
                GBP: "GBP",
                GIP: "GIP",
                GMD: "GMD",
                GNF: "GNF",
                GTQ: "GTQ",
                GYD: "GYD",
                HKD: "HKD",
                HNL: "HNL",
                HRK: "HRK",
                HUF: "HUF",
                IDR: "IDR",
                ILS: "ILS",
                INR: "INR",
                ISK: "ISK",
                JMD: "JMD",
                JPY: "JPY",
                KES: "KES",
                KMF: "KMF",
                KRW: "KRW",
                KYD: "KYD",
                LAK: "LAK",
                LKR: "LKR",
                MDL: "MDL",
                MGA: "MGA",
                MKD: "MKD",
                MNT: "MNT",
                MRO: "MRO",
                MUR: "MUR",
                MVR: "MVR",
                MXN: "MXN",
                MYR: "MYR",
                NAD: "NAD",
                NIO: "NIO",
                NOK: "NOK",
                NPR: "NPR",
                NZD: "NZD",
                PEN: "PEN",
                PGK: "PGK",
                PHP: "PHP",
                PLN: "PLN",
                PYG: "PYG",
                QAR: "QAR",
                RON: "RON",
                RSD: "RSD",
                RUB: "RUB",
                SAR: "SAR",
                SBD: "SBD",
                SCR: "SCR",
                SEK: "SEK",
                SGD: "SGD",
                SHP: "SHP",
                SLL: "SLL",
                SOS: "SOS",
                SRD: "SRD",
                SZL: "SZL",
                THB: "THB",
                TJS: "TJS",
                TOP: "TOP",
                TTD: "TTD",
                TWD: "TWD",
                TZS: "TZS",
                USD: "USD",
                UYU: "UYU",
                VND: "VND",
                VUV: "VUV",
                WST: "WST",
                XAF: "XAF",
                XCD: "XCD",
                YER: "YER"
            }, PLATFORM = {
                DESKTOP: "desktop",
                MOBILE: "mobile"
            }, FUNDING = {
                PAYPAL: "paypal",
                VENMO: "venmo",
                ITAU: "itau",
                CREDIT: "credit",
                CARD: "card",
                IDEAL: "ideal",
                SEPA: "sepa",
                BANCONTACT: "bancontact",
                GIROPAY: "giropay",
                SOFORT: "sofort",
                EPS: "eps",
                MYBANK: "mybank",
                P24: "p24",
                VERKKOPANKKI: "verkkopankki",
                PAYU: "payu",
                BLIK: "blik",
                TRUSTLY: "trustly",
                ZIMPLER: "zimpler",
                MAXIMA: "maxima",
                OXXO: "oxxo",
                BOLETO: "boleto",
                WECHATPAY: "wechatpay",
                MERCADOPAGO: "mercadopago"
            }, CARD = {
                VISA: "visa",
                MASTERCARD: "mastercard",
                AMEX: "amex",
                DISCOVER: "discover",
                HIPER: "hiper",
                ELO: "elo",
                JCB: "jcb",
                CUP: "cup"
            }, WALLET_INSTRUMENT = {
                BALANCE: "balance",
                CARD: "card",
                BANK: "bank",
                CREDIT: "credit"
            }, DEFAULT_COUNTRY = COUNTRY.US, DEFAULT_CURRENCY = CURRENCY.USD, DEFAULT_INTENT = INTENT.CAPTURE, DEFAULT_COMMIT = COMMIT.TRUE, DEFAULT_SALE_COMMIT = COMMIT.TRUE, DEFAULT_NONSALE_COMMIT = COMMIT.TRUE, DEFAULT_VAULT = VAULT.FALSE, DEFAULT_COMPONENTS = COMPONENTS.BUTTONS, DEFAULT_DEBUG = DEBUG.FALSE;
            __webpack_require__.d(__webpack_exports__, "COUNTRY", function() {
                return COUNTRY;
            });
            __webpack_require__.d(__webpack_exports__, "LANG", function() {
                return LANG;
            });
            __webpack_require__.d(__webpack_exports__, "COUNTRY_LANGS", function() {
                return COUNTRY_LANGS;
            });
            __webpack_require__.d(__webpack_exports__, "SDK_PATH", function() {
                return "/sdk/js";
            });
            __webpack_require__.d(__webpack_exports__, "SDK_SETTINGS", function() {
                return SDK_SETTINGS;
            });
            __webpack_require__.d(__webpack_exports__, "SDK_QUERY_KEYS", function() {
                return SDK_QUERY_KEYS;
            });
            __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() {
                return COMPONENTS;
            });
            __webpack_require__.d(__webpack_exports__, "DEBUG", function() {
                return DEBUG;
            });
            __webpack_require__.d(__webpack_exports__, "QUERY_BOOL", function() {
                return QUERY_BOOL;
            });
            __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() {
                return "unknown";
            });
            __webpack_require__.d(__webpack_exports__, "PROTOCOL", function() {
                return PROTOCOL;
            });
            __webpack_require__.d(__webpack_exports__, "MERCHANT_ID_MAX", function() {
                return 10;
            });
            __webpack_require__.d(__webpack_exports__, "ENV", function() {
                return ENV;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_KEY", function() {
                return FPTI_KEY;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_USER_ACTION", function() {
                return FPTI_USER_ACTION;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_DATA_SOURCE", function() {
                return FPTI_DATA_SOURCE;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_FEED", function() {
                return FPTI_FEED;
            });
            __webpack_require__.d(__webpack_exports__, "FPTI_SDK_NAME", function() {
                return FPTI_SDK_NAME;
            });
            __webpack_require__.d(__webpack_exports__, "INTENT", function() {
                return INTENT;
            });
            __webpack_require__.d(__webpack_exports__, "COMMIT", function() {
                return COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "VAULT", function() {
                return VAULT;
            });
            __webpack_require__.d(__webpack_exports__, "CURRENCY", function() {
                return CURRENCY;
            });
            __webpack_require__.d(__webpack_exports__, "PLATFORM", function() {
                return PLATFORM;
            });
            __webpack_require__.d(__webpack_exports__, "FUNDING", function() {
                return FUNDING;
            });
            __webpack_require__.d(__webpack_exports__, "CARD", function() {
                return CARD;
            });
            __webpack_require__.d(__webpack_exports__, "WALLET_INSTRUMENT", function() {
                return WALLET_INSTRUMENT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_COUNTRY", function() {
                return DEFAULT_COUNTRY;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY", function() {
                return DEFAULT_CURRENCY;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_INTENT", function() {
                return DEFAULT_INTENT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_COMMIT", function() {
                return DEFAULT_COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_SALE_COMMIT", function() {
                return DEFAULT_SALE_COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_NONSALE_COMMIT", function() {
                return DEFAULT_NONSALE_COMMIT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_VAULT", function() {
                return DEFAULT_VAULT;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_COMPONENTS", function() {
                return DEFAULT_COMPONENTS;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_DEBUG", function() {
                return DEFAULT_DEBUG;
            });
        }
    });
});
//# sourceMappingURL=paypal-sdk-constants.js.map