import Header from "@/components/SearchBar";
import TopBar from "@/components/TopBar";
import Card01 from "@/components/cards/Card01";
import Card02 from "@/components/cards/Card02";
import Card03 from "@/components/cards/Card03";
import Card04 from "@/components/cards/Card04";
import Card05 from "@/components/cards/Card05";
import NavBar01 from "@/components/navbars/NavBar01";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <NavBar01 />
      <section className="container flex flex-row flex-wrap items-start justify-start gap-8 ">
        <Card01 />
        <Card02 />
        <Card03 />
        <Card04 />
        <Card05 />
      </section>
    </>
  );
}
