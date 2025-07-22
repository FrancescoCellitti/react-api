import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const actressUrl = ("https://lanciweb.github.io/demo/api/actresses/")
  const url = ("https://lanciweb.github.io/demo/api/actors/")
  const [actorData, setActorData] = useState([])
  const [actressData, setActressData] = useState([])
  const [allActor, setAllActor] = useState([])
  const [search, setSearch] = useState('')

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
        setActressData(data)
      })
  }, [])

  useEffect(() => {
    setAllActor(actorData.concat(actressData))
  }, [actorData, actressData])

  const filteredActors = allActor.filter(actor =>
    actor.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <h1>Actor/Actress</h1>
      <div className="container">
        <input type="text" placeholder="Cerca per nome..." className="form-control mb-3" value={search} onChange={(e) => setSearch(e.target.value)} />

        <div className="row mb-2">
          {filteredActors.map((actor, index) => {
            return (

              <div key={index} className="col-6 mb-2">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={actor.image} className="img-fluid rounded-start" style={{
                        width: '300px',
                        height: '300px',
                        objectFit: 'cover'
                      }} alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{actor.name}</h5>
                        <p className="card-text">{actor.birth_year}</p>
                        <p className="card-text"><small className="text-body-secondary">{actor.nationality}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{actor.biography}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{actor.awards}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            )

          })}
        </div>
      </div>
    </>
  )
}

export default App
