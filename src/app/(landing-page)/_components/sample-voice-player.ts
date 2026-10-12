type Listener = (activeId: string | null) => void;

let activeId: string | null = null;
let audio: HTMLAudioElement | null = null;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener(activeId));
}

export function subscribeSampleVoice(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getActiveSampleVoice() {
  return activeId;
}

export function stopSampleVoice() {
  const current = audio;
  audio = null;
  if (current) {
    current.pause();
    current.removeAttribute("src");
    current.load();
  }
  if (activeId !== null) {
    activeId = null;
    emit();
  }
}

export function toggleSampleVoice(id: string, src: string) {
  if (typeof window === "undefined") return;

  if (activeId === id) {
    stopSampleVoice();
    return;
  }

  stopSampleVoice();
  const next = new Audio(src);
  audio = next;
  activeId = id;
  emit();

  const clearIfCurrent = () => {
    if (audio !== next) return;
    audio = null;
    activeId = null;
    emit();
  };
  next.addEventListener("ended", clearIfCurrent);
  next.addEventListener("error", clearIfCurrent);
  void next.play().catch(clearIfCurrent);
}
