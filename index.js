async function renderProducts () {
  const response = await fetch("http://localhost:3333/products", {
    method: 'GET',
})

if(response.ok) {
    const produtos = response.json()
} else {
    console.log('erro na requisição')
}

}