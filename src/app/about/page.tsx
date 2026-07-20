import { redirect } from "next/navigation";

// The About content now lives on the Who I Am page.
export default function AboutPage() {
  redirect("/about/who-i-am");
}
