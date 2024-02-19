import * as razorback from "razorback";
import { ValueNode } from ".";

/**
 * Parse text and turn it into an array of Nodes
 *
 * @param text The text to parse
 * @returns The array of nodes
 */
export function parse(text: string): ValueNode | null {
  try {
    return <ValueNode>razorback.parse(text);
  } catch (error) {
    console.log(`Error parsing text: ${error}`);
    return null;
  }
}
