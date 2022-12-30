import { NCInit } from "./io/system";

export { NCO_utils_API }

class NCO_utils_API {

    //@ts-ignore
    constructor(n: NCInit){};

     normalizeUsername = (username: string, r: string) => {
    return username.replace(/\./g, r + r.repeat(12 - username.length));
};

// Collection names 
     getRootCollectionName = (username: string) => {
    return this.normalizeUsername(username, "z");
};

     getFileCollectionName = (username: string) => {
    return this.normalizeUsername(username, "y");
};

// schema names 
      getRootCollectionNftSchemaName = (username: string) => {
    return this.normalizeUsername(username, "w");
};

      getRootCollectionProfileSchemaName = (username: string) => {
    return this.normalizeUsername(username, "p");
};
// links to other collecitons with descriptions
     getRootCollectionBindingSchemaName = (username: string) => {
    return this.normalizeUsername(username, "b");
};

      getFileCollectionFileSchemaName = (username: string) => {
    return this.normalizeUsername(username, "v");
};

// template
      getRootCollectionDefaultSchemaTemplateName = (username: string) => {
    return this.normalizeUsername(username, "t");
};

}
