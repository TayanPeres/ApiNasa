export async function getNeo() {
    //await pra pegar direto no response o retorno pra promisse
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY');
    const result = await response.json();
    return result["near_earth_objects"]
}