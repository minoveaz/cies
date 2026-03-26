// Asset path helper for GitHub Pages
export function assetPath(path: string): string {
  const basename = import.meta.env.BASE_URL || '/cies/';
  return `${basename}${path.startsWith('/') ? path.slice(1) : path}`;
}
