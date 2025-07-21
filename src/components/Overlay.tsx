"use client";

// import { useOverlay } from '@/contexts/PanelContext'
const Overlay = () => {
  // const overlay = useOverlay()

  // if (!overlay.isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-black/30 transition-opacity duration-300 z-350"
      // onClick={overlay.onClick}
    ></div>
  );
};

export default Overlay;
