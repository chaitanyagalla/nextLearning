import axios from 'axios';

async function getUserDetails() {
    try { 
    //   const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
    const response = await axios.get('http://localhost:3000/api/user');
    return response.data;
} catch (error) {
    console.log(error)
}
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