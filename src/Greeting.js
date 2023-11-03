export function Greeting(props) {
    console.log(props);
    return <h1> {[props.title]}</h1>
    
}

export function UserCard() {
    return <h1>User Card</h1>
}