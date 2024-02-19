import { CallNode, Tag } from "..";
import { tags as tagData } from "../tags";

const tags = new Map<string, Tag>();
tagData.forEach((tag) => {
  tags.set(tag.name.toLowerCase(), tag);
  if (tag.aliases) {
    for (const alias of tag.aliases) {
      tags.set(alias.toLowerCase(), tag);
    }
  }
});

/**
 * Get a tag based on the tag name
 *
 * @param name The name of the tag
 * @returns A tag if there is one
 */
export function getTagFromName(name: string) {
  const query = name.toLowerCase();
  return tags.get(query);
}

/**
 * Get a tag based on a node, more specifically, a {@linkcode CallNode}
 *
 * @param node The node
 * @returns A tag if there is one
 */
export function getTagFromNode(node: CallNode) {
  return getTagFromName(node.Call.name);
}
