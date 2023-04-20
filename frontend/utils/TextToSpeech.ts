export function speak(text: string) {
  const synth = window.speechSynthesis;

  if (!synth) {
    console.warn("Speech synthesis is not supported on this browser.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
