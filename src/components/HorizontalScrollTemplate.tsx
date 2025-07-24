// Template for horizontal scrollable content in constrained layouts

const HorizontalScrollTemplate = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed width */}
      <aside className="w-64 bg-gray-100 flex-shrink-0">
        <div className="p-4">Sidebar Content</div>
      </aside>

      {/* Main content area - CRITICAL: min-w-0 allows shrinking */}
      <main className="flex-1 min-w-0 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide mb-6">
          {/* Content wrapper - w-max allows expansion beyond parent */}
          <div className="flex gap-4 w-max">
            {/* Fixed-width items - flex-shrink-0 prevents shrinking */}
            <div className="w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Card 1</h3>
              <p>Fixed width content that won't shrink</p>
            </div>

            <div className="w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Card 2</h3>
              <p>Another fixed width card</p>
            </div>

            <div className="w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Card 3</h3>
              <p>This will scroll horizontally</p>
            </div>

            <div className="w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Card 4</h3>
              <p>Even more content</p>
            </div>
          </div>
        </div>

        {/* Regular content below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Regular Content</h3>
            <p>
              This content behaves normally and wraps within the available
              space.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">More Content</h3>
            <p>This also respects the layout boundaries.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HorizontalScrollTemplate;
