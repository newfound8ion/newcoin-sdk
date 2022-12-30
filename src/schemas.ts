
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
export const ERC721_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
  ];
  
export const default_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'license', type: 'string' }
  ];
  
  export const file_schema = [
    { name: 'name', type: 'string' }, 
    { name: 'path', type: "string" }, 
    { name: 'image', type: "string"},  // optional icon
    { name: 'content', type: 'string' }
  ];
  
  export const bind_schema = [
    { name: 'name', type: 'string' }, // binded collection name
    { name: 'image', type: "string"},  // optional icon
    { name: 'description', type: 'string' }
    
  ];

  // ID 
  export const id_vc_schema = [
    { name: "name",     type: 'string' },
    { name: 'service',  type: 'string' },
    { name: 'remoteId', type: 'string' },
    { name: 'handler',  type: 'string' },
    { name: 'score',    type: 'string' },
    { name: 'scopes',   type: 'string' },
    { name: 'src',      type: 'string' }
    // verifiedSocialIds?: string[];
  ];


 /* export const SBT_social_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'issuer', type: 'string' },
    { name: 'recipient', type: 'string' },
    { name: 'quantifiers', type: 'string' },
    { name: 'signed_by', type: 'string' },
    { name: 'signature', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'version', type: 'string' }
  ];*/
  
  export const profile_schema = [
      // this is for proto accounts
      { name: "name", type: "string"}, // Must be in schema
      { name: "status", type: "string"},
      { name: "offer", type: "string"},

      { name: "displayName",type: "string"},
      { name: "fullName",   type: "string"},
      { name: "firstName",  type: "string"},
      { name: "lastName",   type: "string"},
      { name: "username",   type: "string"},
      { name: "email",      type: "string"},
      { name: "phone",      type: "string"},
      { name: "bio",        type: "string"},
      // avatar 
      { name: "content_type", type: "string"},
      { name: "external_url", type: "string"},
      { name: "image",        type: "string"},
      { name: "blurHash",     type: "string"},
      { name: "aspectRatio",  type: "string"},
      // SOCIALS
      { name: "instagram",  type: "string"},
      { name: "tiktok",     type: "string"},
      { name: "youtube",    type: "string"},
      { name: "twitter",    type: "string"},
      { name: "spotify",    type: "string"},
      { name: "pinterest",  type: "string"},
      { name: "snapchat",   type: "string"},
      { name: "reddit",     type: "string"},
      { name: "discord",    type: "string"},
      { name: "tumblr",     type: "string"},
      { name: "soundcloud", type: "string"},
      { name: "apple",      type: "string"},
      { name: "telegram",   type: "string"},
      { name: "signal",     type: "string"},
      { name: "medium",     type: "string"},
      { name: "facebook",   type: "string"},
      { name: "facebookId", type: "string"},
      { name: "youtubeId",  type: "string"}
  
     // { name: "verifiedSocialIds", type: "string[]" }, // verified ids no meaning to store here
     //{ name: "powering", type: "number"},
     //{ name: "powered", type: "number"},
     //{ name: "stripeUid", type: "string"},
     //{ name: "subscriptionStatus", type: "string"},
     //{ name: "subscriptionRecord", type: "string"},
     //{ name: "subscriptionExpiry", type: "string"},
     //{ name: "consentEmail", type: "string"}, 
     //{ name: "consentTestgroup", type: "string"},
     //{ name: "consentPrivacyPolicy", type: "string"},
  ];