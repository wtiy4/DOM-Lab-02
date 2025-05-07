let students = [{
        name: "Alwaleed",
        age: 24,
        url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        gender: "male"
    },
    {
        name: "Faisal",
        age: 20,
        url: "https://images.pexels.com/photos/31829947/pexels-photo-31829947/free-photo-of-close-up-of-monstera-leaves-with-dew-drops.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
        gender: "male"

    },
    {
        name: "Raseel",
        age: 15,
        url: "https://fastly.picsum.photos/id/893/200/200.jpg?hmac=MKUqbcyRrvAYoTmgHo74fEI3o9V4CH2kBrvWfmHkr7U",
        gender: "fmale"
    }
]




let container = document.body

students.forEach(el => {
    let img = document.createElement("img");
    img.src = el.url;
    container.appendChild(img);
    img.style.width = "400px"
    img.style.height = "400px"

});

console.log(students)