export function getJsonValueByPath(json: Record<string, any>, path: string): any {
  return path
    .replace(/\[(\d+)]/g, '.$1')
    .split('.')
    .reduce((result: Record<string, any> | undefined, key) => {
      return result !== undefined && key in result ? result[key] : undefined;
    }, json);
}
