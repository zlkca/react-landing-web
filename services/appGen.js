import { get, post, put, del } from "./http";
import { buildApiUrl } from "./utils";

export const AppGenAPI = {
//   fetchBranches: async (query) => {
//     const url = buildApiUrl("/gen-module-files", query);
//     const rsp = await get(url);
//     let data = null;
//     if (rsp.data) {
//       data = rsp.data.map((it) => ({
//         ...it,
//       }));
//     }
//     return { ...rsp, data };
//   },

//   fetchBranch: async (params) => {
//     const url = buildApiUrl("/gen-module-files", params);
//     return await get(url);
//   },

  genApp: async (data) => {
    const url = buildApiUrl("/gen-module-files");
    return await post(url, data);
  },

//   updateBranch: async (params, data) => {
//     const url = buildApiUrl("/gen-module-files", params);
//     return await put(url, data);
//   },

//   deleteBranch: async (params) => {
//     const url = buildApiUrl("/gen-module-files", params);
//     return await del(url);
//   },

//   searchBranches: async (query) => {
//     const url = buildApiUrl("/search/gen-module-files");
//     const rsp = await post(url, query);
//     let data = null;
//     if (rsp.data) {
//       data = rsp.data.map((it) => ({
//         ...it,
//         created: moment.utc(it.created).local().format("yyyy-MM-DD HH:mm:ss"),
//         updated: moment.utc(it.updated).local().format("yyyy-MM-DD HH:mm:ss"),
//       }));
//     }
//     return { ...rsp, data };
//   },
};
