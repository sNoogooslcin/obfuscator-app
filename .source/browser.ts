// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "what-is-obfuscator-io.mdx": () => import("../content/docs/what-is-obfuscator-io.mdx?collection=docs"), "api-reference/authentication.mdx": () => import("../content/docs/api-reference/authentication.mdx?collection=docs"), "api-reference/endpoints.mdx": () => import("../content/docs/api-reference/endpoints.mdx?collection=docs"), "api-reference/rate-limits.mdx": () => import("../content/docs/api-reference/rate-limits.mdx?collection=docs"), "tutorial/basic-obfuscation.mdx": () => import("../content/docs/tutorial/basic-obfuscation.mdx?collection=docs"), "tutorial/best-practices.mdx": () => import("../content/docs/tutorial/best-practices.mdx?collection=docs"), "tutorial/getting-started.mdx": () => import("../content/docs/tutorial/getting-started.mdx?collection=docs"), "tutorial/html-obfuscation.mdx": () => import("../content/docs/tutorial/html-obfuscation.mdx?collection=docs"), "tutorial/vm-obfuscation.mdx": () => import("../content/docs/tutorial/vm-obfuscation.mdx?collection=docs"), }),
};
export default browserCollections;