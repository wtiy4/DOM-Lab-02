let students = [{
        name: "Alwaleed",
        age: 24,
        url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
    },
    {
        name: "Faisal",
        age: 20,
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgonline.com.ua%2Feng%2Frandom-pixels-background.php&psig=AOvVaw1pe_sclNQk8EZPyfCvJi98&ust=1746700317739000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjeuvOTkY0DFQAAAAAdAAAAABAE"
    },
    {
        name: "Raseel",
        age: 15,
        url: "https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
    }
]


// students.forEach(student => {
//     let text = document.createElement("h2");
//     text.textContent = `URL is: ${student.url}`;
//     document.body.appendChild(text);
// });

let container = document.body

students.forEach(el => {
    let img = document.createElement("img");
    img.src = el.url;
    container.appendChild(img);
});
console.log(students)