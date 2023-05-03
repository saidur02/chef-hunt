
const MainSection = () => {
    const [chef,setChef] = useState ([])


    useEffect( () => {
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.error(error))

    },[])

    return (
        <Container>
           
        </Container>
    );
};

export default MainSection;