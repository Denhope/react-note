declare module '*.json' {
  const res: string;
  export default res;
}
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
