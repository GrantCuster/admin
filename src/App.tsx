import { useMemo } from "react";

function App() {
  const greeting = useMemo(() => {
    // Greet based on time of day
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      return "Good morning";
    }
    if (hours < 18) {
      return "Good afternoon";
    }
    return "Good evening";
  }, []);

  return (
    <div className="h-screen w-screen flex">
      <div className="mx-auto px-2 py-4 overflow-auto w-full max-w-md">
        <div className="mb-4">{greeting}, Grant</div>
        <div className="mb-4">What are you looking to do today?</div>
        <div className="">Tools</div>
        <div>
          <div>
            -{" "}
            <a
              href="/uploader"
              className="text-[var(--yellow)] hover:text-[var(--bright-yellow)]"
            >
              Uploader
            </a>
          </div>
        </div>
        <div className="mt-4">Links</div>
        <div>
          <div>
            -{" "}
            <a
              href="https://github.com/grantcuster/nix-simple"
              className="text-[var(--green)] hover:text-[var(--bright-green)]"
            >
              Nix simple repo
            </a>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
