// The gallery page Playwright's `mount` fixture drives: it exposes window.mount({ story, props })
// and renders the story into #root. Story ids are the path under src/ plus the export name,
// e.g. "components/Button/Primary".
import { createRoot } from 'react-dom/client';

const modules = import.meta.glob('../src/**/*.story.jsx', { eager: true });
const stories = {};
for (const [path, mod] of Object.entries(modules)) {
  const base = path.replace('../src/', '').replace(/\.story\.jsx$/, '');
  for (const [name, Story] of Object.entries(mod)) stories[`${base}/${name}`] = Story;
}

let root;

window.mount = async ({ story, props }) => {
  const Story = stories[story];
  if (!Story) throw new Error(`Unknown story: ${story}`);
  root ??= createRoot(document.getElementById('root'));
  await new Promise(resolve => {
    root.render(<Story {...props} />);
    requestAnimationFrame(resolve);
  });
};

window.unmount = async () => {
  root?.unmount();
  root = undefined;
};
