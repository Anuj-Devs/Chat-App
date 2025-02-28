import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "r3fe8uq92sfg";
const api_secret = "w4v637jczark523853pcbwd8tsn5mhd3kss3yqwn8npptn5rcx8kkefe33f8y3ub";
const user_id = "user_2tJ7lhm2I2aOD5J7HoJbkhkvpiL";


export async function POST(request) {

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // console.log(token);
  const user = await request.json()
  const token = serverClient.createToken(user.data.id);

  const client = await clerkClient()

  await serverClient.upsertUser({id: user.data.id})

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token
    },
  })


  const slugs = ['python', 'javascript', 'cpp', 'golang', 'rust'];
  slugs.forEach(async (element) => {
    const channel = serverClient.channel('messaging', element, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(element),
      created_by_id: user.data.id
    });

    await channel.create()
    channel.addMembers([user.data.id])
  });

  return Response.json({ message: "TEST"})
}
