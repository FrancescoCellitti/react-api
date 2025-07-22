import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const actressUrl = ("https://lanciweb.github.io/demo/api/actresses/")
  const url =("https://lanciweb.github.io/demo/api/actors/")
  const [actorData, setActorData] = useState([])
  const [actressData, setActressData] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setActorData(data)
    })
  }, [])

  useEffect(() => {
    fetch(actressUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setActorData(data)
    })
  }, [])

  return (
    <>
      <h1>Actor/Actress</h1>
      {actorData.map(actor=>{
        <div className="container">
          <div className="card">
            
          </div>
        </div>
      })}
    </>
  )
}

export default App
