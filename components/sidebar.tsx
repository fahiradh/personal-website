import { aboutYou } from "../lib/data";

export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      {/* Description */}
      <p className="text-sm text-muted-foreground tracking-tight">
        {aboutYou.description}
      </p>
      <br></br>
      <p className="text-sm text-muted-foreground tracking-tight">
        Have anything to connect with me? Please reach me via {" "}
        <a href={`mailto:${aboutYou.email}`}>{aboutYou.email}</a>
      </p>
    </div>
  );
}