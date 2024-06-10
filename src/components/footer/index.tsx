import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-zinc-300/10 w-full h-fit p-5">
      <p className="font-medium">
        &copy; {year} Bruno Azevedo. Para oportunidades profissionais,
        conecte-se no{" "}
        <Link
          href={"https://www.linkedin.com/in/bruno-azevedo-02736bb2/"}
          target="_blank"
          className="underline tracking-wider hover:text-zinc-300 duration-100 transition-all ease-in-out"
        >
          LinkedIn
        </Link>
      </p>
    </div>
  );
}

export { Footer };
