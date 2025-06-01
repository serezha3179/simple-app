const div = document.querySelector('#div');
const button = document.querySelector('#button');



button.addEventListener("click", (e) => {
    async function weather() { 
        let res = await fetch("/api/weather", {
            method: "GET",
        })
        let data = await res.json()
        console.log(data);
    }
    weather()
    console.log('ffffff');
})