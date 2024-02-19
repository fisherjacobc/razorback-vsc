type BaseNode = {
  index: number;
};

export type ValueNode = BaseNode & {
  Value: Node | Node[];
};

export type StringNode = BaseNode & {
  Text: string;
};

export type BooleanNode = BaseNode & {
  Boolean: string;
};

export type IntegerNode = BaseNode & {
  Integer: number;
};

export type FloatNode = BaseNode & {
  Float: number;
};

export type TemplateNode = BaseNode & {
  Template: Node[];
};

export type CallNode = BaseNode & {
  Call: {
    name: string;
    options: Array<unknown>;
    children: Node[];
  };
};

export type AssignNode = BaseNode & {
  Assign: {
    name: string;
    value: Node;
  };
};

export type VariableReferenceNode = BaseNode & {
  Reference: string;
};

export type ArrayNode = BaseNode & {
  Array: Node[];
};

export type ObjectNode = BaseNode & {
  Object: Array<[string, Node]>;
};

export type Node =
  | ValueNode
  | StringNode
  | BooleanNode
  | IntegerNode
  | FloatNode
  | TemplateNode
  | CallNode
  | AssignNode
  | VariableReferenceNode
  | ArrayNode
  | ObjectNode;

/**
 * The type of tag
 */
export type TagType =
  | "global"
  | "plugin"
  | "command"
  | "channel"
  | "emoji"
  | "arrays"
  | "objects"
  | "message"
  | "responder"
  | "role"
  | "server"
  | "store"
  | "user";

export type TagArgumentType = {
  /**
   * Name of the argument
   */
  name: string;
  /**
   * The description of the argument
   */
  description: string;
  /**
   * If the argument is required or not
   */
  required: boolean;
  /**
   * If the argument is a spread argument or not
   */
  spread: boolean;
};

export type TagExampleType = {
  /**
   * Note about the example
   */
  note: string;
  /**
   * Code block of the example
   */
  code: string;
};

/**
 * Base tag type
 */
export type BaseTagType = {
  /**
   * The tag type
   *
   * see {@link TagType}
   */
  type: TagType;
  /**
   * The name of the tag
   */
  name: string;
  /**
   * The description of the tag
   */
  description: string;
  /**
   * The documentation url of the tag
   */
  url: string;
  /**
   *
   */
  conditionalParsing?: boolean;
  /**
   * Aliases of the tag
   *
   * example:
   * ```rz
   * {channel.mention}
   * {channel}
   * ```
   */
  aliases: string[];
  /**
   * Requirements for the tag to work
   */
  requirements: string[];
  /**
   * If the tag is expensive
   */
  expensive: boolean;
  /**
   * Any arguments for the tag
   */
  arguments: TagArgumentType[];
  /**
   * Examples of the tag being used to show to the developer
   */
  examples: TagExampleType[];
};

/**
 * Type for tags that aren't related to a plugin
 */
export type NonPluginTag = BaseTagType & {
  type: Exclude<TagType, "plugin">;
};

export type PluginTagType = "suggestion" | "ticket";

export type PluginTag = BaseTagType & {
  type: "plugin";
  plugin: PluginTagType;
};

export type Tag = NonPluginTag | PluginTag;
