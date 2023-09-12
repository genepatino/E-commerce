import { useEffect, useState } from "react"
import { Card } from "../../Components/Card"
import {ProductDetail} from "../../Components/ProductDetail"
import { apiFakeApp } from "../../utils/apiUrl"

const Home = () => {
  const [articleData, setArticleData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(apiFakeApp)
      const data = await response.json()
      setArticleData(data)
    } catch (error) {
      console.error(`Oh no, se ha presentado un error: ${error}`)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])
  

  return (
    <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
      {articleData?.map(item => (
        <Card key={item.id} data = {item}/>
      ))}
      <ProductDetail/>
    </div>
  )
}
  
  export {Home}