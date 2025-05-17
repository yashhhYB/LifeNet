// This file is intentionally left to render null.
// The root path `/` is handled by src/app/page.tsx which redirects to /dashboard.
// The /dashboard path is handled by src/app/(app)/dashboard/page.tsx.
// This file's purpose is to ensure that if Next.js attempts to find a page 
// for the root of the (app) group, it encounters a valid component that does nothing,
// thereby preventing potential routing conflicts or redirect loops.

export default function AppRootPlaceholderPage() {
  return null;
}
