"use client";

import { useCallback, useEffect, useState } from "react";
import type { BrowserVoice } from "./types";

function loadBrowserVoices(): BrowserVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return [];
  }

  return window.speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.startsWith("en"))
    .map((voice) => ({
      id: voice.voiceURI,
      name: voice.name,
      lang: voice.lang,
    }));
}

export function useFreeTts() {
  const [browserVoices, setBrowserVoices] = useState<BrowserVoice[]>([]);
  const [browserVoiceId, setBrowserVoiceId] = useState("");
  const [rate, setRate] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const syncVoices = () => {
      const voices = loadBrowserVoices();
      setBrowserVoices(voices);
      setBrowserVoiceId((current) => current || voices[0]?.id || "");
    };

    syncVoices();
    window.speechSynthesis?.addEventListener("voiceschanged", syncVoices);
    return () => {
      window.speechSynthesis?.removeEventListener("voiceschanged", syncVoices);
    };
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string) => {
      setError(null);
      if (!text.trim() || typeof window === "undefined") {
        return;
      }

      if (!window.speechSynthesis) {
        setError("Text-to-speech is not supported in this browser.");
        return;
      }

      stop();
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = window.speechSynthesis
        .getVoices()
        .find((item) => item.voiceURI === browserVoiceId);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.rate = rate;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    },
    [browserVoiceId, rate, stop],
  );

  return {
    browserVoices,
    browserVoiceId,
    setBrowserVoiceId,
    rate,
    setRate,
    isSpeaking,
    error,
    speak,
    stop,
  };
}
