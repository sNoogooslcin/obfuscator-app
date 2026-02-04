// @ts-nocheck
import * as __fd_glob_12 from "../content/docs/tutorial/vm-obfuscation.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/tutorial/html-obfuscation.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/tutorial/getting-started.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/tutorial/best-practices.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/tutorial/basic-obfuscation.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/api-reference/rate-limits.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/api-reference/endpoints.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/api-reference/authentication.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/what-is-obfuscator-io.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/tutorial/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api-reference/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api-reference/meta.json": __fd_glob_1, "tutorial/meta.json": __fd_glob_2, }, {"index.mdx": __fd_glob_3, "what-is-obfuscator-io.mdx": __fd_glob_4, "api-reference/authentication.mdx": __fd_glob_5, "api-reference/endpoints.mdx": __fd_glob_6, "api-reference/rate-limits.mdx": __fd_glob_7, "tutorial/basic-obfuscation.mdx": __fd_glob_8, "tutorial/best-practices.mdx": __fd_glob_9, "tutorial/getting-started.mdx": __fd_glob_10, "tutorial/html-obfuscation.mdx": __fd_glob_11, "tutorial/vm-obfuscation.mdx": __fd_glob_12, });