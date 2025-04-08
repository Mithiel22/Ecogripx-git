
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function FicheTechnique() {
  return (
    <div className="max-w-4xl mx-auto p-6 grid gap-6">
      <h1 className="text-4xl font-bold text-center">Fiche Technique – EcoGrip-X</h1>
      <p className="text-center text-lg text-muted-foreground">Version Alpha 1.0 – Open Source Design</p>
      <img
        src="/images/fiche-technique-ecogripx.png"
        alt="Schéma technique EcoGrip-X"
        className="w-full rounded-2xl shadow-xl my-6"
      />
      {/* (Sections techniques ici, identiques à celles du fichier initial fourni) */}
    </div>
  );
}
