import { useState } from "react";

const CopyLinkButton = ({ textToCopy = window.location.href }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      // Revert back to original state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-2 py-2 rounded-md flex items-center gap-2 transition-colors flex-shrink-0 bg-accent-100 hover:bg-accent-100-hover text-white"
    >
      <span className="text-sm font-medium text-[9.2px] min-lg:text-sm">
        {isCopied ? "Copied!" : "Copy Link"}
      </span>
      {isCopied ? (
        // <IoCheckmark className="text-[9.2px] min-lg:text-sm" />
        <span></span>
      ) : (
        // <IoCopyOutline className="text-[9.2px] min-lg:text-sm" />
        <span></span>
      )}
    </button>
  );
};

export default CopyLinkButton;
