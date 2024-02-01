import { cookies } from "next/headers";

function GetCookie(name: string) {
  const cookieStore = cookies();
  return cookieStore.get(name);
}

function SetCookie(name: string, value: string) {
  const cookieStore = cookies();
  return cookieStore.set(name, value);
}

export { GetCookie, SetCookie };
