/**
 * Inline script that sets the theme class BEFORE first paint, reading the
 * saved preference or falling back to the OS setting. This prevents a
 * flash of the wrong theme on load. It must run in <head>, un-deferred.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
