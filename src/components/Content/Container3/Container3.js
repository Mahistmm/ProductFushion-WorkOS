import React from "react";
import Section3 from "./Section3";

const Container3 = () => {
  return (
    <div className="pt-6 pb-6 mb-10 border-b-2  border-gray-700 w-11/12 mx-auto">
      <h1 className="text-xl text-white font-bold">Integrate a feature</h1>
      <div className=" items-center md:flex">
        <div>
          <Section3
            slide={"https://workos.imgix.net/docs/icons/sso-20220915.png"}
            head={"Single Singn-On"}
            detail={
              "Integrate with any identity provider that supports SAML or OpenID Connect."
            }
          />
          <Section3
            slide={
              "https://workos.imgix.net/docs/icons/directory-sync-20220915.png"
            }
            head={"Directory Sync"}
            detail={
              " Add SCIM provisioning and deprovisioning for all user directories."
            }
          />
          <Section3
            slide={
              "https://workos.imgix.net/docs/icons/admin-portal-20220915.png"
            }
            head={"Admin Portal"}
            detail={
              "Self-serve Single Sign-On and Directory Sync onboarding for your enterprise customers."
            }
          />
        </div>

        <div>
          <Section3
            slide={
              "https://workos.imgix.net/docs/icons/audit-logs-20220915.png"
            }
            head={"Audit Logs"}
            detail={
              "Ingest event data from your application and export or stream it to a third party log provider."
            }
          />
          <Section3
            slide={"https://workos.imgix.net/docs/icons/mfa-20220915.png"}
            head={"Multi Factor Authentication"}
            detail={
              "A composable API for implementing Multi-Factor Authentication (MFA) for basic auth strategies."
            }
          />
          <Section3
            slide={
              "https://workos.imgix.net/docs/icons/magic-link-20220915.png"
            }
            head={"Magic Link"}
            detail={
              "Passwordless sign-in using secret links sent to a user’s email address."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Container3;
