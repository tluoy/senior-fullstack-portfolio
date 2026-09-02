function PageLoader() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <p className="text-sm font-medium text-slate-600">
        Loading page...
      </p>
    </div>
  );
}

export default PageLoader;