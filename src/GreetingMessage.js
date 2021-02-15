function GreetingMessage(props){
    return <h1>Hello React! By {props.name}</h1>
  }
  export function ProductItem(){
    return <div>
        <h1>Product: Macbook pro M1</h1>
        <p>The best Notebook of the World</p>
        <p>MUST HAVE!!!</p>
    </div>
}

export function OrderItem(){
    return <button>BUY NOW!!</button>
}

export function TestMix(){
    return <h1>Test Mix</h1>
}

  export default GreetingMessage;