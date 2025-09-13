import client from "@/global"


async function getUserDetails() {
    const user = await client.user.findFirst({})

        return ({
        email : user?.email,
        username : "chaitanya122"
    })
}

export default async function Home() {
//   await new Promise (resolve => setTimeout(resolve, 5000))
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.username}
          </div>
          {userData?.email}
        </div>
      </div>
    </div>
  );
}