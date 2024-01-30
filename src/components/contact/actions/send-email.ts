"use server";

function SendEmailAction(data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const title = data.get("title");
  const description = data.get("description");

  console.log({ name, email, title, description });
}

export { SendEmailAction };
