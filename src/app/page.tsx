import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-xl bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm rounded-lg p-4 text-center m-auto">
      ⚠️ La demo está disponible únicamente de <strong>7:00 AM a 10:00 PM</strong>.
      <br className="sm:hidden" />
      En este momento no se puede acceder. Por favor, vuelva a intentarlo mañana.
    </div>

  );
}
