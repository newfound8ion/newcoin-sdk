export const default_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'license', type: 'string' }
  ];
  
export const profile_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'license', type: 'string' }
    
]

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
  
  export const SBT_NFT_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'issuer', type: 'string' },
    { name: 'recipient', type: 'string' },
    { name: 'quantifiers', type: 'string' },
    { name: 'signature', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'version', type: 'string' }
  ];
  
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
  export const ERC721_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
  ];
  
    // https://docs.opensea.io/docs/metadata-standards
    // export const OpenSea_schema = [
    //]