// const [isLoading, setLoading] = useState(true)
// const [isError, setError] = useState(false)

// useEffect(() => {
//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         setLoading(false)
//         setError(true)
//       }
//     })
//     .then((data) => {
//       const user = data
//       console.log(user)
//       setError(false)
//       setLoading(false)
//     })
// }, [])
// if (isError) {
//   return <h1>Error...</h1>
// }
// if (isLoading) {
//   return <h1>Loaging...</h1>
// }
