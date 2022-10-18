const btn1 = document.getElementById('btn1');

const on = () => 
{
     document.getElementById('myImg').src="light on.jpg";
}
const off = () =>
{
    document.getElementById('myImg').src="light off.jpg";
}
btn1.addEventListener('click', on);
btn2.addEventListener('click', off);