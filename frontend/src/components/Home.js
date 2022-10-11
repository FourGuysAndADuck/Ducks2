import useFetch from "../useFetch";

const Home = () =>  {

    const {data: user, isPending, error} = useFetch("http://localhost:8080/api/users");

    console.log(user);

    for (let i = 0; i < user.length; i++) {
        console.log(user[i].username);
    }

    return(
        <>
            <h1>Homepage</h1>
        </>
    );
}

export default Home;
