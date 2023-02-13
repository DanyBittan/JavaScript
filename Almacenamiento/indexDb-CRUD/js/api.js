async function APIData(){
    const request = await fetch("https://randomuser.me/api/");
    const json = await request.json();
    return json.results[0];
}
APIData();