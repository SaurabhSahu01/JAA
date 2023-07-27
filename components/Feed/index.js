import React from 'react'
import JNUNews from './JNUNews'
import { newsAPI } from '@/firebase.config';

function Feed() {
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem('JNUNews')) {
      console.log("if")
      // fetch from the API and store the data in the localStorage
      fetch(`https://newsapi.org/v2/everything?q=JNU&from=2023-06-27&sortBy=publishedAt&apiKey=${newsAPI}`)
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('JNUNews', JSON.stringify(data.articles));
          setMount(true);
        })
        .catch(err => {
          console.log("error fetching the newsAPI, ", err);
        })
    }
    else{
      setMount(true);
    }
  }, [])
  return (
    mount && <>
      <JNUNews />
    </>
  )
}

export default Feed