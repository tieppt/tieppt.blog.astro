export function joinURL(baseURL: string, path: string) {
  let finalPath = baseURL;
  if (baseURL.endsWith('/')) {
    finalPath = baseURL.slice(0, -1);
  }
  if (path.startsWith('/')) {
    finalPath += path;
  } else {
    finalPath += '/' + path;
  }
  return finalPath;
}
