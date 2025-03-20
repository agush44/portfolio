import RetroBtn from "../UI/Button/RetroBtn";
import FuzzyOverlay from "../components/FuzzyOverlay";
import TerminalForm from "../components/TerminalForm";

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-gray-900 z-900">
      <FuzzyOverlay />
      <TerminalForm />
    </div>
  );
}
